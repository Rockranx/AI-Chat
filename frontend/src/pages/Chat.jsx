import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { MdCancel } from "react-icons/md";
const Chat = ({
  Successupdate,
  notify,
  Errorupdate,
  logout,
  sessionId,
  setSessionId,
  pastConversations,
}) => {
  const chatContainerRef = useRef(null);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentChat, setCurrentChat] = useState([]);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Check if the user is at bottom (or near bottom)
      const isBottom =
        container.scrollHeight - container.scrollTop - container.clientHeight <
        50;
      setIsAtBottom(isBottom);
    };

    container.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (isAtBottom && chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [currentChat, isAtBottom]);

  useEffect(() => {
    const currentchat = async () => {
      // if (sessionId) {
      try {
        const res = await axios.get(
          // `http://localhost:5000/api/chat/sessions/683ecc215b1c771120239d7a/`,
          `api/chat/sessions/${sessionId}`,
          {
            withCredentials: true,
          }
        );

      
        if (res.status === 200) {
          // Successupdate(`Chat has been ${res.statusText}`);
          setCurrentChat(res?.data?.messages);
         
        }
      } catch (error) {
        Errorupdate(
          "Logout failed:",
          error.response?.data?.message || error.message
        );
        console.log(error);
      }
      // }
    };
    currentchat();
  }, [sessionId]);

  const sendchatmessage = async (e) => {
    e.preventDefault();
    try {
      notify();

      const res = await axios.post(
        `/api/chat/sessions/683ecc215b1c771120239d7a/messages`,
        // `/api/chat/sessions/${sessionId}/messages`,
        {
          message: currentMessage,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      if (res.status === 200) {
        setCurrentMessage("");
        // Successupdate(`Chat has been ${res.statusText}`);
        // return navigate("/chat");
      }
    } catch (error) {
      Errorupdate(
        "Logout failed:",
        error.response?.data?.message || error.message
      );
      // console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;
    handleSendMessage(currentMessage);
    setCurrentMessage(""); // clear input after sending
  };

  const handleSendMessage = async (userMessage) => {
    if (!userMessage.trim()) return;

    // 1️⃣ Add user's message immediately
    const userEntry = {
      role: "user",
      content: userMessage,
      timestamp: new Date().toISOString(),
    };

    // 2️⃣ Add a loader for assistant reply
    const loaderEntry = {
      role: "assistant",
      content: <Loader />, // can be replaced with a loader icon
      timestamp: new Date().toISOString(),
      isLoader: true,
    };

    setCurrentChat((prevChat) => [...prevChat, userEntry, loaderEntry]);

    // 3️⃣ Send request to backend
    try {
      const res = await axios.post(
        // `/api/chat/sessions//683ecc215b1c771120239d7a/messages`,
        `/api/chat/sessions//${sessionId}/messages`,
        {
          message: userMessage,
        }
      );

      if (res.status === 200 && res.data.response) {
        // 4️⃣ Wait 1 second for smoothness
        setTimeout(() => {
          // 5️⃣ Replace loader with real assistant response
          setCurrentChat((prevChat) => {
            const updatedChat = [...prevChat];
            // Find index of the loader
            const loaderIndex = updatedChat.findIndex((msg) => msg.isLoader);
            if (loaderIndex !== -1) {
              updatedChat[loaderIndex] = {
                role: "assistant",
                content: res.data.response,
                timestamp: new Date().toISOString(),
              };
            }
            return updatedChat;
          });
        }, 1000); // 1 second delay
      } else {
        console.error("Unexpected response format", res);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Optionally replace loader with error message
      setCurrentChat((prevChat) => {
        const updatedChat = [...prevChat];
        const loaderIndex = updatedChat.findIndex((msg) => msg.isLoader);
        if (loaderIndex !== -1) {
          updatedChat[loaderIndex] = {
            role: "assistant",
            content: "Sorry, something went wrong. Please try again.",
            timestamp: new Date().toISOString(),
          };
        }
        return updatedChat;
      });
    }
  };
  const startchat = async () => {
    try {
      setSessionId("");
      notify();
      const res = await axios.post("/api/chat/sessions");


      if (res.status === 201) {
        setSessionId(res?.data?.id);
        Successupdate(`Chat has been ${res.statusText}`);
        await setShowHistory(!showHistory);
        // console.log(sessionId)
      }
    } catch (error) {
      Errorupdate(
        "Logout failed:",
        error.response?.data?.message || error.message
      );
      console.log(error);
    }
  };
  // const renderMessages = () => {
  //   if (!currentChat || currentChat.length === 0) {
  //     return (
  //       <div className="flex justify-center text-gray-500 dark:text-gray-400">
  //         <p className="text-sm">Start a new chat</p>
  //       </div>
  //     );
  //   }
  //   return currentChat.map((msg, index) => {
  //     // Format the timestamp (you can tweak it!)
  //     const time = new Date(msg.timestamp).toLocaleTimeString([], {
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     });

  //     // Assistant message on the left
  //     if (msg.role === "assistant") {
  //       return (
  //         <div key={index} className="flex justify-start">
  //           <div
  //             className="max-w-xs lg:max-w-md px-4 py-2 rounded-2xl claymorphism-card text-gray-800 dark:text-gray-200"
  //             style={{ backgroundColor: "hsl(var(--theme-primary))" }}
  //           >
  //             <p className="text-sm">{msg.content}</p>
  //             <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
  //               {time}
  //             </p>
  //           </div>
  //         </div>
  //       );
  //     }

  //     // User message on the right
  //     if (msg.role === "user") {
  //       return (
  //         <div key={index} className="flex justify-end">
  //           <div
  //             className="max-w-xs lg:max-w-md px-4 py-2 rounded-2xl claymorphism-card text-white"
  //             style={{ backgroundColor: "hsl(var(--theme-primary))" }}
  //           >
  //             <p className="text-sm">{msg.content}</p>
  //             <p className="text-xs mt-1 text-white/70">{time}</p>
  //           </div>
  //         </div>
  //       );
  //     }

  //     // fallback (if needed)
  //     return null;
  //   });
  // };

  const sendPredefinedMessage = async (predefinedMessage) => {
    if (!predefinedMessage.trim()) return;

    // 1️⃣ Immediately show user’s predefined message
    const userEntry = {
      role: "user",
      content: predefinedMessage,
      timestamp: new Date().toISOString(),
    };

    // 2️⃣ Add a loading entry for the assistant
    const loaderEntry = {
      role: "assistant",
      content: "Loading...",
      timestamp: new Date().toISOString(),
      isLoader: true,
    };

    setCurrentChat((prevChat) => [...prevChat, userEntry, loaderEntry]);

    // 3️⃣ Send to backend
    try {
      const res = await axios.post(`/api/chat/sessions/${sessionId}/messages`, {
        message: predefinedMessage,
      });

      if (res.status === 200 && res.data.response) {
        // 4️⃣ Smooth delay before showing assistant reply
        setTimeout(() => {
          setCurrentChat((prevChat) => {
            const updatedChat = [...prevChat];
            const loaderIndex = updatedChat.findIndex((msg) => msg.isLoader);
            if (loaderIndex !== -1) {
              updatedChat[loaderIndex] = {
                role: "assistant",
                content: res.data.response,
                timestamp: new Date().toISOString(),
              };
            }
            return updatedChat;
          });
        }, 1000);
      } else {
        console.error("Unexpected response", res);
      }
    } catch (error) {
      console.error("Error sending predefined message:", error);
      setCurrentChat((prevChat) => {
        const updatedChat = [...prevChat];
        const loaderIndex = updatedChat.findIndex((msg) => msg.isLoader);
        if (loaderIndex !== -1) {
          updatedChat[loaderIndex] = {
            role: "assistant",
            content: "Sorry, something went wrong.",
            timestamp: new Date().toISOString(),
          };
        }
        return updatedChat;
      });
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card h-[calc(100vh-200px)] flex flex-col glassmorphism-card">
            {showHistory ? (
              <>
                <div className="flex flex-col space-y-1.5 p-6 border-b">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                      <div className="text-2xl">🤗</div>
                      <div>
                        <h2 className="text-lg font-semibold">History</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Here's your chat history
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 theme-accent"
                        style={{ backgroundColor: "hsl(var(--theme-primary))" }}
                        onClick={() => setShowHistory(!showHistory)}
                      >
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
                          className="lucide lucide-shield h-3 w-3 mr-1"
                        >
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg> */}
                        Chat
                      </button>
                      {/* <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
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
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" x2="12" y1="15" y2="3"></line>
                        </svg>
                      </button> */}
                    </div>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {pastConversations && pastConversations > 0 ? (
                    <>History is Empty </>
                  ) : (
                    pastConversations.map((convos, index) => {
                      const selectedoldConvo = (session) => {
                        setSessionId(session);
                        setShowHistory(!showHistory);
                      };
                      return (
                        <>
                          <div key={index}>
                            <div
                              className="p-2 glassmorphism-card  rounded-lg m-1 "
                              onClick={() => selectedoldConvo(convos.id)}
                            >
                              <p
                                className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2"
                                style={{ textTransform: "capitalize" }}
                              >
                                {convos.preview}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                Last update at{" "}
                                {new Date(convos.updatedAt).toLocaleTimeString(
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
                  )}
                </div>
                <div className="p-4 border-t">
                  <button
                    className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full flex items-center gap-2 claymorphism-button text-white"
                    style={{ backgroundColor: "hsl(var(--theme-primary))" }}
                    onClick={startchat}
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
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col space-y-1.5 p-6 border-b">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                      <div className="text-2xl">🤗</div>
                      <div>
                        <h2 className="text-lg font-semibold">Luna</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          AI Therapeutic Companion
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 theme-accent"
                        style={{ backgroundColor: "hsl(var(--theme-primary))" }}
                        onClick={() => setShowHistory(!showHistory)}
                      >
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
                          className="lucide lucide-shield h-3 w-3 mr-1"
                        >
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg> */}
                        History
                      </button>
                      {/* <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
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
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" x2="12" y1="15" y2="3"></line>
                        </svg>
                      </button> */}
                    </div>
                  </div>
                </div>
                <div
                  className="flex-1 overflow-y-auto p-4 space-y-4"
                  ref={chatContainerRef}
                >
                  {currentChat && currentChat.length > 0 ? (
                    currentChat.map((message, index) => {
                      // Determine if the message is from the user or the assistant
                      const isUser = message.role === "user";
                      return (
                        <div
                          key={index}
                          className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl claymorphism-card
              ${
                isUser
                  ? "text-white bg-blue-500 dark:bg-blue-600"
                  : "text-white bg-gray-100 dark:bg-gray-800"
              }`}
                            style={{
                              backgroundColor: "hsl(var(--theme-primary))",
                            }}
                          >
                            <p className="text-sm">{message.content}</p>
                            <hr />
                            <p className="text-xs mt-1 text-white">
                              {new Date(message.timestamp).toLocaleTimeString(
                                [],
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                }
                              )}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      Start a new chat to see messages here.
                    </div>
                  )}
                </div>
                {sessionId ? (
                  <>
                    {showSuggestions ? (
                      <>
                        {" "}
                        <div className="px-4 py-2 border-t bg-gray-50 dark:bg-gray-800 flex flex-row justify-between">
                          <div className="flex flex-wrap gap-2">
                            <button
                              onClick={() =>
                                sendPredefinedMessage(
                                  " I'm feeling anxious today"
                                )
                              }
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-xs"
                            >
                              I&#x27;m feeling anxious today
                            </button>
                            <button
                              onClick={() =>
                                sendPredefinedMessage(
                                  " Can you help me with breathing exercises?"
                                )
                              }
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-xs"
                            >
                              Can you help me with breathing exercises?
                            </button>
                            <button
                              onClick={() =>
                                sendPredefinedMessage(
                                  " I had a difficult conversation"
                                )
                              }
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-xs"
                            >
                              I had a difficult conversation
                            </button>
                            <button
                              onClick={() =>
                                sendPredefinedMessage(
                                  "I'm proud of my progress"
                                )
                              }
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-xs"
                            >
                              I&#x27;m proud of my progress
                            </button>
                          </div>
                          <button onClick={() => setShowSuggestions(false)}>
                            <MdCancel className="text-2xl" style={{color:"hsl(var(--theme-primary))"}} />  
                          </button>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}

                <div className="p-4 border-t">
                  {sessionId ? (
                    <>
                      {" "}
                      <form className="flex gap-2" onSubmit={handleSubmit}>
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1"
                          placeholder="Share what&#x27;s on your mind..."
                          type="text"
                          value={currentMessage}
                          onChange={(e) => setCurrentMessage(e.target.value)}
                        />
                        {/* <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                    className="lucide lucide-mic h-4 w-4"
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                  </svg>
                </button> */}
                        <button
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 theme-primary"
                          disabled={!currentMessage}
                          style={{
                            backgroundColor: "hsl(var(--theme-primary))",
                          }}
                          type="submit"
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
                            className="lucide lucide-send h-4 w-4"
                          >
                            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                            <path d="m21.854 2.147-10.94 10.939"></path>
                          </svg>
                        </button>
                      </form>
                    </>
                  ) : (
                    <>
                      {" "}
                      <button
                        className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full flex items-center gap-2 claymorphism-button text-white"
                        style={{ backgroundColor: "hsl(var(--theme-primary))" }}
                        onClick={startchat}
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
                      </button>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="lg:col-span-1 space-y-4">
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="font-semibold tracking-tight text-lg">
                Support Tools
              </div>
            </div>
            <div className="p-6 pt-0 space-y-3">
              <button
                onClick={() =>
                  sendPredefinedMessage(
                    "5-4-3-2-1 Grounding, Sensory grounding technique"
                  )
                }
                className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground w-full justify-start gap-3 h-auto p-3"
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
                  className="lucide lucide-heart h-5 w-5"
                  style={{ color: "hsl(var(--theme-primary))" }}
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
                <div className="text-left">
                  <p className="font-medium">5-4-3-2-1 Grounding</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Sensory grounding technique
                  </p>
                </div>
              </button>
              <button
                onClick={() =>
                  sendPredefinedMessage(
                    "Box Breathing, 4-4-4-4 breathing pattern"
                  )
                }
                className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground w-full justify-start gap-3 h-auto p-3"
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
                  className="lucide lucide-wind h-5 w-5"
                  style={{ color: "hsl(var(--theme-primary))" }}
                >
                  <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
                  <path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
                  <path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
                </svg>
                <div className="text-left">
                  <p className="font-medium">Box Breathing</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    4-4-4-4 breathing pattern
                  </p>
                </div>
              </button>
              <Link
                to="/community"
                className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground w-full justify-start gap-3 h-auto p-3"
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
                  className="lucide lucide-users h-5 w-5"
                  style={{ color: "hsl(var(--theme-primary))" }}
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <div className="text-left">
                  <p className="font-medium">Community Support</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Connect with others
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="font-semibold tracking-tight text-lg">
                Session Info
              </div>
            </div>
            <div className="p-6 pt-0 space-y-3">
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
                  className="lucide lucide-shield h-4 w-4"
                  style={{ color: "hsl(var(--theme-primary))" }}
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <span className="text-sm">End-to-end encrypted</span>
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
                  className="lucide lucide-volume2 h-4 w-4"
                  style={{ color: "hsl(var(--theme-primary))" }}
                >
                  <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>
                  <path d="M16 9a5 5 0 0 1 0 6"></path>
                  <path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
                </svg>
                <span className="text-sm">Audio available</span>
              </div>
              <button disabled className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full">
                Export Session
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  );
};

export default Chat;
