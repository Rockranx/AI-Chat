import React from 'react'

const Profile = () => {
  return (
   <>
     <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div
            className="rounded-lg bg-card text-card-foreground glassmorphism-card border-0 shadow-none"
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="relative">
                  <span
                    className="relative flex shrink-0 overflow-hidden rounded-full claymorphism-avatar h-24 w-24"
                    ><img
                      className="aspect-square h-full w-full"
                      src="/placeholder.svg"
                  /></span>
                </div>
                <div className="flex-1">
                  <div>
                    <h1
                      className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2"
                    >
                      Alex
                      Johnson
                    </h1>
                    <div className="space-y-2 text-gray-600 dark:text-gray-400">
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
                          className="lucide lucide-mail h-4 w-4"
                        >
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                          <path
                            d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                          ></path></svg
                        ><span>alex.johnson@email.com</span>
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
                          className="lucide lucide-phone h-4 w-4"
                        >
                          <path
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                          ></path></svg
                        ><span>+1 (555) 123-4567</span>
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
                          className="lucide lucide-map-pin h-4 w-4"
                        >
                          <path
                            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                          ></path>
                          <circle cx="12" cy="10" r="3"></circle></svg
                        ><span>San Francisco, CA</span>
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
                          className="lucide lucide-calendar h-4 w-4"
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
                          <path d="M3 10h18"></path></svg
                        ><span
                          >Member since
                          January 2023</span
                        >
                      </div>
                    </div>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                      Mental health advocate and mindfulness practitioner.
                      Passionate about helping others find their path to
                      wellness.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
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
                      className="lucide lucide-pen-line h-4 w-4 mr-1"
                    >
                      <path d="M12 20h9"></path>
                      <path
                        d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
                      ></path></svg
                    >Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div
              className="rounded-lg bg-card text-card-foreground glassmorphism-card border-0 shadow-none"
            >
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 theme-accent rounded-lg">
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
                      className="lucide lucide-calendar h-5 w-5 text-blue-600"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-2xl font-bold text-gray-900 dark:text-gray-100"
                    >
                      342
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Days Active
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground glassmorphism-card border-0 shadow-none"
            >
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 theme-accent rounded-lg">
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
                      <path
                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-2xl font-bold text-gray-900 dark:text-gray-100"
                    >
                      156
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Mood Entries
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground glassmorphism-card border-0 shadow-none"
            >
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 theme-accent rounded-lg">
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
                      className="lucide lucide-message-circle h-5 w-5 text-purple-600"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-2xl font-bold text-gray-900 dark:text-gray-100"
                    >
                      89
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      AI Sessions
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground glassmorphism-card border-0 shadow-none"
            >
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 theme-accent rounded-lg">
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
                      className="lucide lucide-trending-up h-5 w-5 text-green-600"
                    >
                      <polyline
                        points="22 7 13.5 15.5 8.5 10.5 2 17"
                      ></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-2xl font-bold text-gray-900 dark:text-gray-100"
                    >
                      8.2
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Wellness Score
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div
                  className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
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
                    className="lucide lucide-award h-5 w-5 text-yellow-600"
                  >
                    <path
                      d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                    ></path>
                    <circle cx="12" cy="8" r="6"></circle></svg
                  >Achievements
                </div>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <div
                  className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950"
                >
                  <div className="p-2 rounded-full bg-yellow-200 text-yellow-800">
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
                      className="lucide lucide-award h-4 w-4"
                    >
                      <path
                        d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                      ></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-yellow-900">7-Day Streak</h4>
                    <p className="text-sm text-yellow-700">
                      Logged mood for 7 consecutive days
                    </p>
                  </div>
                  <div
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-yellow-200 text-yellow-800"
                  >
                    Earned
                  </div>
                </div>
                <div
                  className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950"
                >
                  <div className="p-2 rounded-full bg-yellow-200 text-yellow-800">
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
                      className="lucide lucide-award h-4 w-4"
                    >
                      <path
                        d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                      ></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-yellow-900">
                      Community Helper
                    </h4>
                    <p className="text-sm text-yellow-700">
                      Helped 10 community members
                    </p>
                  </div>
                  <div
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-yellow-200 text-yellow-800"
                  >
                    Earned
                  </div>
                </div>
                <div
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                >
                  <div className="p-2 rounded-full bg-gray-200 text-gray-500">
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
                      className="lucide lucide-award h-4 w-4"
                    >
                      <path
                        d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                      ></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-600">Mindful Month</h4>
                    <p className="text-sm text-gray-500">
                      Completed 30 days of meditation
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950"
                >
                  <div className="p-2 rounded-full bg-yellow-200 text-yellow-800">
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
                      className="lucide lucide-award h-4 w-4"
                    >
                      <path
                        d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                      ></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-yellow-900">
                      Wellness Warrior
                    </h4>
                    <p className="text-sm text-yellow-700">
                      Maintained positive trend for 3 months
                    </p>
                  </div>
                  <div
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-yellow-200 text-yellow-800"
                  >
                    Earned
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div
                  className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
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
                    className="lucide lucide-trending-up h-5 w-5"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline></svg
                  >Recent Activity
                </div>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <div
                  className="flex items-center gap-3 p-3 theme-accent rounded-lg"
                >
                  <div className="p-2 rounded-full theme-secondary">
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
                      className="lucide lucide-heart h-4 w-4 text-red-600"
                    >
                      <path
                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Logged mood: Calm
                    </p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div
                  className="flex items-center gap-3 p-3 theme-accent rounded-lg"
                >
                  <div className="p-2 rounded-full theme-secondary">
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
                      className="lucide lucide-message-circle h-4 w-4 text-blue-600"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      AI session completed
                    </p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div
                  className="flex items-center gap-3 p-3 theme-accent rounded-lg"
                >
                  <div className="p-2 rounded-full theme-secondary">
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
                      className="lucide lucide-user h-4 w-4 text-purple-600"
                    >
                      <path
                        d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Posted in community
                    </p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
                <div
                  className="flex items-center gap-3 p-3 theme-accent rounded-lg"
                >
                  <div className="p-2 rounded-full theme-secondary">
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
                      className="lucide lucide-pen-line h-4 w-4 text-green-600"
                    >
                      <path d="M12 20h9"></path>
                      <path
                        d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      New journal entry
                    </p>
                    <p className="text-xs text-gray-500">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                Privacy &amp; Data Management
              </div>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-2"
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
                    className="lucide lucide-user h-4 w-4"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle></svg
                  >Export Data</button
                ><button
                  className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-2"
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
                    className="lucide lucide-mail h-4 w-4"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path
                      d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                    ></path></svg
                  >Download Report</button
                ><button
                  className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2 flex items-center gap-2"
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
                    className="lucide lucide-x h-4 w-4"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg
                  >Delete Account
                </button>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Data Protection:</strong> Your personal information is
                  encrypted and secure. You have full control over your data and
                  can export or delete it at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Profile