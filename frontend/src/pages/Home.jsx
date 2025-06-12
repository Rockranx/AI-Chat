import React, { useEffect, useState } from "react";
import { useTheme } from "../components/theme/ThemeContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = ({
  Successupdate,
  notify,
  Errorupdate,
  logout,
  setSessionId,
  sessionId,
  pastConversations,
  recentConversations,
}) => {
  const { theme, setTheme, themes } = useTheme();
  const [selectedMood, setSelectedMood] = useState(null);
  const navigate = useNavigate();
  const startchat = async () => {
    try {
      setSessionId("");
      notify();
      const res = await axios.post("/api/chat/sessions");

      console.log(res);
      if (res.status === 201) {
        setSessionId(res?.data?.id);
        Successupdate(`Chat has been ${res.statusText}`);
        // console.log(sessionId)
        return navigate("/chat");
      }
    } catch (error) {
      Errorupdate(
        "Logout failed:",
        error.response?.data?.message || error.message
      );
      console.log(error);
    }
  };
  const emojis = ["😐", "😢", "😔", "😐", "🙂", "😊", "😄", "🤗"];

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Good Day
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-md">
            How are you feeling today?
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="w-3 h-3 rounded-full border"
            style={{ backgroundColor: "hsl(var(--theme-primary))" }}
          ></div>
          <select
            className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-2"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            {themes.map((t) => (
              <>
                <option key={t.id} value={t.id}>
                  <>
                    <div
                      role="menuitem"
                      className="relative cursor-default select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-3"
                      tabIndex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item=""
                    >
                      <div className="flex gap-1">
                        <div
                          className="w-3 h-3 rounded-full border"
                          style={{ backgroundColor: "rgb(22, 162, 73)" }}
                        ></div>
                        <div
                          className="w-3 h-3 rounded-full border"
                          style={{ backgroundColor: " rgb(22, 162, 73)" }}
                        ></div>
                      </div>
                      <span className="flex-1">{t.name}</span>
                    </div>
                    {/* {t.name} */}
                  </>
                </option>
              </>
            ))}
          </select>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-destructive hover:bg-destructive/90 h-9 rounded-md px-3 claymorphism-floating text-white animate-pulse"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-«Ra67lb»"
            data-state="closed"
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
              className="lucide lucide-triangle-alert h-4 w-4 mr-1"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
            Emergency
          </button>
        </div>
      </div>
      <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card">
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
              className="lucide lucide-heart h-5 w-5"
              style={{ color: "hsl(var(--theme-primary))" }}
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            Today&#x27;s Emotional Landscape
          </div>
        </div>
        <div className="p-6 pt-0">
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-sm px-3 py-1 glassmorphism-badge mood-calm">
              peaceful
            </div>
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-sm px-3 py-1 glassmorphism-badge mood-happy">
              focused
            </div>
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-sm px-3 py-1 glassmorphism-badge mood-neutral">
              grateful
            </div>
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-sm px-3 py-1 glassmorphism-badge mood-neutral">
              hopeful
            </div>
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-sm px-3 py-1 glassmorphism-badge mood-neutral">
              content
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>Streak: 7 days</span>
            <span>Weekly average: 6.8/10</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card">
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
                  className="lucide lucide-heart h-5 w-5"
                  style={{ color: "hsl(var(--theme-primary))" }}
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
                Mood Tracker
              </div>
            </div>
            <div className="p-6 pt-0 space-y-6">
              <div className="relative">
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    How are you feeling right now?
                  </p>
                  {selectedMood && (
                    <div className="text-6xl">
                      {emojis[selectedMood]}{" "}
                      {/* index matches 1–7 because of leading empty */}
                    </div>
                  )}
                  {/* <div className="text-4xl mb-2">😢</div>
                  <div className="text-4xl mb-2">😔</div>
                  <div className="text-4xl mb-2">😐</div>
                  <div className="text-4xl mb-2">😐</div>
                  <div className="text-4xl mb-2">🙂</div>
                  <div className="text-4xl mb-2">😊</div>
                  <div className="text-4xl mb-2">😄</div>
                  <div className="text-4xl mb-2">🤗</div> */}
                </div>
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <button
                      key={num}
                      onClick={() => setSelectedMood(num)}
                      className={`h-12 w-full glassmorphism-button transition-all duration-200 hover:scale-105 flex items-center justify-center text-white font-medium ${
                        selectedMood === num
                          ? "theme-primary text-white"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <p
                        className="text-lg font-bold"
                        style={{ color: "hsl(var(--theme-primary))" }}
                      >
                        {num}
                      </p>
                    </button>
                  ))}
                  {/* <button
                    className="h-12 w-full glassmorphism-button transition-all duration-200 hover:scale-105 flex items-center justify-center text-white font-medium"
                    style={{
                      backgroundColor: "hsl(var(--theme-background))",
                    }}
                  >
                    <p
                      className="text-lg font-bold"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      2
                    </p>
                  </button>
                  <button
                    className="h-12 w-full glassmorphism-button transition-all duration-200 hover:scale-105 flex items-center justify-center text-white font-medium"
                    style={{
                      backgroundColor: "hsl(var(--theme-background))",
                    }}
                  >
                    <p
                      className="text-lg font-bold"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      3
                    </p>
                  </button>
                  <button
                    className="h-12 w-full glassmorphism-button transition-all duration-200 hover:scale-105 flex items-center justify-center text-white font-medium"
                    style={{
                      backgroundColor: "hsl(var(--theme-background))",
                    }}
                  >
                    <p
                      className="text-lg font-bold"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      4
                    </p>
                  </button>
                  <button
                    className="h-12 w-full glassmorphism-button transition-all duration-200 hover:scale-105 flex items-center justify-center text-white font-medium"
                    style={{
                      backgroundColor: "hsl(var(--theme-background))",
                    }}
                  >
                    <p
                      className="text-lg font-bold"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      5
                    </p>
                  </button>
                  <button
                    className="h-12 w-full glassmorphism-button transition-all duration-200 hover:scale-105 flex items-center justify-center text-white font-medium"
                    style={{
                      backgroundColor: "hsl(var(--theme-background))",
                    }}
                  >
                    <p
                      className="text-lg font-bold"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      6
                    </p>
                  </button>
                  <button
                    className="h-12 w-full glassmorphism-button transition-all duration-200 hover:scale-105 flex items-center justify-center text-white font-medium"
                    style={{
                      backgroundColor: "hsl(var(--theme-background))",
                    }}
                  >
                    <p
                      className="text-lg font-bold"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      7
                    </p>
                  </button> */}
                </div>
                {/* <p class="text-center text-sm text-gray-600 dark:text-gray-400">
                  Excellent
                </p> */}
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  Biometric Data
                </h4>
                <div className="flex items-center gap-3 p-3 glassmorphism rounded-lg">
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
                    className="lucide lucide-heart h-5 w-5"
                    style={{ color: "hsl(var(--theme-primary))" }}
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Heart Rate
                    </p>
                    <p
                      className="text-lg font-bold"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      {/* 72 BPM */}
                      Coming Soon
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 glassmorphism rounded-lg">
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
                    className="lucide lucide-activity h-5 w-5"
                    style={{ color: "hsl(var(--theme-primary))" }}
                  >
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                  </svg>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Steps Today
                    </p>
                    <p
                      className="text-lg font-bold"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      {/* 8,432 */}  Coming Soon
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
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
                    className="lucide lucide-trending-up h-4 w-4"
                    style={{ color: "hsl(var(--theme-primary))" }}
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                  This Week&#x27;s Trend
                </h4>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "68%",
                      backgroundColor: "hsl(var(--theme-primary))",
                    }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  68% positive mood trend
                </p>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full glassmorphism-button text-white"
                disabled
                style={{ backgroundColor: "hsl(var(--theme-primary))" }}
              >
                Log Mood Entry
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card">
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
                  className="lucide lucide-message-circle h-5 w-5"
                  style={{ color: "hsl(var(--theme-primary))" }}
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                AI Companion Portal
              </div>
            </div>
            <div className="p-6 pt-0 space-y-6">
              <div className="flex items-center gap-4 p-4 claymorphism rounded-lg">
                <div className="text-4xl animate-pulse claymorphism-avatar w-16 h-16 flex items-center justify-center">
                  🤗
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">
                    Luna
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Your AI companion is here and ready to listen
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div
                      className="h-2 w-2 rounded-full animate-pulse"
                      style={{ backgroundColor: "hsl(var(--theme-primary))" }}
                    ></div>
                    <span
                      className="text-xs"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      Online &amp; Secure
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  Choose Your Session
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  <button
                    className="p-3 rounded-lg claymorphism-input transition-all text-left claymorphism glassmorphism "
                    style={{ borderColor: "hsl(var(--theme-primary))" }}
                    onClick={startchat}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">
                          Casual Chat
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Open conversation
                        </p>
                      </div>
                      <div
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 claymorphism-badge"
                        style={{
                          backgroundColor: "hsl(var(--theme-background))",
                          color: "hsl(var(--theme-primary))",
                        }}
                      >
                        Casual Chat
                      </div>
                    </div>
                  </button>
                  <button className="p-3 glassmorphism  rounded-lg claymorphism-input transition-all text-left hover:claymorphism-input">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">
                          Guided Session
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Structured support
                        </p>
                      </div>
                      <div
                        style={{ backgroundColor: "hsl(var(--theme-primary))" }}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 claymorphism-badge"
                      >
                        Guided Session
                      </div>
                    </div>
                  </button>
                  <button className="p-3 rounded-lg glassmorphism  claymorphism-input transition-all text-left hover:claymorphism-input">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">
                          Crisis Support
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Immediate help
                        </p>
                      </div>
                      <div
                        style={{ backgroundColor: "hsl(var(--theme-primary))" }}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 claymorphism-badge"
                      >
                        Crisis Support
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
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
                    className="lucide lucide-clock h-4 w-4"
                    style={{ color: "hsl(var(--theme-primary))" }}
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  Recent Conversations
                </h4>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {recentConversations && recentConversations.length > 0 ? (
                    recentConversations.map((recent, index) => {
                      // console.log(recent);
                      const selectedoldConvo = (session) => {
                        setSessionId(session);
                        navigate("/chat");
                      };
                      return (
                        <>
                          <div key={index}>
                            <div
                              className="p-2 glassmorphism-card rounded-lg cursor-pointer"
                              onClick={() => selectedoldConvo(recent.id)}
                            >
                              <p
                                className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2"
                                style={{ textTransform: "capitalize" }}
                              >
                                {recent.preview}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                Last update at{" "}
                                {new Date(recent.updatedAt).toLocaleTimeString(
                                  [],
                                  {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  }
                                )}
                              </p>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <></>
                  )}

                  {/* <div className="p-2 glassmorphism-card rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                      Let&#x27;s explore some grounding techniques together
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      2 hours ago
                    </p>
                  </div>
                  <div className="p-2 glassmorphism-card rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                      The breathing exercise really helped
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      1 day ago
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 claymorphism rounded-lg">
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
                  className="lucide lucide-shield h-5 w-5"
                  style={{ color: "hsl(var(--theme-primary))" }}
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <div className="flex-1">
                  <p
                    className="text-sm font-medium"
                    style={{ color: "hsl(var(--theme-primary))" }}
                  >
                    End-to-End Encrypted
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Your conversations are private and secure
                  </p>
                </div>
              </div>
              {/* <button
                className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full flex items-center gap-2 claymorphism-button text-white"
                style={{ backgroundColor: "hsl(var(--theme-primary))" }}
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
                  className="lucide lucide-sparkles h-4 w-4"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                  <path d="M4 17v2"></path>
                  <path d="M5 18H3"></path>
                </svg>
                Start Conversation
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Quick Resources
          </h2>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 claymorphism-button">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card hover:shadow-xl transition-all">
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg claymorphism">
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
                    className="lucide lucide-phone h-5 w-5"
                    style={{ color: "hsl(var(--theme-primary))" }}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">
                      Crisis Hotline
                    </h3>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 text-xs claymorphism-badge">
                      Urgent
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    24/7 immediate support
                  </p>
                  <div className="flex items-center gap-1 text-sm font-medium text-red-600">
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
                      className="lucide lucide-phone h-3 w-3"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    988
                  </div>
                </div>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-9 rounded-md px-3 w-full mt-3 claymorphism-button text-white"
                style={{ backgroundColor: "#dc2626" }}
              >
                Call Now
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
                  className="lucide lucide-external-link h-3 w-3 ml-1"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card hover:shadow-xl transition-all">
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg claymorphism">
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
                    className="lucide lucide-wind h-5 w-5"
                    style={{ color: "hsl(var(--theme-primary))" }}
                  >
                    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
                    <path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
                    <path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">
                      4-7-8 Breathing
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Quick anxiety relief
                  </p>
                  <div
                    className="flex items-center gap-1 text-sm"
                    style={{ color: "hsl(var(--theme-primary))" }}
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
                      className="lucide lucide-clock h-3 w-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    3 min
                  </div>
                </div>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-9 rounded-md px-3 w-full mt-3 claymorphism-button text-white"
                style={{ backgroundColor: "hsl(var(--theme-primary))" }}
              >
                Access
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
                  className="lucide lucide-external-link h-3 w-3 ml-1"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card hover:shadow-xl transition-all">
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg claymorphism">
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
                    className="lucide lucide-users h-5 w-5"
                    style={{ color: "hsl(var(--theme-primary))" }}
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">
                      Support Groups
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Connect with others
                  </p>
                  <div
                    className="flex items-center gap-1 text-sm"
                    style={{ color: "hsl(var(--theme-primary))" }}
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
                      className="lucide lucide-users h-3 w-3"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    1.2k active
                  </div>
                </div>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-9 rounded-md px-3 w-full mt-3 claymorphism-button text-white"
                style={{ backgroundColor: "hsl(var(--theme-primary))" }}
              >
                Access
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
                  className="lucide lucide-external-link h-3 w-3 ml-1"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card hover:shadow-xl transition-all">
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg claymorphism">
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
                    className="lucide lucide-map-pin h-5 w-5"
                    style={{ color: "hsl(var(--theme-primary))" }}
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">
                      Nearby Therapists
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Professional help
                  </p>
                  <div
                    className="flex items-center gap-1 text-sm"
                    style={{ color: "hsl(var(--theme-primary))" }}
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
                      className="lucide lucide-map-pin h-3 w-3"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    0.8 miles
                  </div>
                </div>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-9 rounded-md px-3 w-full mt-3 claymorphism-button text-white"
                style={{ backgroundColor: "hsl(var(--theme-primary))" }}
              >
                Access
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
                  className="lucide lucide-external-link h-3 w-3 ml-1"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card">
          <div className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 glassmorphism rounded-lg">
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
                  className="lucide lucide-trending-up h-5 w-5"
                  style={{ color: "hsl(var(--theme-primary))" }}
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Progress This Week
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  +12%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card">
          <div className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 glassmorphism rounded-lg">
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
                  className="lucide lucide-message-circle h-5 w-5"
                  style={{ color: "hsl(var(--theme-primary))" }}
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  AI Sessions
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  23
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card">
          <div className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 glassmorphism rounded-lg">
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
                  className="lucide lucide-users h-5 w-5"
                  style={{ color: "hsl(var(--theme-primary))" }}
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Community Support
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  156
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
