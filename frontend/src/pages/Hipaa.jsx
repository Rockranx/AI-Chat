import React from 'react'

const Hipaa = () => {
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
            >HIPAA Compliance
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            HIPAA Compliant<span
              className="block"
              style={{color: "hsl(var(--theme-primary))"}}
              >Mental Health Platform</span
            >
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            MindSpace is fully compliant with HIPAA regulations, ensuring your
            protected health information is secured with the highest standards
            of privacy and security in healthcare technology.
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
              ><span>Last audit: December 2024</span>
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
              ><span>Compliance questions? hipaa@mindspace.com</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center justify-between">
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
                  Data Encryption
                </div>
                <div
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-100 text-green-800 border-green-200 claymorphism-badge"
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
                    className="lucide lucide-circle-check-big h-3 w-3 mr-1"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  >Compliant
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                End-to-end encryption for all protected health information
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
                    >AES-256 encryption for data at rest</span
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
                    >TLS 1.3 for data in transit</span
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
              </ul>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center justify-between">
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
                  Access Controls
                </div>
                <div
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-100 text-green-800 border-green-200 claymorphism-badge"
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
                    className="lucide lucide-circle-check-big h-3 w-3 mr-1"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  >Compliant
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Strict access controls limit who can view your health
                information
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
                    >Role-based access control (RBAC)</span
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
                    >Multi-factor authentication required</span
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
                    >Regular access reviews and audits</span
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
                    >Principle of least privilege</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center justify-between">
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
                      className="lucide lucide-file-text h-5 w-5"
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
                  Audit Logs
                </div>
                <div
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-100 text-green-800 border-green-200 claymorphism-badge"
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
                    className="lucide lucide-circle-check-big h-3 w-3 mr-1"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  >Compliant
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Comprehensive logging of all access to protected health
                information
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
                    >Immutable audit trails</span
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
                    >Real-time monitoring and alerts</span
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
                    >Detailed access logging</span
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
                    >Automated compliance reporting</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center justify-between">
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
                  Data Backup &amp; Recovery
                </div>
                <div
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-100 text-green-800 border-green-200 claymorphism-badge"
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
                    className="lucide lucide-circle-check-big h-3 w-3 mr-1"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  >Compliant
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Secure backup and disaster recovery procedures
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
                    >Encrypted automated backups</span
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
                    >Geographic redundancy</span
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
                    >Regular recovery testing</span
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
                    >99.9% uptime guarantee</span
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
              Security Certifications &amp; Compliance
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Independently verified compliance with healthcare security
              standards
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
                  HIPAA Certified
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Full compliance with Health Insurance Portability and
                  Accountability Act
                </p>
                <div
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs claymorphism-badge"
                >
                  Certified 2024
                </div>
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
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Security, availability, processing integrity, confidentiality,
                  and privacy
                </p>
                <div
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs claymorphism-badge"
                >
                  Audited 2024
                </div>
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
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  International standard for information security management
                </p>
                <div
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs claymorphism-badge"
                >
                  Certified 2024
                </div>
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
                    className="lucide lucide-file-text h-8 w-8 mx-auto"
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
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  HITECH Compliant
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Health Information Technology for Economic and Clinical Health
                  Act
                </p>
                <div
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs claymorphism-badge"
                >
                  Verified 2024
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h2
            className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8"
          >
            HIPAA Security Safeguards
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold tracking-tight text-lg">
                  Administrative Safeguards
                </div>
              </div>
              <div className="p-6 pt-0">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
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
                      className="lucide lucide-circle-check-big h-4 w-4 mt-0.5"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path></svg
                    ><span className="text-gray-700 dark:text-gray-300"
                      >Designated HIPAA Security Officer</span
                    >
                  </li>
                  <li className="flex items-start gap-2 text-sm">
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
                      className="lucide lucide-circle-check-big h-4 w-4 mt-0.5"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path></svg
                    ><span className="text-gray-700 dark:text-gray-300"
                      >Regular staff training and certification</span
                    >
                  </li>
                  <li className="flex items-start gap-2 text-sm">
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
                      className="lucide lucide-circle-check-big h-4 w-4 mt-0.5"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path></svg
                    ><span className="text-gray-700 dark:text-gray-300"
                      >Business Associate Agreements with all vendors</span
                    >
                  </li>
                  <li className="flex items-start gap-2 text-sm">
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
                      className="lucide lucide-circle-check-big h-4 w-4 mt-0.5"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path></svg
                    ><span className="text-gray-700 dark:text-gray-300"
                      >Incident response and breach notification
                      procedures</span
                    >
                  </li>
                  <li className="flex items-start gap-2 text-sm">
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
                      className="lucide lucide-circle-check-big h-4 w-4 mt-0.5"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path></svg
                    ><span className="text-gray-700 dark:text-gray-300"
                      >Regular risk assessments and security evaluations</span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold tracking-tight text-lg">
                  Physical Safeguards
                </div>
              </div>
              <div className="p-6 pt-0">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
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
                      className="lucide lucide-circle-check-big h-4 w-4 mt-0.5"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path></svg
                    ><span className="text-gray-700 dark:text-gray-300"
                      >Secure data centers with 24/7 monitoring</span
                    >
                  </li>
                  <li className="flex items-start gap-2 text-sm">
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
                      className="lucide lucide-circle-check-big h-4 w-4 mt-0.5"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path></svg
                    ><span className="text-gray-700 dark:text-gray-300"
                      >Biometric access controls to server rooms</span
                    >
                  </li>
                  <li className="flex items-start gap-2 text-sm">
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
                      className="lucide lucide-circle-check-big h-4 w-4 mt-0.5"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path></svg
                    ><span className="text-gray-700 dark:text-gray-300"
                      >Environmental controls and redundant power</span
                    >
                  </li>
                  <li className="flex items-start gap-2 text-sm">
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
                      className="lucide lucide-circle-check-big h-4 w-4 mt-0.5"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path></svg
                    ><span className="text-gray-700 dark:text-gray-300"
                      >Secure disposal of hardware and media</span
                    >
                  </li>
                  <li className="flex items-start gap-2 text-sm">
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
                      className="lucide lucide-circle-check-big h-4 w-4 mt-0.5"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path></svg
                    ><span className="text-gray-700 dark:text-gray-300"
                      >Workstation security and access controls</span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold tracking-tight text-lg">
                  Technical Safeguards
                </div>
              </div>
              <div className="p-6 pt-0">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
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
                      className="lucide lucide-circle-check-big h-4 w-4 mt-0.5"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path></svg
                    ><span className="text-gray-700 dark:text-gray-300"
                      >Unique user identification and authentication</span
                    >
                  </li>
                  <li className="flex items-start gap-2 text-sm">
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
                      className="lucide lucide-circle-check-big h-4 w-4 mt-0.5"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path></svg
                    ><span className="text-gray-700 dark:text-gray-300"
                      >Automatic logoff and session management</span
                    >
                  </li>
                  <li className="flex items-start gap-2 text-sm">
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
                      className="lucide lucide-circle-check-big h-4 w-4 mt-0.5"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path></svg
                    ><span className="text-gray-700 dark:text-gray-300"
                      >Encryption of data at rest and in transit</span
                    >
                  </li>
                  <li className="flex items-start gap-2 text-sm">
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
                      className="lucide lucide-circle-check-big h-4 w-4 mt-0.5"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path></svg
                    ><span className="text-gray-700 dark:text-gray-300"
                      >Integrity controls to prevent data alteration</span
                    >
                  </li>
                  <li className="flex items-start gap-2 text-sm">
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
                      className="lucide lucide-circle-check-big h-4 w-4 mt-0.5"
                      style={{color: "hsl(var(--theme-primary))"}}
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path></svg
                    ><span className="text-gray-700 dark:text-gray-300"
                      >Transmission security for data communications</span
                    >
                  </li>
                </ul>
              </div>
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
                className="lucide lucide-users h-5 w-5"
                style={{color: "hsl(var(--theme-primary))"}}
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg
              >Business Associate Agreements
            </div>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              For healthcare providers and covered entities, MindSpace offers
              comprehensive Business Associate Agreements (BAAs) that ensure
              HIPAA compliance when using our platform for patient care.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  BAA Includes:
                </h4>
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
                    ><span>Permitted uses and disclosures</span>
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
                    ><span>Safeguard requirements</span>
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
                    ><span>Breach notification procedures</span>
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
                    ><span>Data return and destruction</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  Available For:
                </h4>
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
                    ><span>Healthcare providers</span>
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
                    ><span>Mental health practices</span>
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
                    ><span>Healthcare systems</span>
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
                    ><span>Insurance companies</span>
                  </li>
                </ul>
              </div>
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
              Questions About HIPAA Compliance?
            </h2>
            <p
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            >
              Our compliance team is available to answer questions about our
              HIPAA implementation and provide documentation for your
              organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 rounded-md text-lg px-8 py-6 claymorphism-button text-white"
                style={{backgroundColor: "hsl(var(--theme-primary))"}}
              >
                Contact Compliance Team</button
              ><button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md text-lg px-8 py-6 claymorphism-button"
              >
                Download Compliance Docs
              </button>
            </div>
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Compliance Officer:</strong> Dr. Sarah Mitchell, CISA,
                CISSP - Available for compliance consultations and BAA
                discussions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hipaa