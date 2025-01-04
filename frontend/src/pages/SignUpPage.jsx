import { useState } from "react"
import { useAuthStore } from "../store/useAuthStore";
import { LucideLock, LucideMail, LucideMessageSquare, LucideUser2 } from 'lucide-react';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [forlgata, setForlgata] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { signUp, isSigningUp } = useAuthStore();

  const validateForm = () => {

  }

  const handleSubmit = () => {

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

          {/* Input Fields */}
          <div className="grid gap-y-6">
            {/* Input field - Full Name */}
            <div className="grid gap-y-3">
              <label>Full name</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. doejohn@gmail.com"
                  className="h-[55px] w-full lg:w-[500px] pl-11 border border-gray-300 rounded-xl"
                />
                <LucideUser2 className="h-5 w-5 mx-4 absolute inset-0 my-auto text-gray-400 " />
              </div>
            </div>

            {/* Input field - Email */}
            <div className="grid gap-y-3">
              <label>Email</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="e.g. doejohn@gmail.com"
                  className="h-[55px] w-full lg:w-[500px] pl-11 border border-gray-300 rounded-xl"
                />
                <LucideMail className="h-5 w-5 mx-4 absolute inset-0 my-auto text-gray-400 " />
              </div>
            </div>

            {/* Input field - Password */}
            <div className="grid gap-y-3">
              <label>Password</label>
              <div className="relative">
                <LucideLock className="h-5 w-5 mx-4 absolute inset-0 my-auto text-gray-400 " />
                <input
                  type="password"
                  placeholder="Your password"
                  className="h-[55px] w-full lg:w-[500px] pl-11 border border-gray-300 rounded-xl"
                />
              </div>
            </div>

            {/* Submit button */}
            <button type="submit" className="bg-primary text-white h-[55px] rounded-xl">Create an account</button>
          
            {/* Quick Link */}
            <h1 className="font-medium text-sm text-center">Already have an account? <span className="text-primary underline font-semibold"><a href="/login">Log in</a></span></h1>
          </div>
        </div>
      </div>

      {/* Right Container */}
      <div className="hidden lg:block w-1/2">

      </div>
    </div>
  )
}
