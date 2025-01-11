// React Imports
import { useEffect, useRef } from "react";

// Global States
import { useChatStore } from "../store/useChatStore";

// Components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import MessageInputs from "./MessageInputs";

// Prop Types Dependency
import PropTypes from "prop-types";

// Declaration of Prop Types
ChatInterface.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default function ChatInterface({ onClose }) {
  const { messages, selectedUser, getMessages, subscribeToMessages, unsubscribeToMessages } = useChatStore();
  const messagesRef = useRef(null);

  // Scroll to the bottom when messages update
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  // Fetch messages and manage subscriptions
  useEffect(() => {
    if (selectedUser) {
      getMessages(selectedUser._id); // Fetch chat messages
      subscribeToMessages(); // Subscribe to real-time updates
    }

    return () => {
      if (selectedUser) unsubscribeToMessages();  // Unsubscribe on cleanup
    };
  }, [selectedUser, getMessages, subscribeToMessages, unsubscribeToMessages]);

  // Prevent rendering if no user is selected
  if (!selectedUser) return null;

  return (
    <div className="relative h-screen flex flex-col">
      {/* Fixed Chat Header */}
      <div className="sticky top-0 z-10">
        <ChatHeader onClose={onClose} />
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
