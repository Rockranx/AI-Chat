import CrisisCenter from "../models/CrisisCenter.js";
import MapService from "../services/MapService.js";
import logger from "../utils/logger.js";

export const getCrisisCenters = async (req, res) => {
  try {
    const centers = await CrisisCenter.find({})
      .select("name address phone services availability")
      .lean();

    if (!centers.length) {
      return res.status(404).json({ message: "No crisis centers found" });
    }
    res.json(centers);
  } catch (error) {
    logger.error("Crisis Center Fetch Error:", error);
    res.status(500).json({ message: error.message });
  }
};

export const createCrisisCenter = async (req, res) => {
  try {
    const { name, address, phone, services, availability } = req.body;
    
    if (!name || !address?.full) {
      return res.status(400).json({ 
        error: 'Name and full address are required' 
      });
    }

    const existingCenter = await CrisisCenter.findOne({ name });
    if (existingCenter) {
      return res.status(409).json({ 
        error: 'Crisis center with this name already exists' 
      });
    }

    const geoData = await MapService.geocodeAddress(address.full);
    if (!geoData) {
      return res.status(400).json({ 
        error: 'Address validation failed',
        details: 'Could not locate valid coordinates for this address'
      });
    }

    const newCenter = await CrisisCenter.create({
      name,
      address: {
        ...address,
        full: address.full.trim()
      },
      formattedAddress: geoData.formatted,
      phone,
      services: services || [],
      availability: availability || {},
      location: {
        type: 'Point',
        coordinates: [geoData.lon, geoData.lat]
      },
      geoapifyData: geoData.raw
    });

    res.status(201).json(newCenter);

  } catch (error) {
    logger.error('Create Center Error:', error);
    res.status(500).json({ error: 'Failed to create crisis center' });
  }
};

export const getNearbyCenters = async (req, res) => {
  try {
    const { lat, lon, radius = 5000 } = req.query;
    
    // Validate coordinates
    if (!lat || !lon) {
      return res.status(400).json({ error: 'Missing coordinates' });
    }
    
    const numericLat = parseFloat(lat);
    const numericLon = parseFloat(lon);
    const numericRadius = parseInt(radius);

    if (isNaN(numericLat)) return res.status(400).json({ error: 'Invalid latitude' });
    if (isNaN(numericLon)) return res.status(400).json({ error: 'Invalid longitude' });
    if (isNaN(numericRadius)) return res.status(400).json({ error: 'Invalid radius' });

    // MongoDB requires [longitude, latitude] order
    const coordinates = [numericLon, numericLat];

    // Add debug logging
    logger.info('Searching centers near:', { coordinates, radius: numericRadius });

    const centers = await CrisisCenter.find({
      location: {
        $nearSphere: {
          $geometry: {
            type: 'Point',
            coordinates
          },
          $maxDistance: numericRadius
        }
      }
    }).lean();

    logger.info(`Found ${centers.length} centers in radius`);

    // Return early if no centers found
    if (centers.length === 0) {
      return res.json([]);
    }

    // Enrich with addresses
    const centersWithAddresses = await Promise.all(
      centers.map(async center => {
        try {
          const reverseGeo = await MapService.reverseGeocode(
            center.location.coordinates[1], // latitude
            center.location.coordinates[0]  // longitude
          );
          
          return {
            ...center,
            verifiedAddress: reverseGeo?.formatted || center.formattedAddress,
            distance: calculateDistance(
              numericLat,
              numericLon,
              center.location.coordinates[1],
              center.location.coordinates[0]
            )
          };
        } catch (error) {
          logger.error('Reverse geocode failed for center:', center._id);
          return center; // Return original data if reverse geocoding fails
        }
      })
    );

    res.json(centersWithAddresses);
  } catch (error) {
    logger.error('Nearby Centers Error:', error);
    res.status(500).json({ error: 'Location search failed' });
  }
};

// Helper function to calculate distance in meters
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI/180;
  const φ2 = lat2 * Math.PI/180;
  const Δφ = (lat2-lat1) * Math.PI/180;
  const Δλ = (lon2-lon1) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return Math.round(R * c);
};

export const getCrisisResources = (req, res) => {
  try {
    // Serves static resources from /public/crisis-resources
    res.json({
      resources: [
        "/api/crisis/resources/safety-plan.pdf",
        "/api/crisis/resources/emergency-contacts.md",
        "/api/crisis/resources/coping-strategies.pdf",
      ],
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to load resources" });
  }
};



export const updateCrisisCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }
    const center = await CrisisCenter.findById(id);
    if (!center) {
      return res.status(400).json({ error: "crisis center not found" });
    }
    if (updates.address?.full && updates.address.full !== center.address.full) {
      const geoData = await MapService.geocodeAddresss(updates.address.full);
      if (!geoData) {
        return res.status(400).json({ error: "Counl not geocode new address" });
      }
      updates.location = {
        type: "Point",
        coordinates: [geoData.lon, geoData.lat],
      };
    }
    const updatedCenter = await CrisisCenter.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    );
    res.json(updatedCenter);
  } catch (error) {
    logger.error("update center error: ", error);
    res.status(500).json({ error: "filed to update crisis center" });
  }
};
export const deleteCrisisCenter = async (req, res) => {
  try {
    await CrisisCenter.findByIdAndDelete(req.params.id);
    res.json({ message: 'Center deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Center deletion failed' });
  }
};
// controllers/crisisController.js
export const getCrisisCenterById = async (req, res) => {
  try {
    const center = await CrisisCenter.findById(req.params.id)
      .populate('geoapifyData')
      .lean();

    if (!center) {
      return res.status(404).json({ error: 'Crisis center not found' });
    }

    res.json(center);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch crisis center' });
  }
};