import React from 'react'

const Privacy = () => {
  return (
   <>
   
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
              className="lucide lucide-shield h-3 w-3 mr-1"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
              ></path></svg
            >Privacy Policy
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            Your Privacy is<span
              className="block"
              style={{color: "hsl(var(--theme-primary))"}}
              >Our Priority</span
            >
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We believe mental health data is deeply personal. This policy
            explains how we collect, use, and protect your information with the
            highest standards of privacy and security.
          </p>
          <div
            className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500"
          >
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
                className="lucide lucide-calendar h-4 w-4"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path></svg
              ><span>Last updated: January 15, 2024</span>
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
                className="lucide lucide-mail h-4 w-4"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg
              ><span>Questions? privacy@mindspace.com</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div
                className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-3"
              >
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
                    className="lucide lucide-eye h-5 w-5"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path
                      d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                    ></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                Information We Collect
              </div>
            </div>
            <div className="p-6 pt-0">
              <ul className="space-y-3">
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >Account information (name, email, profile details)</span
                  >
                </li>
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >Mental health data (mood entries, journal entries, AI
                    conversations)</span
                  >
                </li>
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >Usage data (app interactions, feature usage patterns)</span
                  >
                </li>
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >Device information (for security and optimization)</span
                  >
                </li>
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >Location data (only if you enable crisis location
                    services)</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div
                className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-3"
              >
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
                    className="lucide lucide-shield h-5 w-5"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    ></path>
                  </svg>
                </div>
                How We Use Your Information
              </div>
            </div>
            <div className="p-6 pt-0">
              <ul className="space-y-3">
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >Provide personalized mental health support and
                    insights</span
                  >
                </li>
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >Improve AI companion responses and recommendations</span
                  >
                </li>
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >Enable community features while protecting your
                    privacy</span
                  >
                </li>
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >Ensure platform security and prevent abuse</span
                  >
                </li>
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >Comply with legal obligations and safety requirements</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div
                className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-3"
              >
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
                    className="lucide lucide-lock h-5 w-5"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <rect
                      width="18"
                      height="11"
                      x="3"
                      y="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                Data Protection &amp; Security
              </div>
            </div>
            <div className="p-6 pt-0">
              <ul className="space-y-3">
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >End-to-end encryption for all sensitive mental health
                    data</span
                  >
                </li>
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >HIPAA-compliant infrastructure and data handling</span
                  >
                </li>
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >Regular security audits and penetration testing</span
                  >
                </li>
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >Multi-factor authentication and access controls</span
                  >
                </li>
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >Secure data centers with 24/7 monitoring</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div
                className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-3"
              >
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
                    className="lucide lucide-download h-5 w-5"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" x2="12" y1="15" y2="3"></line>
                  </svg>
                </div>
                Your Privacy Rights
              </div>
            </div>
            <div className="p-6 pt-0">
              <ul className="space-y-3">
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >Access and download all your personal data</span
                  >
                </li>
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >Correct or update your information at any time</span
                  >
                </li>
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >Delete your account and all associated data</span
                  >
                </li>
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >Control what data is shared with therapists or family</span
                  >
                </li>
                <li
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{backgroundColor: "hsl(var(--theme-primary))"}}
                  ></div>
                  <span className="text-sm"
                    >Opt out of non-essential data collection</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card mb-16"
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
                className="lucide lucide-calendar h-5 w-5"
                style={{color: "hsl(var(--theme-primary))"}}
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path></svg
              >Data Retention Periods
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              How long we keep different types of data and why
            </p>
          </div>
          <div className="p-6 pt-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      className="text-left py-3 px-4 font-medium text-gray-900 dark:text-gray-100"
                    >
                      Data Type
                    </th>
                    <th
                      className="text-left py-3 px-4 font-medium text-gray-900 dark:text-gray-100"
                    >
                      Retention Period
                    </th>
                    <th
                      className="text-left py-3 px-4 font-medium text-gray-900 dark:text-gray-100"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td
                      className="py-3 px-4 font-medium text-gray-900 dark:text-gray-100"
                    >
                      Account Data
                    </td>
                    <td
                      className="py-3 px-4"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      Until account deletion
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                      Basic profile and settings
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td
                      className="py-3 px-4 font-medium text-gray-900 dark:text-gray-100"
                    >
                      Mental Health Data
                    </td>
                    <td
                      className="py-3 px-4"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      7 years or deletion
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                      Mood entries, journal, AI chats
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td
                      className="py-3 px-4 font-medium text-gray-900 dark:text-gray-100"
                    >
                      Usage Analytics
                    </td>
                    <td
                      className="py-3 px-4"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      2 years
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                      Anonymized usage patterns
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td
                      className="py-3 px-4 font-medium text-gray-900 dark:text-gray-100"
                    >
                      Security Logs
                    </td>
                    <td
                      className="py-3 px-4"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      1 year
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                      Login attempts, security events
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="p-8 text-center">
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
                    className="lucide lucide-shield h-8 w-8"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    ></path>
                  </svg>
                </div>
              </div>
              <h3
                className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2"
              >
                Privacy by Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Privacy considerations are built into every feature from the
                ground up, not added as an afterthought.
              </p>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="p-8 text-center">
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
                    className="lucide lucide-eye h-8 w-8"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path
                      d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                    ></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
              </div>
              <h3
                className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2"
              >
                Transparency
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We clearly explain what data we collect, how we use it, and give
                you full control over your information.
              </p>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="p-8 text-center">
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
                    className="lucide lucide-lock h-8 w-8"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <rect
                      width="18"
                      height="11"
                      x="3"
                      y="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
              </div>
              <h3
                className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2"
              >
                Data Minimization
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We only collect data that&#x27;s necessary to provide our
                services and improve your mental health experience.
              </p>
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
              Questions About Your Privacy?
            </h2>
            <p
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            >
              Our privacy team is here to help you understand how we protect
              your data and answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 rounded-md text-lg px-8 py-6 claymorphism-button text-white"
                style={{backgroundColor: "hsl(var(--theme-primary))"}}
              >
                Contact Privacy Team</button
              ><button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md text-lg px-8 py-6 claymorphism-button"
              >
                Download Privacy Policy
              </button>
            </div>
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Policy Updates:</strong> We&#x27;ll notify you of any
                significant changes to this privacy policy via email and in-app
                notifications.
              </p>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Privacy