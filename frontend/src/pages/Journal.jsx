import axios from "axios";
import React, { useEffect, useState } from "react";
export function getEmojiFromMoodScore(score) {
  const emojiMap = {
    1: "Extremely Bad 😢",
    2: "Very Bad 😔",
    3: "Bad 😐",
    4: "OK 🙂",
    5: "Good 😊",
    6: "Very Good 😄",
    7: "Excellent 🤗",
  };

  return emojiMap[score] || "🤷"; // fallback emoji
}
const Journal = ({ Successupdate, notify, Errorupdate }) => {
  const [moodScore, setMoodScore] = useState(0);
  const [moodJournal, setMoodJournal] = useState("");
  const [moodTags, setMoodTags] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);
  const [previousMood, setPreviousMood] = useState([]);
  const emojis = ["😐", "😢", "😔", "😐", "🙂", "😊", "😄", "🤗"];


  const tags = [
    "work",
    "family",
    "friends",
    "anxiety",
    "grateful",
    "exercise",
    "sleep",
    "therapy",
  ];
  const toggleTag = (tag) => {
    setMoodTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };
  const sendMood = async (e) => {
    e.preventDefault();
    const newErrors = [];

    try {
      // setSessionId("");
      notify();
      const res = await axios.post(
        "/api/mood",
        {
          moodScore: moodScore,
          journalText: moodJournal,
          tags: moodTags,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      if (res.status === 201) {
        Successupdate(`Post has been ${res.statusText}`);
      }
    } catch (error) {
      Errorupdate("Post creation has failed");
      console.log(error);
    }
  };
  useEffect(() => {
    const getMood = async (e) => {
      // e.preventDefault();
      const newErrors = [];

      try {
        // setSessionId("");

        const res = await axios.get(
          "/api/mood",

          {
            withCredentials: true,
          }
        );

        if (res.status === 200) {
          setPreviousMood(res?.data?.entries);
          // Successupdate(`Post has been ${res.statusText}`);
        }
      } catch (error) {
        Errorupdate("Post creation has failed");
        console.log(error);
      }
    };
    getMood();
    const intervalId = setInterval(getMood, 3000);

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    setMoodScore(selectedMood);
  }, [selectedMood]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card   glassmorphism-card ">
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
                  className="lucide lucide-book-open h-5 w-5 text-purple-600"
                >
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
                New Journal Entry
              </div>
            </div>
            <div className="p-6 pt-0">
              <form onSubmit={sendMood} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    How are you feeling?
                  </label>
                  <div className="flex justify-center items-center mb-6">
                    {selectedMood && (
                      <div className="text-6xl">
                        {emojis[selectedMood]}{" "}
                        {/* index matches 1–7 because of leading empty */}
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <button
                        key={num}
                        type="button"
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
                    {/* <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                        Happy
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                        Calm
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                        Anxious
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                        Sad
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                        Neutral
                      </button> */}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    What&#x27;s on your mind?
                  </label>
                  <textarea
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-32"
                    placeholder="Write about your thoughts, feelings, or experiences..."
                    value={moodJournal}
                    onChange={(e) => setMoodJournal(e.target.value)}
                  ></textarea>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Tags
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <button
                        type="button"
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input  hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 ${
                          moodTags.includes(tag)
                            ? " text-white theme-primary"
                            : "bg-background text-gray-700"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}

                    {/* <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      work
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      family
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      friends
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      anxiety
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      grateful
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      exercise
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      sleep
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      therapy
                    </button> */}
                  </div>
                </div>
                {/* <div className="flex items-center gap-2">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
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
                      className="lucide lucide-mic h-4 w-4 mr-1"
                    >
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" x2="12" y1="19" y2="22"></line>
                    </svg>
                    Voice Entry
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
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
                      className="lucide lucide-camera h-4 w-4 mr-1"
                    >
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                      <circle cx="12" cy="13" r="3"></circle>
                    </svg>
                    Add Photo
                  </button>
                </div> */}
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                  type="submit"
                  disabled={!moodScore | !moodJournal | (moodTags.length < 2)}
                  // style={{backgroundColor: "hsl(var(--theme-calm))"}}
                  style={{ backgroundColor: "hsl(var(--theme-primary))" }}
                >
                  Save Entry
                </button>
              </form>
            </div>
          </div>
          <div className="space-y-4 mt-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Previous Entries
            </h2>
            {previousMood && previousMood.length > 0 ? (
              previousMood.map((mood, index) => {
                return (
                  <>
                    <div
                      className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card "
                      key={index}
                    >
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-3">
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
                              className="lucide lucide-calendar h-4 w-4 text-gray-500"
                            >
                              <path d="M8 2v4"></path>
                              <path d="M16 2v4"></path>
                              <rect
                                width="18"
                                height="18"
                                x="3"
                                y="4"
                                rx="2"
                              ></rect>
                              <path d="M3 10h18"></path>
                            </svg>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {new Date(mood.createdAt).toLocaleTimeString([], {
                                year: "numeric",
                                month: "short",
                                day: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          </div>
                          <div
                            style={{ textTransform: "capitalize" }}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  bg-orange-100 text-orange-800 border-orange-200"
                          >
                             {getEmojiFromMoodScore(mood.moodScore)}
                          </div>
                        </div>
                        <p
                          className=" mb-3 "
                          style={{ textTransform: "capitalize" }}
                        >
                          {mood.journalText}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {mood.keywords.map((keyword, indent) => (
                            <div
                              key={indent}
                              style={{ textTransform: "capitalize" }}
                              className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs"
                            >
                              {keyword}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <></>
            )}

            {/* <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
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
                      className="lucide lucide-calendar h-4 w-4 text-gray-500"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      2024-01-13
                    </span>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-yellow-100 text-yellow-800 border-yellow-200">
                    happy
                  </div>
                </div>
                <p className="text-gray-800 mb-3">
                  Great day with friends! Feeling grateful for the support
                  system I have.
                </p>
                <div className="flex flex-wrap gap-1">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">
                    friends
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">
                    grateful
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">
                    social
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="lg:col-span-1 space-y-6">
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
                  className="lucide lucide-trending-up h-5 w-5 text-blue-600"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
                Mood Analytics
              </div>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>This Week</span>
                  <span className="font-medium">+15% positive</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{
                      width: "68%",
                      backgroundColor: "hsl(var(--theme-primary))",
                    }}
                    // style={{  }}
                  ></div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  Most Common Moods
                </h4>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Calm</span>
                    <span>40%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Happy</span>
                    <span>30%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Anxious</span>
                    <span>20%</span>
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
                  className="lucide lucide-brain h-5 w-5 text-purple-600"
                >
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                  <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                  <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                  <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                  <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                </svg>
                Pattern Insights
              </div>
            </div>
            <div className="p-6 pt-0 space-y-3">
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Trend:</strong> You tend to feel more anxious on
                  Mondays. Consider scheduling self-care activities for Sunday
                  evenings.
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Success:</strong> Breathing exercises consistently
                  improve your mood within 24 hours.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="font-semibold tracking-tight text-lg">
                Export &amp; Share
              </div>
            </div>
            <div className="p-6 pt-0 space-y-3">
              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start gap-2">
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
                Export to PDF
              </button>
              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start gap-2">
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
                  className="lucide lucide-share h-4 w-4"
                >
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                  <polyline points="16 6 12 2 8 6"></polyline>
                  <line x1="12" x2="12" y1="2" y2="15"></line>
                </svg>
                Share with Therapist
              </button>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <p className="text-xs text-yellow-800">
                  All exports are encrypted and you control who has access to
                  your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journal;
