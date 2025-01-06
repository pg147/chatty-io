// Global States
import { LucideMessageCircle } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

// Skeleton Components
import MessageSkeleton from "./skeletons/MessageSkeleton";

export default function Messages() {
    const { isMessagesLoading, messages, selectedUser } = useChatStore();

    return (
        <>
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
                        <h1 className="text-center text-lg">Type &quot;Hi&quot; to start a conversation with <span className="font-semibold">{`${selectedUser.name.slice(0,1).toUpperCase()}${selectedUser.name.slice(1)}`}</span></h1>
                    </div>
                ) : (
                    <div>

                    </div>
                )
            )}
        </>
    )
}
