import React from 'react'

const Help = () => {
  return (
     <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-4 claymorphism-badge"
            style={{color: "hsl(var(--theme-primary))"}}
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
              className="lucide lucide-circle-help h-3 w-3 mr-1"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path></svg
            >Help &amp; Support
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            How Can We<span
              className="block"
              style={{color: "hsl(var(--theme-primary))"}}
              >Help You?</span
            >
          </h1>
          <p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Find answers to common questions, learn how to use MindSpace
            features, or get in touch with our support team.
          </p>
          <div className="max-w-2xl mx-auto relative">
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
              className="lucide lucide-search absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path></svg
            ><input
              className="flex h-10 w-full rounded-md border-input bg-background px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-12 pr-4 py-6 text-lg claymorphism-input border-0"
              placeholder="Search for help articles, features, or topics..."
              value=""
            />
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 claymorphism rounded-lg">
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
                      className="lucide lucide-book h-5 w-5"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path
                        d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs claymorphism-badge"
                  >
                    12
                    articles
                  </div>
                </div>
                <div className="font-semibold tracking-tight text-lg">
                  Getting Started
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Learn the basics of using MindSpace
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2 text-xs text-gray-500">
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
                      className="lucide lucide-chevron-right h-3 w-3"
                    >
                      <path d="m9 18 6-6-6-6"></path></svg
                    >Account setup
                  </li>
                  <li className="flex items-center gap-2 text-xs text-gray-500">
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
                      className="lucide lucide-chevron-right h-3 w-3"
                    >
                      <path d="m9 18 6-6-6-6"></path></svg
                    >First mood entry
                  </li>
                  <li className="flex items-center gap-2 text-xs text-gray-500">
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
                      className="lucide lucide-chevron-right h-3 w-3"
                    >
                      <path d="m9 18 6-6-6-6"></path></svg
                    >AI companion intro
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 claymorphism rounded-lg">
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
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                  </div>
                  <div
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs claymorphism-badge"
                  >
                    8
                    articles
                  </div>
                </div>
                <div className="font-semibold tracking-tight text-lg">
                  AI Companion
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  How to interact with your AI companion
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2 text-xs text-gray-500">
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
                      className="lucide lucide-chevron-right h-3 w-3"
                    >
                      <path d="m9 18 6-6-6-6"></path></svg
                    >Starting conversations
                  </li>
                  <li className="flex items-center gap-2 text-xs text-gray-500">
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
                      className="lucide lucide-chevron-right h-3 w-3"
                    >
                      <path d="m9 18 6-6-6-6"></path></svg
                    >Crisis support
                  </li>
                  <li className="flex items-center gap-2 text-xs text-gray-500">
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
                      className="lucide lucide-chevron-right h-3 w-3"
                    >
                      <path d="m9 18 6-6-6-6"></path></svg
                    >Session types
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 claymorphism rounded-lg">
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
                      className="lucide lucide-star h-5 w-5"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs claymorphism-badge"
                  >
                    15
                    articles
                  </div>
                </div>
                <div className="font-semibold tracking-tight text-lg">
                  Mood Tracking
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Understanding mood tracking features
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2 text-xs text-gray-500">
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
                      className="lucide lucide-chevron-right h-3 w-3"
                    >
                      <path d="m9 18 6-6-6-6"></path></svg
                    >Daily logging
                  </li>
                  <li className="flex items-center gap-2 text-xs text-gray-500">
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
                      className="lucide lucide-chevron-right h-3 w-3"
                    >
                      <path d="m9 18 6-6-6-6"></path></svg
                    >Pattern analysis
                  </li>
                  <li className="flex items-center gap-2 text-xs text-gray-500">
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
                      className="lucide lucide-chevron-right h-3 w-3"
                    >
                      <path d="m9 18 6-6-6-6"></path></svg
                    >Biometric integration
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 claymorphism rounded-lg">
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
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                  </div>
                  <div
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs claymorphism-badge"
                  >
                    6
                    articles
                  </div>
                </div>
                <div className="font-semibold tracking-tight text-lg">
                  Community
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Connecting with the MindSpace community
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2 text-xs text-gray-500">
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
                      className="lucide lucide-chevron-right h-3 w-3"
                    >
                      <path d="m9 18 6-6-6-6"></path></svg
                    >Posting guidelines
                  </li>
                  <li className="flex items-center gap-2 text-xs text-gray-500">
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
                      className="lucide lucide-chevron-right h-3 w-3"
                    >
                      <path d="m9 18 6-6-6-6"></path></svg
                    >Anonymous mode
                  </li>
                  <li className="flex items-center gap-2 text-xs text-gray-500">
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
                      className="lucide lucide-chevron-right h-3 w-3"
                    >
                      <path d="m9 18 6-6-6-6"></path></svg
                    >Support groups
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Popular Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs claymorphism-badge"
                  >
                    AI Companion
                  </div>
                  <div className="flex items-center gap-1">
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
                      className="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      ></path></svg
                    ><span className="text-xs text-gray-500">4.9</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  How to start your first AI conversation
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-500">
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
                    <polyline points="12 6 12 12 16 14"></polyline></svg
                  ><span
                    >3 min
                    read</span
                  >
                </div>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs claymorphism-badge"
                  >
                    Mood Tracking
                  </div>
                  <div className="flex items-center gap-1">
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
                      className="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      ></path></svg
                    ><span className="text-xs text-gray-500">4.8</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Understanding your mood patterns
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-500">
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
                    <polyline points="12 6 12 12 16 14"></polyline></svg
                  ><span
                    >5 min
                    read</span
                  >
                </div>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs claymorphism-badge"
                  >
                    Safety
                  </div>
                  <div className="flex items-center gap-1">
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
                      className="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      ></path></svg
                    ><span className="text-xs text-gray-500">4.9</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Setting up crisis support contacts
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-500">
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
                    <polyline points="12 6 12 12 16 14"></polyline></svg
                  ><span
                    >2 min
                    read</span
                  >
                </div>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs claymorphism-badge"
                  >
                    Privacy
                  </div>
                  <div className="flex items-center gap-1">
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
                      className="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      ></path></svg
                    ><span className="text-xs text-gray-500">4.7</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Privacy settings and data control
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-500">
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
                    <polyline points="12 6 12 12 16 14"></polyline></svg
                  ><span
                    >4 min
                    read</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h2
            className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center"
          >
            Need More Help?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
            >
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 claymorphism rounded-lg">
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
                      className="lucide lucide-message-circle h-6 w-6"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Live Chat
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Chat with our support team
                </p>
                <div className="space-y-1 text-xs text-gray-500 mb-4">
                  <p>
                    Available:
                    24/7
                  </p>
                  <p>
                    Response:
                    &lt; 5 minutes
                  </p>
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full claymorphism-button text-white"
                  style={{backgroundColor: "hsl(var(--theme-primary))"}}
                >
                  Start Chat
                </button>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
            >
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 claymorphism rounded-lg">
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
                      className="lucide lucide-mail h-6 w-6"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path
                        d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Email Support
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Send us a detailed message
                </p>
                <div className="space-y-1 text-xs text-gray-500 mb-4">
                  <p>
                    Available:
                    24/7
                  </p>
                  <p>
                    Response:
                    &lt; 2 hours
                  </p>
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full claymorphism-button text-white"
                  style={{backgroundColor: "hsl(var(--theme-primary))"}}
                >
                  Send Email
                </button>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
            >
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 claymorphism rounded-lg">
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
                      className="lucide lucide-phone h-6 w-6"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Crisis Hotline
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Immediate mental health support
                </p>
                <div className="space-y-1 text-xs text-gray-500 mb-4">
                  <p>
                    Available:
                    24/7
                  </p>
                  <p>
                    Response:
                    Immediate
                  </p>
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full claymorphism-button text-white"
                  style={{backgroundColor: "#dc2626"}}
                >
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
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
                className="lucide lucide-video h-5 w-5"
                style={{color: "hsl(var(--theme-primary))"}}
              >
                <path
                  d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
                ></path>
                <rect x="2" y="6" width="14" height="12" rx="2"></rect></svg
              >Video Tutorials
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div
                  className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-3 claymorphism flex items-center justify-center"
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
                    className="lucide lucide-video h-8 w-8 text-gray-400"
                  >
                    <path
                      d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
                    ></path>
                    <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                  Getting Started
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">5:30</p>
              </div>
              <div className="text-center">
                <div
                  className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-3 claymorphism flex items-center justify-center"
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
                    className="lucide lucide-video h-8 w-8 text-gray-400"
                  >
                    <path
                      d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
                    ></path>
                    <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                  AI Companion Guide
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">8:15</p>
              </div>
              <div className="text-center">
                <div
                  className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-3 claymorphism flex items-center justify-center"
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
                    className="lucide lucide-video h-8 w-8 text-gray-400"
                  >
                    <path
                      d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
                    ></path>
                    <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                  Privacy Settings
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">3:45</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Help