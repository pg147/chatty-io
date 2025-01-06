// React Imports
import { useEffect } from "react";

// Global States
import { useChatStore } from "../store/useChatStore";

// Components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import MessageInputs from "./MessageInputs";

export default function ChatInterface() {
  const { selectedUser, getMessages } = useChatStore();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [getMessages, selectedUser._id]);

  return (
    <div className="relative h-[100vh] bg-light">
      {/* User Info */}
      <ChatHeader />

      {/* Messages */}
      <Messages />

      {/* User Controls */}
      <MessageInputs />
    </div>
  )
}
