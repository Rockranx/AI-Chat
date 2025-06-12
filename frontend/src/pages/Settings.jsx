import React from "react";
import { useTheme } from "../components/theme/ThemeContext";
import Checkbox from "../components/Checkbox";

const Settings = () => {
  const { toggleColorMode, setTheme, themes } = useTheme();
  return (
    <>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-3 mb-6">
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
            className="lucide lucide-settings h-8 w-8 text-gray-700 dark:text-gray-300"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Settings &amp; Privacy
          </h1>
        </div>
        <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
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
                className="lucide lucide-shield h-5 w-5 text-green-600"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
              Privacy &amp; Security
            </div>
          </div>
          <div className="p-6 pt-0 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  Data Permissions
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Share with Therapist</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Allow therapist access to mood data
                    </p>
                  </div>
                  
<Checkbox />
                  
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Anonymous Mode</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Hide identity in community
                    </p>
                  </div>
                  <Checkbox />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Data Collection</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Help improve the app
                    </p>
                  </div>
                 <Checkbox />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  Security
                </h3>
                <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start gap-2 hover:bg-gray-50 dark:hover:bg-gray-800">
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
                    className="lucide lucide-key h-4 w-4"
                    style={{ color: "hsl(var(--theme-primary))" }}
                  >
                    <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path>
                    <path d="m21 2-9.6 9.6"></path>
                    <circle cx="7.5" cy="15.5" r="5.5"></circle>
                  </svg>
                  Change Password
                </button>
                <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start gap-2 hover:bg-gray-50 dark:hover:bg-gray-800">
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
                    className="lucide lucide-smartphone h-4 w-4"
                    style={{ color: "hsl(var(--theme-primary))" }}
                  >
                    <rect
                      width="14"
                      height="20"
                      x="5"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                  Two-Factor Authentication
                </button>
                <div className="p-3  rounded-lg" style={{backgroundColor:"hsl(var(--theme-primary))"}}>
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
                      className="lucide lucide-shield h-4 w-4 text-white"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                    <span className="text-sm text-white">
                      End-to-end encryption active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
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
                className="lucide lucide-bell h-5 w-5 text-blue-600"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
              Notifications
            </div>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Daily Mood Reminders</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Gentle reminders to log your mood
                    </p>
                  </div>
                 <Checkbox />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">
                      Mood Tracking Insights
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Weekly pattern notifications
                    </p>
                  </div>
                 <Checkbox />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Community Updates</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      New posts and replies
                    </p>
                  </div>
                 <Checkbox />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Crisis Alerts</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Emergency support notifications
                    </p>
                  </div>
                 <Checkbox />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
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
                className="lucide lucide-eye h-5 w-5 text-purple-600"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Accessibility
            </div>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Reduced Motion</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Minimize animations
                    </p>
                  </div>
                 <Checkbox />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">High Contrast</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Improve text visibility
                    </p>
                  </div>
                 <Checkbox />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Large Text</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Increase font size
                    </p>
                  </div>
                 <Checkbox />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Screen Reader Support</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Enhanced navigation
                    </p>
                  </div>
                <Checkbox />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex items-center justify-between">
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
                  className="lucide lucide-palette h-5 w-5 text-purple-600"
                >
                  <circle
                    cx="13.5"
                    cy="6.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <circle
                    cx="17.5"
                    cy="10.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  <circle
                    cx="6.5"
                    cy="12.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                </svg>
                Theme &amp; Appearance
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 relative overflow-hidden"
                aria-label="Switch to dark mode"
                onClick={toggleColorMode}
              >
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
                  className="lucide lucide-sun h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
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
                  className="lucide lucide-moon absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Choose colors that make you feel comfortable and calm
            </p>
          </div>
          <div className="p-6 pt-0 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {themes.map((t) => (
                <>
                  {/* <option key={t.id} value={t.id}>
              {t.name}
            </option> */}
                  <button
                    className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-auto p-4 flex flex-col items-start gap-3 relative"
                    style={{
                      borderColor: `hsl(${t.colors.primary})`,

                      borderWidth: "2px",
                      
              backgroundColor: `hsl(${t.colors.primary})`,
            
                    }}
                    onClick={()=>setTheme(t.id)}
                    key={t.id}
                    value={t.id}
                  >
                    <div className="absolute top-2 right-2">
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
                        className="lucide lucide-check h-4 w-4"
                        style={{ color: "hsl(var(--theme-primary))" }}
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg> */}
                    </div>
                    <div className="flex items-center gap-3 w-full">
                      <div className="flex gap-1">
                        {/* <div
                          className="w-4 h-4 rounded-full border"
                          style={{
                            backgroundColor: "hsl(var(--theme-primary))",
                          }}
                        ></div>
                        <div
                          // var(--theme-primary)
                          className="w-4 h-4 rounded-full border"
                          style={{ backgroundColor: "hsl(var(--theme-calm))" }}
                        ></div>
                        <div
                          className="w-4 h-4 rounded-full border"
                          style={{
                            backgroundColor: "hsl(var(--theme-background))",
                          }}
                        ></div> */}
                      </div>
                      <div className="text-left flex-1"  >
                        <p className="font-medium text-sm">{t.name}</p>
                        <p className="text-xs text-white">{t.description}</p>
                      </div>
                    </div>
                  </button>
                </>
              ))}
              {/* <button
                className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-auto p-4 flex flex-col items-start gap-3 relative"
                style={{
                  borderColor: "hsl(var(--theme-primary))",
                  borderWidth: "2px",
                }}
              >
                <div className="absolute top-2 right-2">
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
                    className="lucide lucide-check h-4 w-4"
                    style={{ color: "hsl(var(--theme-primary))" }}
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="flex items-center gap-3 w-full">
                  <div className="flex gap-1">
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: "hsl(142, 76%, 36%)" }}
                    ></div>
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: "hsl(142, 76%, 36%)" }}
                    ></div>
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: "hsl(142, 76%, 96%)" }}
                    ></div>
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-medium text-sm">Calming Green</p>
                    <p className="text-xs text-gray-600">
                      Peaceful and grounding
                    </p>
                  </div>
                </div>
              </button>
              <button
                className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-auto p-4 flex flex-col items-start gap-3 relative"
                style={{ borderWidth: "1px" }}
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="flex gap-1">
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: "hsl(199, 89%, 48%)" }}
                    ></div>
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: "hsl(199, 89%, 48%)" }}
                    ></div>
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: "hsl(199, 89%, 96%)" }}
                    ></div>
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-medium text-sm">Ocean Blue</p>
                    <p className="text-xs text-gray-600">Tranquil and serene</p>
                  </div>
                </div>
              </button>
              <button
                className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-auto p-4 flex flex-col items-start gap-3 relative"
                style={{ borderWidth: "1px" }}
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="flex gap-1">
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: "hsl(14, 91%, 60%)" }}
                    ></div>
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: "hsl(340, 82%, 52%)" }}
                    ></div>
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: "hsl(199, 89%, 96%)" }}
                    ></div>
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-medium text-sm">Warm Sunset</p>
                    <p className="text-xs text-gray-600">
                      Comforting and nurturing
                    </p>
                  </div>
                </div>
              </button>
              <button
                className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-auto p-4 flex flex-col items-start gap-3 relative"
                style={{ borderWidth: "1px" }}
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="flex gap-1">
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: "hsl(158, 64%, 52%)" }}
                    ></div>
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: "hsl(158, 64%, 52%)" }}
                    ></div>
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: "hsl(158, 64%, 96%)" }}
                    ></div>
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-medium text-sm">Deep Forest</p>
                    <p className="text-xs text-gray-600">
                      Grounding and stable
                    </p>
                  </div>
                </div>
              </button>
              <button
                className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-auto p-4 flex flex-col items-start gap-3 relative"
                style={{ borderWidth: "1px" }}
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="flex gap-1">
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: "hsl(262, 83%, 58%)" }}
                    ></div>
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: "hsl(262, 83%, 58%)" }}
                    ></div>
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: "hsl(262, 83%, 96%)" }}
                    ></div>
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-medium text-sm">Soft Lavender</p>
                    <p className="text-xs text-gray-600">Soothing and gentle</p>
                  </div>
                </div>
              </button>
              <button
                className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-auto p-4 flex flex-col items-start gap-3 relative"
                style={{ borderWidth: "1px" }}
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="flex gap-1">
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: "hsl(220, 14%, 46%)" }}
                    ></div>
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: "hsl(220, 14%, 46%)" }}
                    ></div>
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: "hsl(220, 14%, 96%)" }}
                    ></div>
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-medium text-sm">Minimal Gray</p>
                    <p className="text-xs text-gray-600">Clean and focused</p>
                  </div>
                </div>
              </button> */}
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Tip:</strong> Choose colors that feel calming and
                supportive to you. You can change your theme anytime and switch
                between light and dark modes.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  Current Theme Preview
                </h4>
                <div className="flex items-center gap-1 text-xs text-gray-500">
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
                    className="lucide lucide-sun h-3 w-3"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                  Light Mode
                </div>
              </div>
              <div className="theme-card p-4 rounded-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white theme-primary">
                    ✓
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">
                      Sample Card
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      This is how your interface will look
                    </p>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent theme-primary text-primary-foreground  ml-auto mood-calm">
                    Calm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
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
                className="lucide lucide-download h-5 w-5 text-gray-600 dark:text-gray-400"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
              Data Management
            </div>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-2">
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
                  className="lucide lucide-download h-4 w-4"
                  style={{ color: "hsl(var(--theme-primary))" }}
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                Export All Data
              </button>
              <button className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-2">
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
                  className="lucide lucide-users h-4 w-4"
                  style={{ color: "hsl(var(--theme-primary))" }}
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Share with Provider
              </button>
              <button className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2 flex items-center gap-2">
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
                  className="lucide lucide-trash2 h-4 w-4"
                >
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  <line x1="10" x2="10" y1="11" y2="17"></line>
                  <line x1="14" x2="14" y1="11" y2="17"></line>
                </svg>
                Delete Account
              </button>
            </div>
            <div className="p-4 bg-yellow-300 dark:bg-yellow-500 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Data Retention:</strong> Your data is automatically
                encrypted and can be permanently deleted at any time. We never
                sell or share your personal information.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
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
                className="lucide lucide-heart h-5 w-5 text-red-600"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
              Emergency Contacts
            </div>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1"
                  placeholder="Contact Name"
                />
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1"
                  placeholder="Phone Number"
                />
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                  style={{
                    backgroundColor: "hsl(var(--theme-primary))",
                    color: "white",
                  }}
                >
                  Add
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-600 dark:text-black">Dr. Sarah Johnson</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      (555) 123-4567
                    </p>
                  </div>
                  <button className="inline-flex items-center justify-center text-gray-600  gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
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
                      className="lucide lucide-trash2 h-4 w-4"
                    >
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
