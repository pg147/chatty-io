// React Imports
import { useEffect, useRef } from "react";

// Global States
import { useChatStore } from "../store/useChatStore";

// Components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import MessageInputs from "./MessageInputs";

export default function ChatInterface() {
  const { selectedUser, getMessages } = useChatStore();
  const messagesRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }

    getMessages(selectedUser._id);
  }, [getMessages, selectedUser._id]);

  return (
    <div className="relative h-screen flex flex-col">
      {/* Fixed Chat Header */}
      <div className="sticky top-0 z-10">
        <ChatHeader />
      </div>

      {/* Scrollable Messages */}
      <div ref={messagesRef} className="flex-grow overflow-y-auto">
        <Messages />
      </div>

      {/* Fixed Message Inputs */}
      <div className="sticky bottom-0 z-10 w-full">
        <MessageInputs />
      </div>
    </div>
  )
}
