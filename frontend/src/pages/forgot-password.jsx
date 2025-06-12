import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Forgotpassword = ({ Errorupdate, Successupdate, notify }) => {
  const [userResetEmail, setUserResetEmail] = useState("");
  const [errors, setErrors] = useState([]);

  //   const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const newErrors = [];
    try {
      notify();
      const response = await axios.post("/api/auth/forgot-password", {
        email: userResetEmail,
      });
      const createdText = `${response?.data?.status}: ${response?.data?.message}`;
      Successupdate(createdText);
      console.log(response);
      setErrors({});
    } catch (err) {
      Errorupdate(err.response?.data?.error);
    }
  };
  return (
    <>
      <div className="min-h-screen  flex items-center justify-center p-4">
        {/* <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <Link
            to="/login"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
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
              className="lucide lucide-arrow-left h-4 w-4"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to Login
          </Link>
          <div className="flex items-center gap-3">
            <button
              className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-2 claymorphism-button"
              type="button"
              id="radix-«Rcjrlb»"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
            >
              <div
                className="w-3 h-3 rounded-full border"
                style={{ backgroundColor: "hsl(var(--theme-primary))" }}
              ></div>
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
                className="lucide lucide-palette h-4 w-4"
              >
                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
              </svg>
              <span className="hidden sm:inline">Theme</span>
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 relative overflow-hidden"
              aria-label="Switch to dark mode"
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
                className="lucide lucide-sun h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
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
                className="lucide lucide-moon absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </button>
          </div>
        </div> */}
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="p-3 theme-secondary rounded-lg">
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
                  style={{ color: "hsl(var(--theme-primary))" }}
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Reset Your Password
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              We&#x27;ll send you a secure link to reset your password
            </p>
          </div>
          <div className="rounded-lg bg-card text-card-foreground glassmorphism-card border-0 shadow-none">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight text-center flex items-center justify-center gap-2">
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
                  style={{ color: "hsl(var(--theme-primary))" }}
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                Password Reset
              </div>
            </div>
            <div className="p-6 pt-0">
              <form className="space-y-6" onSubmit={handleResetPassword}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="flex h-10 w-full rounded-md border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm claymorphism-input border-0"
                    id="email"
                    placeholder="Enter your email address"
                    required
                    value={userResetEmail}
                    onChange={(e) => setUserResetEmail(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Enter the email address associated with your MindSpace
                    account
                  </p>
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full claymorphism-button text-white"
                  type="submit"
                  disabled={!userResetEmail}
                  style={{ backgroundColor: "hsl(var(--theme-primary))" }}
                >
                  Send Reset Link
                </button>
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    Remember your password?
                    <Link
                      to="/login"
                      className="font-medium hover:underline"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      {" "}
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div
            className="mt-6 p-3 bg-green-50 dark:bg-green-950 rounded-lg"
            style={{ backgroundColor: "hsl(var(--theme-primary))" }}
          >
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
                className="lucide lucide-shield h-4 w-4 text-white"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
              <span className="text-sm text-white">
                Reset links expire in 10 minutes for your security
              </span>
            </div>
          </div>
          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-gray-500">
              Need help?
              <Link
                to="/contact"
                className="hover:underline"
                style={{ color: "hsl(var(--theme-primary))" }}
              >
                {" "}
                Contact Support
              </Link>
            </p>
            <p className="text-sm text-gray-500">
              In crisis?
              <Link
                to="/crisis"
                className="text-red-600 hover:underline font-medium"
              >
                {" "}
                Get Immediate Help
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;
