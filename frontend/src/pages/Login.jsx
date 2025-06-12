import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = ({authenticatedtoast, Errorupdate, Successupdate, notify}) => {
  const [userLoginEmail, setUserLoginEmail] = useState("");
  const [userLoginPassword, setUserLoginPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const validatePassword = (pass) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+])[A-Za-z\d@$!%*?&+]{8,}$/;
    return passwordRegex.test(pass);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const newErrors = [];

    if (!validatePassword(userLoginPassword)) {
      newErrors.password =
        "Password must be 8+ characters and include uppercase, lowercase, number, and special character (@$!%*?&+)";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      notify();
      const response = await axios.post(
        "api/auth/login",
        {
          email: userLoginEmail,
          password: userLoginPassword,
        },
        {
          withCredentials: true,
        }
      );
      const createdText = `${response?.data?.email} has logged in  `;
      Successupdate(createdText);
      navigate("/dashboard");
      console.log(response);
      setErrors({});
    } catch (err) {
      Errorupdate(err.response?.data?.error);
      console.log(err)
    }
  };
useEffect(()=>{
    if(authenticatedtoast === true){
        console.log("ready")
    }
})
  return (
    <>
      <div className="min-h-screen  flex items-center justify-center p-4">
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
              Welcome Back
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Sign in to continue your wellness journey
            </p>
          </div>
          <div className="rounded-lg bg-card text-card-foreground glassmorphism-card border-0 shadow-none">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight text-center">
                Sign In to MindSpace
              </div>
            </div>
            <div className="p-6 pt-0">
              <form className="space-y-6" onSubmit={handleLogin}>
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
                    placeholder="Input your email"
                    required
                    value={userLoginEmail}
                    onChange={(e) => setUserLoginEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className="flex h-10 w-full rounded-md border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pr-10 claymorphism-input border-0"
                      id="password"
                      placeholder="Enter your password"
                      required
                      value={userLoginPassword}
                      onChange={(e) => setUserLoginPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    ></button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {/* <button
                      type="button"
                      role="checkbox"
                      aria-checked="false"
                      data-state="unchecked"
                      value="on"
                      className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      id="remember"
                    ></button> */}
                    {/* <input
                      type="checkbox"
                      aria-hidden="true"
                      style={{
                        transform: "translateX(-100%)",
                        position: "absolute",
                        pointerEvents: "none",
                        opacity: 0,
                        margin: 0,
                      }}
                      tabIndex="-1"
                      value="on"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Remember me
                    </label> */}
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm hover:underline"
                    style={{ color: "hsl(var(--theme-primary))" }}
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full claymorphism-button text-white"
                  type="submit"
                  disabled={userLoginEmail === "" || userLoginPassword === ""}
                  style={{ backgroundColor: "hsl(var(--theme-primary))" }}
                >
                  Sign In
                </button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-gray-900 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 claymorphism-button w-full">
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      ></path>
                    </svg>
                    Google
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 claymorphism-button w-full">
                    <svg
                      className="h-4 w-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                    Facebook
                  </button>
                </div>
              </form>
              <div className="mt-6 p-3  rounded-lg" style={{ backgroundColor: "hsl(var(--theme-primary))" }}>
                <div className="flex items-center gap-2" >
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
                  <span className="text-sm text-white" >
                    Your login is secured with end-to-end encryption
                  </span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  Don&#x27;t have an account?
                  <Link
                    to="/signup"
                    className="font-medium hover:underline"
                    style={{ color: "hsl(var(--theme-primary))" }}
                  >
                  {" "}  Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Need immediate support?
              <Link
                to="/crisis"
                className="text-red-600 hover:underline font-medium"
              >
             {" "}   Crisis Resources
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
