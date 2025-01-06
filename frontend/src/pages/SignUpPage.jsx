// React imports
import { useState } from "react"
import { Link } from "react-router-dom"

// React Hot Toast
import toast from "react-hot-toast";

// Global States
import { useAuthStore } from "../store/useAuthStore";

// Lucide Icon Library
import { LoaderCircle, LucideEye, LucideEyeClosed, LucideLock, LucideMail, LucideMessageSquare, LucideUser2 } from 'lucide-react';

// Components
import Pattern from "../components/Pattern";

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
    // Full Name validations
    if (!formData.name) return toast.error("Fullname is required!");

    // Email Validations
    if (!formData.email) return toast.error("Email is required!");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format!");
    
    // Password validations
    if (!formData.password) return toast.error("Password not entered !");
    if(formData.password.length < 6) return toast.error("Password must be at least 6 characters")
  
    return true;
  }

  // Function to show or hide password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  // Function to handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // preventing default reload

    const success = validateForm(); // If validations passed
    if (success === true) signUp(formData);
  }

  return (
    <div className="h-screen w-full lg:flex">
      {/* Left Container - Signup Form */}
      <div className="h-screen px-4 lg:px-0 lg:w-1/2 flex items-center justify-center bg-[#FCFCFC]">

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
              <button type="submit" disabled={isSigningUp} className="bg-primary lg:hover:bg-primary/90 transition-colors duration-300 ease-out text-white h-[55px] rounded-xl">
                {isSigningUp ? (
                  <div className="w-fit mx-auto flex items-center justify-center gap-x-3">
                    <LoaderCircle className="size-5 animate-spin text-white" />
                    <p>Signing up</p>
                  </div>
                ) : 'Create an account'}
              </button>

              {/* Quick Link */}
              <div className="w-fit mx-auto">
                <p className="font-medium text-sm text-center">
                  Already have an account? {" "}
                  <span className="text-primary lg:hover:underline font-semibold">
                    <Link to={"/login"}>Login</Link>
                  </span>
                </p>
              </div>
            </div>
          </form>

        </div>
      </div>

      {/* Right Container */}
      <div className="hidden w-1/2 lg:flex flex-col items-center justify-center">
        <Pattern />
        <div className="text-center w-fit mx-auto mt-12">
          <h1 className="text-2xl font-bold">Join our <span className="text-primary">community</span></h1>
          <p className="text-sm font-medium mt-3">Connect with friends, share moments and stay in touch with your loved ones!</p>
        </div>
      </div>
    </div>
  )
}
