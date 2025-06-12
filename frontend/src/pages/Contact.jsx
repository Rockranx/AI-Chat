import React from 'react'

const Contact = () => {
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
              className="lucide lucide-message-circle h-3 w-3 mr-1"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg
            >Get in Touch
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            We&#x27;re Here to<span
              className="block"
              style={{color: "hsl(var(--theme-primary))"}}
              >Support You</span
            >
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Whether you need technical support, have questions about our
            features, or need immediate crisis support, our team is available
            24/7 to help you on your mental wellness journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
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
                    className="lucide lucide-mail h-5 w-5"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
              </div>
              <div className="font-semibold tracking-tight text-lg">
                General Support
              </div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Questions about features, billing, or account issues
              </p>
              <div className="space-y-2 text-xs text-gray-500 mb-4">
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
                    className="lucide lucide-clock h-3 w-3"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline></svg
                  ><span>Within 2 hours</span>
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
                    className="lucide lucide-circle-check-big h-3 w-3"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span>24/7</span>
                </div>
              </div>
              <p
                className="font-mono text-sm"
                style={{color: "hsl(var(--theme-primary))"}}
              >
                support@mindspace.com
              </p>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card ring-2 ring-red-500"
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
                    className="lucide lucide-phone h-5 w-5"
                    style={{color: "#dc2626"}}
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path>
                  </svg>
                </div>
                <div
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 text-xs claymorphism-badge"
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
                    className="lucide lucide-triangle-alert h-3 w-3 mr-1"
                  >
                    <path
                      d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                    ></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path></svg
                  >Urgent
                </div>
              </div>
              <div className="font-semibold tracking-tight text-lg">
                Crisis Support
              </div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Immediate mental health support and crisis intervention
              </p>
              <div className="space-y-2 text-xs text-gray-500 mb-4">
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
                    className="lucide lucide-clock h-3 w-3"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline></svg
                  ><span>Immediate</span>
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
                    className="lucide lucide-circle-check-big h-3 w-3"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span>24/7</span>
                </div>
              </div>
              <p
                className="font-mono text-sm"
                style={{color: "hsl(var(--theme-primary))"}}
              >
                1-800-MINDSPACE
              </p>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
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
              </div>
              <div className="font-semibold tracking-tight text-lg">Live Chat</div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Real-time chat with our support team
              </p>
              <div className="space-y-2 text-xs text-gray-500 mb-4">
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
                    className="lucide lucide-clock h-3 w-3"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline></svg
                  ><span>&lt; 5 minutes</span>
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
                    className="lucide lucide-circle-check-big h-3 w-3"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span>24/7</span>
                </div>
              </div>
              <p
                className="font-mono text-sm"
                style={{color: "hsl(var(--theme-primary))"}}
              >
                Available in app
              </p>
            </div>
          </div>
          <div
            className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card"
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
                    className="lucide lucide-mail h-5 w-5"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
              </div>
              <div className="font-semibold tracking-tight text-lg">
                Business Inquiries
              </div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Partnerships, enterprise solutions, and media requests
              </p>
              <div className="space-y-2 text-xs text-gray-500 mb-4">
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
                    className="lucide lucide-clock h-3 w-3"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline></svg
                  ><span>Within 24 hours</span>
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
                    className="lucide lucide-circle-check-big h-3 w-3"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span>Mon-Fri 9AM-6PM PST</span>
                </div>
              </div>
              <p
                className="font-mono text-sm"
                style={{color: "hsl(var(--theme-primary))"}}
              >
                business@mindspace.com
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                  className="lucide lucide-send h-5 w-5"
                  style={{color: "hsl(var(--theme-primary))"}}
                >
                  <path
                    d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
                  ></path>
                  <path d="m21.854 2.147-10.94 10.939"></path></svg
                >Send us a Message
              </div>
            </div>
            <div className="p-6 pt-0">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >Name *</label
                    ><input
                      className="flex h-10 w-full rounded-md border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm claymorphism-input border-0"
                      placeholder="Your full name"
                      required=""
                      value=""
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >Email *</label
                    ><input
                      type="email"
                      className="flex h-10 w-full rounded-md border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm claymorphism-input border-0"
                      placeholder="your@email.com"
                      required=""
                      value=""
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >Priority</label
                  ><select
                    className="w-full p-3 claymorphism-input border-0 rounded-lg"
                  >
                    <option value="low">Low - General inquiry</option>
                    <option value="normal" selected="">
                      Normal - Standard support
                    </option>
                    <option value="high">High - Urgent issue</option>
                    <option value="critical">
                      Critical - Crisis support needed
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >Subject *</label
                  ><input
                    className="flex h-10 w-full rounded-md border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm claymorphism-input border-0"
                    placeholder="Brief description of your inquiry"
                    required=""
                    value=""
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >Message *</label
                  ><textarea
                    className="flex min-h-[80px] w-full rounded-md border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm claymorphism-input border-0"
                    placeholder="Please provide details about your inquiry..."
                    rows="5"
                    required=""
                  ></textarea>
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full claymorphism-button text-white"
                  type="submit"
                  disabled=""
                  style={{backgroundColor: "hsl(var(--muted))"}}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="space-y-6">
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
                    className="lucide lucide-map-pin h-5 w-5"
                    style={{color: "hsl(var(--theme-primary))"}}
                  >
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle></svg
                  >Our Locations
                </div>
              </div>
              <div className="p-6 pt-0 space-y-6">
                <div className="p-4 claymorphism rounded-lg">
                  <h3
                    className="font-semibold text-gray-900 dark:text-gray-100 mb-2"
                  >
                    San Francisco
                  </h3>
                  <div
                    className="space-y-1 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <p>123 Mental Health Ave, Suite 100</p>
                    <p>+1 (555) 123-4567</p>
                    <p>
                      Timezone:
                      PST
                    </p>
                  </div>
                </div>
                <div className="p-4 claymorphism rounded-lg">
                  <h3
                    className="font-semibold text-gray-900 dark:text-gray-100 mb-2"
                  >
                    New York
                  </h3>
                  <div
                    className="space-y-1 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <p>456 Wellness Street, Floor 15</p>
                    <p>+1 (555) 987-6543</p>
                    <p>
                      Timezone:
                      EST
                    </p>
                  </div>
                </div>
                <div className="p-4 claymorphism rounded-lg">
                  <h3
                    className="font-semibold text-gray-900 dark:text-gray-100 mb-2"
                  >
                    London
                  </h3>
                  <div
                    className="space-y-1 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <p>789 Mindfulness Road, Office 5</p>
                    <p>+44 20 1234 5678</p>
                    <p>
                      Timezone:
                      GMT
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg glassmorphism-card border-red-200"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
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
                    className="lucide lucide-triangle-alert h-6 w-6 text-red-600"
                  >
                    <path
                      d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                    ></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                  <h3 className="font-semibold text-red-900 dark:text-red-100">
                    Crisis Support
                  </h3>
                </div>
                <p className="text-red-800 dark:text-red-200 text-sm mb-4">
                  If you&#x27;re experiencing a mental health crisis or having
                  thoughts of self-harm, please reach out immediately:
                </p>
                <div className="space-y-2">
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full claymorphism-button text-white"
                    style={{backgroundColor: "#dc2626"}}
                  >
                    Call Crisis Line: 988</button
                  ><button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full claymorphism-button"
                  >
                    Text HOME to 741741
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 </>
  )
}

export default Contact