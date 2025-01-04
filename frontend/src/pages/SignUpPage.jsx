// React imports
import { useState } from "react"

// Global States
import { useAuthStore } from "../store/useAuthStore";

// Lucide Icon Library
import { LoaderCircle, LucideEye, LucideEyeClosed, LucideLock, LucideMail, LucideMessageSquare, LucideUser2 } from 'lucide-react';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { signUp, isSigningUp } = useAuthStore();

  // Function to validate all input fields
  const validateForm = () => {

  }

  // Function to show or hide password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  // Function to handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="h-screen w-full lg:flex">
      {/* Left Container - Signup Form */}
      <div className="px-4 lg:px-0 lg:w-1/2 flex items-center justify-center border-r-2 border-r-gray-500">

        {/* Content */}
        <div className="grid gap-y-10 lg:gap-y-14 w-full lg:w-fit">
          {/* Brand */}
          <div className="w-full">
            <div className="h-fit w-fit mx-auto bg-primary/10 rounded-lg p-2.5">
              <LucideMessageSquare className="h-5 w-5 text-primary" />
            </div>
            <div className="text-center w-fit mx-auto mt-4">
              <h1 className="text-xl font-bold">Create your account</h1>
              <p className="text-sm font-medium mt-1">Get started with your free account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid gap-y-6">
              {/* Input field - Full Name */}
              <div className="grid gap-y-3">
                <label className="font-medium">Full name</label>
                <div className="relative">
                  {/* Prefix Icon */}
                  <div className="absolute pl-4 left-0 inset-y-0 flex items-center justify-center pointer-events-none">
                    <LucideUser2 className="size-5 text-gray-400 " />
                  </div>
                  <input
                    type="text"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="h-[55px] w-full lg:w-[500px] pl-11 border border-gray-300 rounded-xl outline-primary"
                  />
                </div>
              </div>

              {/* Input field - Email */}
              <div className="grid gap-y-3">
                <label className="font-medium">Email</label>
                <div className="relative">
                  {/* Prefix Icon */}
                  <div className="absolute pl-4 left-0 inset-y-0 flex items-center justify-center pointer-events-none">
                    <LucideMail className="size-5 text-gray-400 " />
                  </div>
                  <input
                    type="email"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. doejohn@gmail.com"
                    className="h-[55px] w-full lg:w-[500px] pl-11 border border-gray-300 rounded-xl outline-primary"
                  />
                </div>
              </div>

              {/* Input field - Password */}
              <div className="grid gap-y-3">
                <label className="font-medium">Password</label>
                <div className="relative">
                  {/* Prefix Icon */}
                  <div className="absolute pl-4 left-0 inset-y-0 flex items-center justify-center pointer-events-none">
                    <LucideLock className="size-5 text-gray-400 " />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Your password"
                    className="h-[55px] w-full lg:w-[500px] pl-11 border border-gray-300 rounded-xl outline-primary"
                  />

                  {/* Suffix Icon Button - Show/Hide password */}
                  <button onClick={handleShowPassword} className="absolute inset-y-0 right-0 pr-5">
                    {showPassword ? <LucideEye className="size-5 text-primary" /> : <LucideEyeClosed className="size-5 text-primary" />}
                  </button>
                </div>
              </div>

              {/* Submit button */}
              <button type="submit" className="bg-primary lg:hover:bg-primary/90 transition-colors duration-300 ease-out text-white h-[55px] rounded-xl">
                {isSigningUp ? (
                  <span>
                    <LoaderCircle className="size-5 animate-spin text-white" />
                    <p>Signing up</p>
                  </span>
                ) : 'Create an account'}
              </button>

              {/* Quick Link */}
              <div className="w-fit mx-auto">
                <p className="font-medium text-sm text-center">
                  Already have an account? {" "}
                  <span className="text-primary lg:hover:underline font-semibold">
                    <a href="/login">Log in</a>
                  </span>
                </p>
              </div>
            </div>
          </form>
          
        </div>
      </div>

      {/* Right Container */}
      <div className="hidden lg:block w-1/2">

      </div>
    </div>
  )
}
