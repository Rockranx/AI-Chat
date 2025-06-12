import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const RestorePassword = ({ Errorupdate, Successupdate, notify }) => {
  const { id } = useParams();
  console.log(id);

  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const validatePassword = (pass) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+])[A-Za-z\d@$!%*?&+]{8,}$/;
    return passwordRegex.test(pass);
  };
  useEffect(() => {
    const newErrors = [];
    if (!validatePassword(userPassword)) {
      newErrors.password =
        "Password must be 8+ characters and include uppercase, lowercase, number, and special character (@$!%*?&+)";
    }

    if (userPassword !== userConfirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors([]);
    }
  }, [userPassword, userConfirmPassword]);
  const handleRegister = async (e) => {
    e.preventDefault();
    const newErrors = [];

    if (!validatePassword(userPassword)) {
      newErrors.password =
        "Password must be 8+ characters and include uppercase, lowercase, number, and special character (@$!%*?&+)";
    }

    if (userPassword !== userConfirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      notify();
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/reset-password/${id}`,
        {
          password: userConfirmPassword,
        },
      
      );
      const createdText = `${response?.data?.message}`;
      Successupdate(createdText);
      navigate("/login");
      console.log(response);
      setErrors({});
    } catch (err) {
      Errorupdate(err.response?.data?.error);
      console.log(err);
    }
  };

  return (
    <>
      <div className="min-h-screen  flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="p-3 bg-red-100 dark:bg-red-950 rounded-lg mb-4">
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
              className="lucide lucide-circle-alert h-8 w-8 text-red-600 mx-auto mb-2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" x2="12" y1="8" y2="12"></line>
              <line x1="12" x2="12.01" y1="16" y2="16"></line>
            </svg>
            <h2 className="text-xl font-semibold text-red-800 dark:text-red-200">
              Invalid Reset Link
            </h2>
            <p className="text-red-600 dark:text-red-300 mt-2">
              This password reset link is invalid or has expired.
            </p>
          </div>
          <Link to="/forgot-password">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 claymorphism-button text-white"
              style={{ backgroundColor: "hsl(var(--theme-primary))" }}
            >
              Request New Reset Link
            </button>
          </Link>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="p-6 claymorphism-card rounded-lg mb-4">
            <div className="text-center mb-6">
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
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Set New Password
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Create a strong password for your account
              </p>
            </div>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  New Password
                </label>
                <input
                  className="flex h-10 w-full rounded-md border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm claymorphism-input border-0"
                  id="newPassword"
                  placeholder="Enter your new password"
                  required
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  type="password"
                />
              </div>
              <div>
                <label
                  htmlFor="confirmNewPassword"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Confirm New Password
                </label>
                <input
                  className="flex h-10 w-full rounded-md border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm claymorphism-input border-0"
                  id="confirmNewPassword"
                  placeholder="Confirm your new password"
                  required
                  value={userConfirmPassword}
                  onChange={(e) => setUserConfirmPassword(e.target.value)}
                  type="password"
                />
              </div>
              <div
                style={{
                  //   border: "1px solid red",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                {errors.confirmPassword && (
                  <small
                    style={{
                      fontSize: "13px",
                      color: "hsl(var(--theme-primary))",
                    }}
                  >
                    {errors.confirmPassword}
                  </small>
                )}
                <br />
                {errors.password && (
                  <small
                    style={{
                      fontSize: "13px",
                      color: "hsl(var(--theme-primary))",
                    }}
                  >
                    {errors.password}
                  </small>
                )}
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full claymorphism-button text-white"
                type="submit"
                style={{ backgroundColor: "hsl(var(--theme-primary))" }}
                disabled={userConfirmPassword === "" || userPassword === ""}
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestorePassword;
