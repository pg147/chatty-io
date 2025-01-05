// Global States
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";

// Icon Library
import { LucideLogOut, LucideMessageSquare, LucideSettings, LucideUser2 } from "lucide-react";

export default function Navbar() {
  const { logout, authUser } = useAuthStore();

  return (
    <div className="h-fit w-full z-[10] flex items-center justify-between px-4 py-3 lg:px-8 lg:py-6 shadow-intense ">
      {/* Brand */}
      <div className="flex items-center gap-x-2.5">
        <div className="h-fit w-fit mx-auto bg-primary/10 rounded-lg p-2.5">
          <LucideMessageSquare className="size-6 text-primary" />
        </div>
        <div>
          <h1 className="text-lg lg:text-xl font-bold">Chatty</h1>
          <p className="text-sm">by <span className="font-semibold text-primary">PG</span></p>
        </div>
      </div>

      {/* User Controls */}
      <div className="flex w-fit gap-x-3">
        {/* Settings */}
        <div className="cursor-pointer lg:px-5 lg:py-3 rounded-2xl border-[1.5px] border-stroke flex items-center gap-x-2.5 bg-light">
          <div className="h-fit w-fit p-3 lg:p-0 rounded-full bg-[#FCFCFC] lg:bg-transparent">
            <LucideSettings className="size-6 lg:size-5 text-primary" />
          </div>
          <h1 className="font-medium hidden lg:block">Settings</h1>
        </div>

        {authUser && <>
          {/* Profile */}
          <Link to={"/profile"} >
            <div className="cursor-pointer lg:px-5 lg:py-3 rounded-2xl border-[1.5px] border-stroke flex items-center gap-x-2.5 bg-light">
              <div className="h-fit w-fit p-3 lg:p-0 rounded-full bg-[#FCFCFC] lg:bg-transparent">
                <LucideUser2 className="size-6 lg:size-5 text-primary" />
              </div>
              <h1 className="font-medium hidden lg:block">Profile</h1>
            </div>
          </Link>

          {/* Logout */}
          <div onClick={logout} className="cursor-pointer lg:px-5 lg:py-3 rounded-2xl border-[1.5px] border-stroke flex items-center gap-x-2.5 bg-light">
            <div className="h-fit w-fit p-3 lg:p-0 rounded-full bg-[#FCFCFC] lg:bg-transparent">
              <LucideLogOut className="size-6 lg:size-5 text-primary" />
            </div>
            <h1 className="font-medium hidden lg:block">Logout</h1>
          </div>
        </>}
      </div>
    </div>
  )
}
