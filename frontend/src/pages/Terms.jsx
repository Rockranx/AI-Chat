import React, { useState } from 'react'

const Terms = () => {

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
              className="lucide lucide-scale h-3 w-3 mr-1"
            >
              <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
              <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
              <path d="M7 21h10"></path>
              <path d="M12 3v18"></path>
              <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg
            >Terms of Service
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            Terms of<span className="block" style={{color: "hsl(var(--theme-primary))"}}
              >Service</span
            >
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            These terms govern your use of MindSpace and outline our mutual
            responsibilities to create a safe, supportive environment for mental
            wellness.
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
              ><span>Questions? legal@mindspace.com</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="p-6">
              <h3 className="font-semibold mb-2 text-yellow-800">
                Medical Disclaimer
              </h3>
              <p className="text-sm text-yellow-700">
                MindSpace is not a substitute for professional medical advice,
                diagnosis, or treatment. Always seek the advice of qualified
                health providers with questions about medical conditions.
              </p>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card ring-2 ring-red-500"
          >
            <div className="p-6">
              <h3 className="font-semibold mb-2 text-red-800">Crisis Situations</h3>
              <p className="text-sm text-red-700">
                If you are experiencing a mental health crisis or having
                thoughts of self-harm, please contact emergency services (911)
                or a crisis hotline immediately.
              </p>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="p-6">
              <h3 className="font-semibold mb-2 text-blue-800">Data Protection</h3>
              <p className="text-sm text-blue-700">
                Your mental health data is protected by HIPAA-compliant security
                measures. We never sell your personal information to third
                parties.
              </p>
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
                    className="lucide lucide-circle-check-big h-5 w-5"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                </div>
                Acceptance of Terms
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
                    >By accessing or using MindSpace, you agree to be bound by
                    these Terms of Service</span
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
                    >If you do not agree to all terms and conditions, you may
                    not access or use our services</span
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
                    >These terms apply to all users, including visitors,
                    registered users, and premium subscribers</span
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
                    >You must be at least 13 years old to use MindSpace (with
                    parental consent if under 18)</span
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
                Description of Service
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
                    >MindSpace provides mental health support tools including AI
                    companionship, mood tracking, and community features</span
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
                    >Our services are designed to supplement, not replace,
                    professional mental health care</span
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
                    >We reserve the right to modify, suspend, or discontinue any
                    part of our service at any time</span
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
                    >Service availability may vary by location and is subject to
                    local laws and regulations</span
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
                User Responsibilities
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
                    >Provide accurate and complete information when creating
                    your account</span
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
                    >Maintain the security of your account credentials and
                    notify us of any unauthorized access</span
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
                    >Use the service only for lawful purposes and in accordance
                    with these terms</span
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
                    >Respect other users&#x27; privacy and refrain from sharing
                    personal information without consent</span
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
                    >Report any concerning content or behavior to our moderation
                    team</span
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
                    className="lucide lucide-triangle-alert h-5 w-5"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path
                      d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                    ></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                </div>
                Prohibited Conduct
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
                    >Harassment, bullying, or threatening behavior toward other
                    users</span
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
                    >Sharing content that promotes self-harm, suicide, or
                    dangerous behaviors</span
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
                    >Attempting to access other users&#x27; accounts or private
                    information</span
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
                    >Using the service to provide unlicensed medical or
                    therapeutic advice</span
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
                    >Uploading malicious software or attempting to disrupt our
                    systems</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-8 mb-16">
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                Intellectual Property Rights
              </div>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                All content, features, and functionality of MindSpace, including
                but not limited to text, graphics, logos, icons, images, audio
                clips, and software, are the exclusive property of MindSpace or
                its licensors and are protected by copyright, trademark, and
                other intellectual property laws.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                You retain ownership of any content you create or upload to
                MindSpace, including journal entries, mood data, and community
                posts. By using our service, you grant us a limited license to
                use this content to provide and improve our services.
              </p>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                Limitation of Liability
              </div>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                MindSpace is provided &quot;as is&quot; without warranties of
                any kind, either express or implied. We do not warrant that our
                service will be uninterrupted, error-free, or completely secure.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                To the maximum extent permitted by law, MindSpace shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including but not limited to loss of profits,
                data, or other intangible losses.
              </p>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                Termination
              </div>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                You may terminate your account at any time by contacting our
                support team or using the account deletion feature in your
                settings. Upon termination, your access to the service will
                cease immediately.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We reserve the right to terminate or suspend your account if you
                violate these terms or engage in behavior that we determine to
                be harmful to other users or our service.
              </p>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                Changes to Terms
              </div>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                We reserve the right to modify these Terms of Service at any
                time. We will notify users of any significant changes via email
                and in-app notifications at least 30 days before the changes
                take effect.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Your continued use of MindSpace after any such changes
                constitutes your acceptance of the new Terms of Service. If you
                do not agree to the modified terms, you must stop using our
                service.
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
              Questions About These Terms?
            </h2>
            <p
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            >
              Our legal team is available to clarify any aspects of these terms
              and help you understand your rights and responsibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 rounded-md text-lg px-8 py-6 claymorphism-button text-white"
                style={{backgroundColor: "hsl(var(--theme-primary))"}}
              >
                Contact Legal Team</button
              ><button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md text-lg px-8 py-6 claymorphism-button"
              >
                Download Terms PDF
              </button>
            </div>
            <div className="mt-8 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="text-sm text-green-800 dark:text-green-200">
                <strong>Governing Law:</strong> These terms are governed by the
                laws of California, United States, and any disputes will be
                resolved in the courts of San Francisco County.
              </p>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default Terms