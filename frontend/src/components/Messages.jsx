// Global States
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";

// Icon Library
import { LucideMessageCircle } from "lucide-react";

// Skeleton Components
import MessageSkeleton from "./skeletons/MessageSkeleton";

export default function Messages() {
    const { isMessagesLoading, messages, selectedUser } = useChatStore();
    const { authUser } = useAuthStore();

    return (
        <div className="h-screen bg-light">
            {isMessagesLoading ? (
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
                    <div className="flex-1 flex flex-col p-9">
                        {messages.map((message, index) => (
                            authUser._id === message.senderId ? (
                                <div
                                    key={index}
                                    className={`w-full flex justify-end`}
                                >
                                    <div className="w-fit flex gap-x-4 flex-row-reverse mb-6">
                                        <div className="size-fit">
                                            <img
                                                src={authUser.profilePic}
                                                className="size-10 rounded-full"
                                            />
                                        </div>
                                        <div>
                                            <h1 className="text-right text-sm font-semibold">{message.createdAt}</h1>
                                            {message.image && <div className="size-36 mt-3">
                                                <img src={message.image} alt="image" className="size-fit object-cover" />
                                            </div>}
                                            <div className="bg-primary/25 h-fit mt-3 p-4 rounded-2xl max-w-sm">
                                                <p>{message.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    key={index}
                                    className={`w-full flex justify-start`}
                                >
                                    <div className="w-fit flex gap-x-4 mb-6">
                                        <div className="size-fit">
                                            <img
                                                src={selectedUser.profilePic}
                                                className="size-10 rounded-full"
                                            />
                                        </div>
                                        <div>
                                            <h1 className="text-left text-sm font-semibold">{message.createdAt}</h1>
                                            <div className="bg-mediumDark h-fit mt-3 p-4 rounded-2xl max-w-sm">
                                                <p>{message.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                )
            )}
        </div>
    )
}
