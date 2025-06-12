import React from 'react'

const Pricing = () => {
  return (
<>
 <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-4 claymorphism-badge"
            style={{color: "hsl(var(--theme-primary))"}}
          >
            Simple, Transparent Pricing
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            Choose Your<span
              className="block"
              style={{color: "hsl(var(--theme-primary))"}}
              >Wellness Plan</span
            >
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Start free and upgrade when you&#x27;re ready. All plans include our
            core mental health features with no hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card relative"
          >
            <div className="flex flex-col space-y-1.5 p-6 text-center">
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
                    className="lucide lucide-heart h-8 w-8"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path
                      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="font-semibold tracking-tight text-2xl">Essential</div>
              <div className="mt-4">
                <span
                  className="text-4xl font-bold text-gray-900 dark:text-gray-100"
                  >Free</span
                >
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Perfect for getting started with mental wellness
              </p>
            </div>
            <div className="p-6 pt-0">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Basic mood tracking</span
                  >
                </li>
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Limited AI chat sessions</span
                  >
                </li>
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Community access</span
                  >
                </li>
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Crisis resources</span
                  >
                </li>
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Basic progress tracking</span
                  >
                </li>
              </ul>
              <div className="mb-6">
                <p className="text-xs text-gray-500 mb-2">Limitations:</p>
                <ul className="space-y-1">
                  <li className="text-xs text-gray-500">
                    •
                    5 AI sessions per month
                  </li>
                  <li className="text-xs text-gray-500">
                    •
                    Basic analytics only
                  </li>
                  <li className="text-xs text-gray-500">
                    •
                    Community posting limits
                  </li>
                </ul>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full claymorphism-button"
              >
                Get Started Free
              </button>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card relative ring-2"
            // style={{ring-color: "hsl(var(--theme-primary))"}}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div
                className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 claymorphism-badge px-4 py-1"
                style={{
                  backgroundColor: "hsl(var(--theme-primary))",
                  color: "white"
                }}
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
                  className="lucide lucide-star h-3 w-3 mr-1"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                  ></path></svg
                >Most Popular
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 p-6 text-center">
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
                    className="lucide lucide-users h-8 w-8"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
              <div className="font-semibold tracking-tight text-2xl">Wellness</div>
              <div className="mt-4">
                <span
                  className="text-4xl font-bold text-gray-900 dark:text-gray-100"
                  >$9.99</span
                ><span className="text-gray-600 dark:text-gray-400 ml-2"
                  >/per month</span
                >
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Comprehensive support for your mental health journey
              </p>
            </div>
            <div className="p-6 pt-0">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Unlimited mood tracking</span
                  >
                </li>
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Unlimited AI conversations</span
                  >
                </li>
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Advanced pattern recognition</span
                  >
                </li>
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Full community access</span
                  >
                </li>
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Progress analytics</span
                  >
                </li>
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Biometric integration</span
                  >
                </li>
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Export data</span
                  >
                </li>
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Priority support</span
                  >
                </li>
              </ul>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full claymorphism-button text-white"
                style={{backgroundColor: "hsl(var(--theme-primary))"}}
              >
                Start 14-Day Trial
              </button>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card relative"
          >
            <div className="flex flex-col space-y-1.5 p-6 text-center">
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
                    className="lucide lucide-crown h-8 w-8"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path
                      d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"
                    ></path>
                    <path d="M5 21h14"></path>
                  </svg>
                </div>
              </div>
              <div className="font-semibold tracking-tight text-2xl">
                Professional
              </div>
              <div className="mt-4">
                <span
                  className="text-4xl font-bold text-gray-900 dark:text-gray-100"
                  >$19.99</span
                ><span className="text-gray-600 dark:text-gray-400 ml-2"
                  >/per month</span
                >
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Advanced features for serious mental health management
              </p>
            </div>
            <div className="p-6 pt-0">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Everything in Wellness</span
                  >
                </li>
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Therapist collaboration tools</span
                  >
                </li>
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Advanced AI insights</span
                  >
                </li>
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Custom goal setting</span
                  >
                </li>
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Family sharing (up to 4)</span
                  >
                </li>
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >Priority crisis support</span
                  >
                </li>
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >White-label options</span
                  >
                </li>
                <li className="flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big h-4 w-4"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-gray-700 dark:text-gray-300"
                    >API access</span
                  >
                </li>
              </ul>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full claymorphism-button"
              >
                Start 14-Day Trial
              </button>
            </div>
          </div>
        </div>
        <div
          className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card mb-16"
        >
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="font-semibold tracking-tight text-center text-2xl">
              What&#x27;s Included
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 claymorphism rounded-lg mb-4">
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
                    className="lucide lucide-heart h-8 w-8 mx-auto"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path
                      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Core Features</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Essential mental health tools available in all plans
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 claymorphism rounded-lg mb-4">
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
                    className="lucide lucide-users h-8 w-8 mx-auto"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Community Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Connect with others on similar journeys
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 claymorphism rounded-lg mb-4">
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
                    className="lucide lucide-crown h-8 w-8 mx-auto"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path
                      d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"
                    ></path>
                    <path d="M5 21h14"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Advanced Analytics</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Deep insights into your mental health patterns
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h2
            className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8"
          >
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
            >
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Can I change plans anytime?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes take effect immediately.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
            >
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Is my data secure?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Absolutely. We use end-to-end encryption and are HIPAA
                  compliant. Your data is never shared without your explicit
                  consent.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
            >
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Do you offer refunds?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We offer a 30-day money-back guarantee for all paid plans. No
                  questions asked.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
            >
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Can I use this with my therapist?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Yes! Our Professional plan includes therapist collaboration
                  tools, and you can export your data to share with any
                  healthcare provider.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-lg bg-card text-card-foreground border-0 shadow-2xl glassmorphism-card"
        >
          <div className="p-12 text-center">
            <h2
              className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4"
            >
              Ready to Start Your Wellness Journey?
            </h2>
            <p
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            >
              Join thousands of people who have found support and healing
              through MindSpace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 rounded-md text-lg px-8 py-6 claymorphism-button text-white"
                style={{backgroundColor: "hsl(var(--theme-primary))"}}
              >
                Start Free Today</button
              ><button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md text-lg px-8 py-6 claymorphism-button"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
</>
  )
}

export default Pricing