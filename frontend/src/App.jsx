// React imports
import { useEffect } from "react";

// React-Router-DOM
import { Navigate, Route, Routes } from "react-router-dom"

import { Toaster } from 'react-hot-toast';

// Loader
import { LoaderCircle } from 'lucide-react'

// Global States
import { useAuthStore } from "./store/useAuthStore";

// Components
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoaderCircle className="size-10 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={authUser ? <HomePage /> : <Navigate to={"/login"} />} />
          <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to={"login"} />} />
        </Routes>
        <Toaster containerClassName="font-medium" />
    </>
  );
}


