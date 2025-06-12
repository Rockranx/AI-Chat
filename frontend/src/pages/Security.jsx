import React from 'react'

const Security = () => {
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
            >Enterprise-Grade Security
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            Your Privacy &amp;<span
              className="block"
              style={{color: "hsl(var(--theme-primary))"}}
              >Security First</span
            >
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Mental health data is deeply personal. We&#x27;ve built MindSpace
            with the highest security standards to ensure your information
            remains private, secure, and under your complete control.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center gap-3">
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
                    className="lucide lucide-lock h-6 w-6"
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
                <div className="font-semibold tracking-tight text-xl">
                  End-to-End Encryption
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                All data is encrypted using AES-256 encryption before it leaves
                your device
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
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
                  ><span className="text-gray-700 dark:text-gray-300"
                    >Military-grade AES-256 encryption</span
                  >
                </li>
                <li className="flex items-center gap-2 text-sm">
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
                  ><span className="text-gray-700 dark:text-gray-300"
                    >Zero-knowledge architecture</span
                  >
                </li>
                <li className="flex items-center gap-2 text-sm">
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
                  ><span className="text-gray-700 dark:text-gray-300"
                    >Encrypted data at rest and in transit</span
                  >
                </li>
                <li className="flex items-center gap-2 text-sm">
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
                  ><span className="text-gray-700 dark:text-gray-300"
                    >Client-side encryption keys</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center gap-3">
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
                    className="lucide lucide-shield h-6 w-6"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    ></path>
                  </svg>
                </div>
                <div className="font-semibold tracking-tight text-xl">
                  HIPAA Compliance
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Full compliance with healthcare privacy regulations and
                standards
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
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
                  ><span className="text-gray-700 dark:text-gray-300"
                    >HIPAA compliant infrastructure</span
                  >
                </li>
                <li className="flex items-center gap-2 text-sm">
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
                  ><span className="text-gray-700 dark:text-gray-300"
                    >Business Associate Agreements</span
                  >
                </li>
                <li className="flex items-center gap-2 text-sm">
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
                  ><span className="text-gray-700 dark:text-gray-300"
                    >Regular compliance audits</span
                  >
                </li>
                <li className="flex items-center gap-2 text-sm">
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
                  ><span className="text-gray-700 dark:text-gray-300"
                    >Staff training and certification</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center gap-3">
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
                    className="lucide lucide-eye h-6 w-6"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path
                      d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                    ></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <div className="font-semibold tracking-tight text-xl">
                  Privacy by Design
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Privacy considerations built into every aspect of our platform
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
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
                  ><span className="text-gray-700 dark:text-gray-300"
                    >Minimal data collection</span
                  >
                </li>
                <li className="flex items-center gap-2 text-sm">
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
                  ><span className="text-gray-700 dark:text-gray-300"
                    >Anonymous usage options</span
                  >
                </li>
                <li className="flex items-center gap-2 text-sm">
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
                  ><span className="text-gray-700 dark:text-gray-300"
                    >Data minimization principles</span
                  >
                </li>
                <li className="flex items-center gap-2 text-sm">
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
                  ><span className="text-gray-700 dark:text-gray-300"
                    >User consent management</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center gap-3">
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
                    className="lucide lucide-server h-6 w-6"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <rect
                      width="20"
                      height="8"
                      x="2"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      width="20"
                      height="8"
                      x="2"
                      y="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="6" x2="6.01" y1="6" y2="6"></line>
                    <line x1="6" x2="6.01" y1="18" y2="18"></line>
                  </svg>
                </div>
                <div className="font-semibold tracking-tight text-xl">
                  Secure Infrastructure
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Enterprise-grade security infrastructure with 99.9% uptime
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
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
                  ><span className="text-gray-700 dark:text-gray-300"
                    >SOC 2 Type II certified</span
                  >
                </li>
                <li className="flex items-center gap-2 text-sm">
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
                  ><span className="text-gray-700 dark:text-gray-300"
                    >Multi-region redundancy</span
                  >
                </li>
                <li className="flex items-center gap-2 text-sm">
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
                  ><span className="text-gray-700 dark:text-gray-300"
                    >24/7 security monitoring</span
                  >
                </li>
                <li className="flex items-center gap-2 text-sm">
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
                  ><span className="text-gray-700 dark:text-gray-300"
                    >Regular penetration testing</span
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
            <div className="font-semibold tracking-tight text-center text-2xl">
              Security Certifications
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Independently verified security and compliance standards
            </p>
          </div>
          <div className="p-6 pt-0">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                    className="lucide lucide-award h-8 w-8 mx-auto"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path
                      d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                    ></path>
                    <circle cx="12" cy="8" r="6"></circle>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  HIPAA Compliant
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Healthcare privacy and security standards
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
                    className="lucide lucide-shield h-8 w-8 mx-auto"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  SOC 2 Type II
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Security, availability, and confidentiality
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
                    className="lucide lucide-lock h-8 w-8 mx-auto"
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
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  ISO 27001
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Information security management
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
                    className="lucide lucide-eye h-8 w-8 mx-auto"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path
                      d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                    ></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  GDPR Compliant
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  European data protection regulation
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h2
            className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8"
          >
            Our Privacy Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
            >
              <div className="p-6">
                <h3
                  className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2"
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
                    className="lucide lucide-circle-check-big h-5 w-5"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  >Data Ownership
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You own your data completely. We&#x27;re just the custodians.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
            >
              <div className="p-6">
                <h3
                  className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2"
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
                    className="lucide lucide-circle-check-big h-5 w-5"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  >Transparency
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Clear, understandable privacy policies with no hidden clauses.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
            >
              <div className="p-6">
                <h3
                  className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2"
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
                    className="lucide lucide-circle-check-big h-5 w-5"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  >Control
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Full control over what data is collected and how it&#x27;s
                  used.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
            >
              <div className="p-6">
                <h3
                  className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2"
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
                    className="lucide lucide-circle-check-big h-5 w-5"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  >Portability
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Export your data anytime in standard formats.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
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
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Access Controls
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Multi-layered access controls ensure only authorized personnel
                can access systems, with all access logged and monitored.
              </p>
              <ul className="space-y-2">
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
                  ><span className="text-sm">Multi-factor authentication</span>
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
                  ><span className="text-sm">Role-based access control</span>
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
                  ><span className="text-sm">Regular access reviews</span>
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
                  ><span className="text-sm">Comprehensive audit logs</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
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
                    className="lucide lucide-file-text h-8 w-8"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path
                      d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                    ></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Data Handling
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Strict data handling procedures ensure your information is
                processed securely and in compliance with all applicable
                regulations.
              </p>
              <ul className="space-y-2">
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
                  ><span className="text-sm">Data minimization practices</span>
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
                  ><span className="text-sm">Secure data deletion</span>
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
                  ><span className="text-sm">Regular data backups</span>
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
                  ><span className="text-sm">Incident response procedures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="rounded-lg bg-card text-card-foreground border-0 shadow-2xl glassmorphism-card"
        >
          <div className="p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 claymorphism rounded-lg">
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
                  className="lucide lucide-shield h-12 w-12"
                  style={{color: "hsl(var(--theme-primary))"}}
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  ></path>
                </svg>
              </div>
            </div>
            <h2
              className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4"
            >
              Questions About Security?
            </h2>
            <p
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            >
              Our security team is available to answer any questions about our
              privacy and security practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 rounded-md text-lg px-8 py-6 claymorphism-button text-white"
                style={{backgroundColor: "hsl(var(--theme-primary))"}}
              >
                Contact Security Team</button
              ><button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md text-lg px-8 py-6 claymorphism-button"
              >
                View Security Docs
              </button>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Security