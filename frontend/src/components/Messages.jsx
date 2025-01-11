// React imports
import { useEffect, useRef } from "react";

// Global States
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";

// Utils
import { formatMessageTime } from "../lib/utils.js";

// Icon Library
import { LucideMessageCircle } from "lucide-react";

// Skeleton Components
import MessageSkeleton from "./skeletons/MessageSkeleton";

export default function Messages() {
    const messageRef = useRef(null);
    const { isMessagesLoading, messages, selectedUser } = useChatStore();
    const { authUser } = useAuthStore();

    useEffect(() => {
        if (messageRef.current && messages) {
            messageRef.current.scrollIntoView({ behavior: 'smooth' });
        };
    }, [messages, selectedUser._id]);

    return (
        <div className="bg-light">
            {true ? (
                <div className="flex flex-col h-screen">
                    <MessageSkeleton />
                </div>
            ) : (
                messages.length === 0 ? (
                    <div className="flex flex-col space-y-4 h-screen items-center justify-center">
                        <div className="size-fit bg-primary/10 rounded-full p-5 animate-bounce">
                            <LucideMessageCircle className="size-9 text-primary" />
                        </div>
                        <h1 className="text-center text-lg">Type &quot;Hi&quot; to start a conversation with <span className="font-semibold">{`${selectedUser.name.slice(0, 1).toUpperCase()}${selectedUser.name.slice(1)}`}</span></h1>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col p-3 md:p-9">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                ref={messageRef}
                                className={`w-full flex ${authUser._id === message.senderId ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`w-fit flex items-end gap-x-2.5 md:gap-x-4 mb-3 md:mb-6 ${authUser._id === message.senderId ? ' flex-row-reverse' : ''}`}>
                                    <div className="size-fit">
                                        <img
                                            src={authUser._id === message.senderId ? authUser.profilePic : selectedUser.profilePic}
                                            className="size-7 md:size-10 rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <h1 className={`${authUser._id === message.senderId ? 'text-right' : 'text-left'} text-xs md:text-sm text-subtitle font-regular`}>{formatMessageTime(message.createdAt)}</h1>
                                        <div className={`h-fit mt-2 md:mt-3 p-3 md:p-4 rounded-2xl max-w-[200px] md:max-w-sm font-regular ${authUser._id === message.senderId ? 'bg-primary/90' : 'bg-mediumDark'}`}>
                                            {message.image && <div className="size-36 mt-3">
                                                <img src={message.image} alt="image" className="object-cover" />
                                            </div>}
                                            {message.text && <p className={`text-sm md:text-base ${authUser._id === message.senderId ? 'text-white' : 'text-black'}`}>{message.text}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            )}
        </div>
    )
}
