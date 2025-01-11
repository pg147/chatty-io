// React Imports
import { Link } from "react-router-dom";

// Global States
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

// Icon Library
import { LucideLogOut, LucideMessageSquare, LucideUser2 } from "lucide-react";

export default function Navbar() {
  const { logout, authUser } = useAuthStore();
  const { setSelectedUser } = useChatStore();

  const handleLogout = () => {
    setSelectedUser(null);
    logout();
  }

  return (
    <div className="h-fit w-full z-[10] flex items-center justify-between px-4 py-5 md:px-8 md:py-6 shadow-intense ">
      {/* Brand */}
      <div className="flex items-center gap-x-2.5">
        <div className="h-fit w-fit mx-auto bg-primary/10 rounded-lg p-2.5">
          <LucideMessageSquare className="size-6 text-primary" />
        </div>
        <div>
          <h1 className="text-base md:text-xl font-semibold">Chatty</h1>
          <p className="text-sm font-medium">by <span className="font-semibold text-primary">PG</span></p>
        </div>
      </div>

      {/* User Controls */}
      <div className="flex w-fit gap-x-3">
        {/* Settings */}
        {/* <div className="cursor-pointer md:px-5 md:py-3 rounded-2xl border-[1.5px] border-stroke flex items-center gap-x-2.5 bg-light">
          <div className="h-fit w-fit p-3 md:p-0 rounded-full bg-[#FCFCFC] lg:bg-transparent">
            <LucideSettings className="size-6 md:size-5 text-primary" />
          </div>
          <h1 className="font-medium hidden lg:block">Settings</h1>
        </div> */}

        {authUser && <>
          {/* Profile */}
          <Link to={"/profile"} >
            <div className="cursor-pointer md:p-3.5 rounded-2xl border-[1.5px] border-stroke flex items-center gap-x-2.5 bg-light">
              <div className="h-fit w-fit p-3 md:p-0 rounded-full bg-[#FCFCFC] lg:bg-transparent">
                <LucideUser2 className="size-5 text-primary" />
              </div>
            </div>
          </Link>

          {/* Logout */}
          <div onClick={handleLogout} className="cursor-pointer md:p-3.5 rounded-2xl flex items-center gap-x-2.5 bg-primary/10">
            <div className="h-fit w-fit p-3 md:p-0 rounded-full">
              <LucideLogOut className="size-5 text-primary" />
            </div>
          </div>
        </>}
      </div>
    </div>
  )
}
