import React, { useEffect, useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
const resources = [
  {
    id: 1,
    title: "National Suicide Prevention Lifeline",
    description: "24/7 Free support for people in distress.",
    urgency: "Immediate Help",
    serviceType: "Hotline",
    openTime: "24/7",
    callLine: "911",
    localStorage: "National",
    icon: <IoCallOutline />,
    action: "Call Now",
  },
  {
    id: 2,
    title: "Substance Abuse Hotline",
    description: "24/7 assistance for substance issues.",
    urgency: "Immediate Help",
    serviceType: "Hotline",
    openTime: "24/7",
    callLine: "988",
    localStorage: "National",
    // icon: <FiMessageSquare />,
    icon: <IoCallOutline />,
    action: "Call Now",
  },
  {
    id: 3,
    title: "Mental Health Textline",
    description: "Text-based support for mental health.",
    urgency: "Preventative Care",
    serviceType: "Text",
    openTime: "24/7",
    callLine: "988",
    localStorage: "National",
    icon: <FaRegHeart />,
    action: "Text Now",
  },
  {
    id: 4,
    title: "Medical Assistance Line",
    description: "Medical support for urgent needs.",
    urgency: "Immediate Help",
    serviceType: "Medical",
    openTime: "24/7",
    callLine: "988",
    localStorage: "National",
    icon: <FaRegHeart />,
    action: "Call Now",
  },
  {
    id: 5,
    title: "Community Social Support",
    description: "Local community social care resources.",
    urgency: "Preventative Care",
    serviceType: "Social",
    openTime: "24/7",
    callLine: "988",
    localStorage: "National",
    icon: <IoShareSocialOutline />,
    action: "Call Now",
  },
  {
    id: 6,
    title: "Crisis Text Line",
    description: "Free 24/7 crisis support via text",
    urgency: "Immediate Help",
    serviceType: "Text",
    openTime: "24/7",
    callLine: "Text HOME to 741741",
    localStorage: "National",
    icon: <FiMessageSquare />,
    action: "Text Now",
  },
  {
    id: 7,
    title: "Community Mental Health Center",
    description: "Walk-in crisis services available",
    urgency: "Preventataive care ",
    address: "123 Main St, Your City",
    serviceType: "Medical",
    openTime: "8 AM - 8 PM",
    callLine: "(555) 123-4567",
    localStorage: "National",
    icon: <FaRegHeart />,
    action: "Call Now",
  },
  {
    id: 8,
    title: "Emergency Room - City Hospital",
    description: "Emergency psychiatric services",
    urgency: "Immediate Help",
    serviceType: "Medical",
    openTime: "24/7",
    callLine: "911",
    localStorage: "National",
    icon: <FaRegHeart />,
    action: "Call Now",
  },
  {
    id: 9,
    title: "Peer Support Group",
    description: "Free 24/7 crisis support via text",
    urgency: "Immediate Help",
    serviceType: "Text",
    openTime: "Mon-Fri 6-8 PM",
    callLine: "(555) 987-6543",
    localStorage: "National",
    icon: <IoShareSocialOutline />,
    action: "Text Now",
  },
];

const Crisis = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUrgency, setSelectedUrgency] = useState("All Levels");
  const [selectedServiceType, setSelectedServiceType] = useState("All Types");
  const [filteredResources, setFilteredResources] = useState(resources);

  // Filtering logic
  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();

    const filtered = resources.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(lowercasedQuery) ||
        item.description.toLowerCase().includes(lowercasedQuery);

      const matchesUrgency =
        selectedUrgency === "All Levels" || item.urgency === selectedUrgency;

      const matchesService =
        selectedServiceType === "All Types" ||
        item.serviceType === selectedServiceType;

      return matchesSearch && matchesUrgency && matchesService;
    });

    // Sort to prioritize Immediate Help
    const urgencyOrder = ["Immediate Help", "Preventative Care", "All Levels"];
    filtered.sort(
      (a, b) =>
        urgencyOrder.indexOf(a.urgency) - urgencyOrder.indexOf(b.urgency)
    );

    setFilteredResources(filtered);
  }, [searchQuery, selectedUrgency, selectedServiceType]);

  return (
    <>
      <div className="mb-6 p-4 bg-red-600 dark:bg-red-700 text-white rounded-lg">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shield h-6 w-6"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
          </svg>
          <div>
            <h1 className="text-xl font-bold">
              Crisis Resources &amp; Support
            </h1>
            <p className="text-red-100">
              If you&#x27;re in immediate danger, call 911 or go to your nearest
              emergency room
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-filter h-5 w-5"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
                Filter Resources
              </div>
            </div>

            <div className="p-6 pt-0 space-y-4">
              {/* Search */}
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                  Search
                </label>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search h-4 w-4 absolute left-3 top-3 text-gray-400"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    placeholder="Search resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Urgency Filter */}
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                  Urgency Level
                </label>
                <div className="space-y-2">
                  {["All Levels", "Immediate Help", "Preventative Care"].map(
                    (urgency) => (
                      <button
                        key={urgency}
                        onClick={() => setSelectedUrgency(urgency)}
                        className={`inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input h-9 rounded-md px-3 w-full justify-start ${
                          selectedUrgency === urgency
                            ? "theme-primary text-white"
                            : "bg-background hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        {urgency}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Service Type Filter */}
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                  Service Type
                </label>
                <div className="space-y-2">
                  {["All Types", "Hotline", "Text", "Medical", "Social"].map(
                    (type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedServiceType(type)}
                        className={`inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input h-9 rounded-md px-3 w-full justify-start ${
                          selectedServiceType === type
                            ? "theme-primary text-white"
                            : "bg-background hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        {type}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card  glassmorphism-card mt-6">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                Quick Coping Techniques
              </div>
            </div>
            <div className="p-6 pt-0 space-y-3">
              <div className="p-3  theme-primary rounded-lg">
                <h4 className="font-medium text-white">5-4-3-2-1 Grounding</h4>
                <p className="text-sm text-white mt-1">
                  Name 5 things you see, 4 you can touch, 3 you hear, 2 you
                  smell, 1 you taste
                </p>
                <p className="text-xs text-white mt-2">2-5 minutes</p>
              </div>
              <div className="p-3 theme-primary rounded-lg">
                <h4 className="font-medium text-white">Box Breathing</h4>
                <p className="text-sm text-white mt-1">
                  Breathe in for 4, hold for 4, out for 4, hold for 4
                </p>
                <p className="text-xs text-white mt-2">3-10 minutes</p>
              </div>
              <div className="p-3 theme-primary rounded-lg">
                <h4 className="font-medium text-white">
                  Progressive Muscle Relaxation
                </h4>
                <p className="text-sm text-white mt-1">
                  Tense and release muscle groups from toes to head
                </p>
                <p className="text-xs text-white mt-2">10-20 minutes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Display Filtered Resources */}
        <div className="lg:col-span-3">
          <div className="mt-6 space-y-3">
            {filteredResources.length === 0 ? (
              <p className="text-gray-500 text-sm">No resources found.</p>
            ) : (
              filteredResources.map((item) => (
                <>
                  <div className="lg:col-span-3">
                    <div className="space-y-4">
                      <div
                        key={item.id}
                        className="glassmorphism-card rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card "
                      >
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-4">
                              <div className="p-3 theme-primary rounded-lg text-2xl">
                                {/* <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="lucide lucide-phone h-6 w-6 text-white"
                                >
                                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg> */}
                                {item.icon}
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                  {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-1">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-red-100 text-red-800 border-red-200">
                              {item.urgency}
                              {/* | {item.serviceType} */}
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-phone h-4 w-4 text-gray-500"
                              >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                              </svg>
                              <span className="text-sm font-medium">
                                {item.callLine}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-clock h-4 w-4 text-gray-500"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                              <span className="text-sm"> {item.openTime} </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-navigation h-4 w-4 text-gray-500"
                              >
                                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                              </svg>
                              <span className="text-sm">
                                {" "}
                                {item.localStorage}{" "}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 theme-primary"
                              style={{ backgroundColor: "#dc2626" }}
                            >
                              {item.action}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))
            )}
          </div>
        </div>

        {/* <div className="lg:col-span-3">
          <div className="space-y-4">
            <div className="glassmorphism-card rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-phone h-6 w-6 text-white"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        National Suicide Prevention Lifeline
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        24/7 free and confidential support
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-red-100 text-red-800 border-red-200">
                    Immediate
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone h-4 w-4 text-gray-500"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span className="text-sm font-medium">988</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock h-4 w-4 text-gray-500"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="text-sm">24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-navigation h-4 w-4 text-gray-500"
                    >
                      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                    <span className="text-sm">National</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 theme-primary"
                    style={{ backgroundColor: "#dc2626" }}
                  >
                    Call Now
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-message-square h-6 w-6 text-white"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Crisis Text Line
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Free 24/7 crisis support via text
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-red-100 text-red-800 border-red-200">
                    Immediate
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone h-4 w-4 text-gray-500"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span className="text-sm font-medium">
                      Text HOME to 741741
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock h-4 w-4 text-gray-500"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="text-sm">24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-navigation h-4 w-4 text-gray-500"
                    >
                      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                    <span className="text-sm">National</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 theme-primary"
                    style={{ backgroundColor: "#dc2626" }}
                  >
                    Send Text
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-heart h-6 w-6 text-white"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Community Mental Health Center
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Walk-in crisis services available
                      </p>
                      <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-map-pin h-3 w-3"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        123 Main St, Your City
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-blue-100 text-blue-800 border-blue-200">
                    Preventative
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone h-4 w-4 text-gray-500"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span className="text-sm font-medium">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock h-4 w-4 text-gray-500"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="text-sm">8 AM - 8 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-navigation h-4 w-4 text-gray-500"
                    >
                      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                    <span className="text-sm">0.8 miles</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 theme-primary"
                    style={{ backgroundColor: "hsl(var(--theme-primary))" }}
                  >
                    Call Now
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-navigation h-4 w-4 mr-1"
                    >
                      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-heart h-6 w-6 text-white"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Emergency Room - City Hospital
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Emergency psychiatric services
                      </p>
                      <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-map-pin h-3 w-3"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        456 Hospital Ave, Your City
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-red-100 text-red-800 border-red-200">
                    Immediate
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone h-4 w-4 text-gray-500"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span className="text-sm font-medium">911</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock h-4 w-4 text-gray-500"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="text-sm">24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-navigation h-4 w-4 text-gray-500"
                    >
                      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                    <span className="text-sm">1.2 miles</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 theme-primary"
                    style={{ backgroundColor: "#dc2626" }}
                  >
                    Call Now
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-navigation h-4 w-4 mr-1"
                    >
                      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-users h-6 w-6 text-white"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Peer Support Group
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Drop-in support group meetings
                      </p>
                      <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-map-pin h-3 w-3"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        789 Community Center Dr
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-blue-100 text-blue-800 border-blue-200">
                    Preventative
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone h-4 w-4 text-gray-500"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span className="text-sm font-medium">(555) 987-6543</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock h-4 w-4 text-gray-500"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="text-sm">Mon-Fri 6-8 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-navigation h-4 w-4 text-gray-500"
                    >
                      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                    <span className="text-sm">2.1 miles</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 theme-primary"
                    style={{ backgroundColor: "hsl(var(--theme-primary))" }}
                  >
                    Call Now
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-navigation h-4 w-4 mr-1"
                    >
                      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Crisis;
