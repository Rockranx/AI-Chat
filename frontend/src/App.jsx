import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  redirect,
  replace,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Community from "./pages/Community";
import Crisis from "./pages/Crisis";
import Journal from "./pages/Journal";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./pages/HomePage";
import Features from "./pages/features";
import Forgotpassword from "./pages/forgot-password";
import Help from "./pages/Help";
import Hipaa from "./pages/Hipaa";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Security from "./pages/Security";
import Privacy from "./pages/Privacy";
import Signup from "./pages/Signup";
import Terms from "./pages/Terms";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import ErrorPage from "./components/ErrorPage";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import RestorePassword from "./pages/RestorePassword";
// const navigate = useNavigate()
const ProtectedRoute = ({ children, redirect = "/login" }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/me", {
          withCredentials: true, // Make sure token is sent
        });

        if (response.status === 200 && response.data?.email) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error("Auth check failed:", err.message);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return null; // or a loading spinner

  if (!isAuthenticated) {
    return <Navigate to={redirect} replace />;
  }

  return children;
};
const RegisterUnaccessabile = ({ children, redirect = "/dashboard" }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated2, setIsAuthenticated2] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/me", {
          withCredentials: true, // Make sure token is sent
        });

        if (response.status === 200 && response.data?.email) {
          setIsAuthenticated2(true);
        } else {
          setIsAuthenticated2(false);
        }
      } catch (err) {
        console.error("Auth check failed:", err.message);
        setIsAuthenticated2(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return null; // or a loading spinner

  if (isAuthenticated2) {
    return <Navigate to={redirect} replace />;
  }

  return children;
};

function App() {
  const [loggedUserId, setLoggedUserId] = useState("");
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [pastConversations, setPastConversations] = useState([]);
  const [recentConversations, setRecentConversations] = useState([]);
  ``;
  const toastId = React.useRef(null);
  const notify = () =>
    (toastId.current = toast("Loading", { autoClose: false }));
  const Successupdate = (message) =>
    toast.update(toastId.current, {
      render: message,
      type: "success",
      autoClose: 2500,
    });
  const Errorupdate = (message) =>
    toast.update(toastId.current, {
      render: message,
      type: "error",
      autoClose: 2500,
    });
  const logout = async () => {
    try {
      notify();
      const res = await axios.post(
        "api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        Successupdate(res.data.message);
      }
    } catch (error) {
      Errorupdate(
        "Logout failed:",
        error.response?.data?.message || error.message
      );
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/me", {
          withCredentials: true,
        });

        if (response.status === 200 && response.data?.email) {
          setLoggedUserId(response.data.id);
         
        } else {
          // setIsAuthenticated2(false);
        }
      } catch (err) {
        console.error("Auth check failed:", err.message);
        // setIsAuthenticated2(false);
      } finally {
        // setLoading(false);
      }
    };

    checkAuth();
  }, []);
  useEffect(() => {
    const getallChat = async () => {
      try {
        const res = await axios.get(`api/chat/sessions`, {
          withCredentials: true,
        });

        // console.log(res);
        if (res.status === 200) {
          setPastConversations(res?.data);
        }
        if (res.data && res.data.length > 0) {
          setRecentConversations(res.data.slice(0, 6));
          // console.log("set");
        } else {
          // console.log("none")
        }
      } catch (error) {
        Errorupdate(
          "Logout failed:",
          error.response?.data?.message || error.message
        );
        // console.log(error);
      }
    };
    getallChat();
    const intervalId = setInterval(getallChat, 3000);

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <BrowserRouter>
        <div
          className="min-h-screen "
          style={{ backgroundColor: "hsl(var(--theme-background))" }}
        >
          <Navbar />
          <ToastContainer limit={1} autoClose={2500} />
          <main
            className="container mx-auto px-4 py-6 space-y-6"
            style={{ backgroundColor: "hsl(var(--theme-background))" }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Home
                      logout={logout}
                      Successupdate={Successupdate}
                      notify={notify}
                      Errorupdate={Errorupdate}
                      sessionId={sessionId}
                      setSessionId={setSessionId}
                      recentConversations={recentConversations}
                      pastConversations={pastConversations}
                    />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/chat"
                element={
                  <ProtectedRoute>
                    <Chat
                      logout={logout}
                      Successupdate={Successupdate}
                      notify={notify}
                      Errorupdate={Errorupdate}
                      sessionId={sessionId}
                      setSessionId={setSessionId}
                      pastConversations={pastConversations}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/community"
                element={
                  <ProtectedRoute>
                    <Community
                      Successupdate={Successupdate}
                      notify={notify}
                      Errorupdate={Errorupdate}
                    />
                  </ProtectedRoute>
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/crisis" element={<Crisis />} />
              <Route
                path="/journal"
                element={
                  <ProtectedRoute>
                    <Journal
                      Successupdate={Successupdate}
                      notify={notify}
                      Errorupdate={Errorupdate}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                }
              />
              <Route path="/features" element={<Features />} />
              <Route
                path="/forgot-password"
                element={
                  <RegisterUnaccessabile>
                    <Forgotpassword
                      Successupdate={Successupdate}
                      notify={notify}
                      Errorupdate={Errorupdate}
                    />
                  </RegisterUnaccessabile>
                }
              />
              <Route path="/help" element={<Help />} />
              <Route path="/hipaa" element={<Hipaa />} />
              <Route
                path="/login"
                element={
                  <RegisterUnaccessabile>
                    <Login
                      Successupdate={Successupdate}
                      notify={notify}
                      Errorupdate={Errorupdate}
                    />
                  </RegisterUnaccessabile>
                }
              />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/security" element={<Security />} />
              <Route
                path="/signup"
                element={
                  <RegisterUnaccessabile>
                    <Signup
                      logout={logout}
                      Successupdate={Successupdate}
                      notify={notify}
                      Errorupdate={Errorupdate}
                    />
                  </RegisterUnaccessabile>
                }
              />
              <Route
                path="/restore-password/:id"
                element={
                  <RegisterUnaccessabile>
                    <RestorePassword
                      logout={logout}
                      Successupdate={Successupdate}
                      notify={notify}
                      Errorupdate={Errorupdate}
                    />
                  </RegisterUnaccessabile>
                }
              />
              <Route path="/terms" element={<Terms />} />
              <Route exact path="*" element={<ErrorPage />} />
            </Routes>
          </main>{" "}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
