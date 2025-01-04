import { LucideMessageSquare, LucideSettings } from "lucide-react";

export default function Navbar() {
  return (
    <div className="h-fit w-full z-[10] flex items-center justify-between px-4 py-3 lg:px-12 lg:py-6 shadow-intense ">
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

      {/* Settings */}
      <div className="flex items-center gap-x-2.5">
        <div className="h-fit w-fit p-3 lg:p-0 rounded-full bg-[#FCFCFC] lg:bg-transparent">
          <LucideSettings className="size-6 lg:size-5 text-primary" />
        </div>
        <h1 className="font-medium hidden lg:block">Settings</h1>
      </div>
    </div>
  )
}
