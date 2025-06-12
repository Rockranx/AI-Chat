import fetch from 'node-fetch';
import logger from '../utils/logger.js';

class MapService {
  constructor() {
    this.GEOCODE_URL = 'https://api.geoapify.com/v1/geocode/search';
    this.REVERSE_GEOCODE_URL = 'https://api.geoapify.com/v1/geocode/reverse';
  }

  async geocodeAddress(address) {
    try {
      if (!address || typeof address !== 'string') {
        throw new Error('Invalid address format');
      }

      const response = await fetch(
        `${this.GEOCODE_URL}?text=${encodeURIComponent(address)}&format=json&apiKey=${process.env.GEOAPIFY_API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`Geoapify API Error: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (!data.results || data.results.length === 0) {
        logger.warn('No geocoding results found', { address });
        return null;
      }

      // Find result with highest confidence score
      const bestResult = data.results.reduce((acc, curr) => 
        curr.rank.confidence > (acc?.rank.confidence || 0) ? curr : acc, null
      );

      if (!bestResult || bestResult.rank.confidence < 0.5) {
        logger.warn('Low confidence geocoding result', {
          address,
          confidence: bestResult?.rank.confidence
        });
        return null;
      }

      return {
        lat: bestResult.lat,
        lon: bestResult.lon,
        formatted: bestResult.formatted,
        address: bestResult.address,
        raw: bestResult
      };

    } catch (error) {
      logger.error('Geocoding failed:', error.message);
      return null;
    }
  }

  async reverseGeocode(lat, lon) {
    try {
      const response = await fetch(
        `${this.REVERSE_GEOCODE_URL}?lat=${lat}&lon=${lon}&format=json&apiKey=${process.env.GEOAPIFY_API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`Reverse geocoding failed: ${response.statusText}`);
      }

      const data = await response.json();
      
      return {
        formatted: data.results?.[0]?.formatted,
        address: data.results?.[0]?.address
      };

    } catch (error) {
      logger.error('Reverse geocoding failed:', error.message);
      return null;
    }
  }
}

export default new MapService();