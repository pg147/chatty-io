// Icon Library
import { LucideMessageSquare } from "lucide-react";

export default function NoSelectedUser() {
  return (
    <div className="grid gap-y-5">
      {/* Brand */}
      <div className="h-fit w-fit mx-auto bg-primary/10 rounded-lg p-4 animate-bounce">
        <LucideMessageSquare className="size-8 text-primary" />
      </div>

      <div className="w-fit mx-auto">
        <h1 className="font-semibold text-2xl text-center">Welcome to <span className="text-primary">Chatty!</span></h1>
        <p className="text-center font-medium mt-2">Select a conversation from sidebar to start chatting</p>
      </div>
    </div>
  )
}
