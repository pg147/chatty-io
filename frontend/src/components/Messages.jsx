// Global States
import { useChatStore } from "../store/useChatStore";

// Skeleton Components
import MessageSkeleton from "./skeletons/MessageSkeleton";

export default function Messages() {
    const { isMessagesLoading, messages } = useChatStore();

    return (
        <>
            {isMessagesLoading ? (
                <div className="flex flex-col h-screen">
                    <MessageSkeleton />
                </div>
            ) : (
                messages.length === 0 ? (
                    <div className="flex flex-col h-screen items-center justify-center">

                    </div>
                ) : (
                    <div>

                    </div>
                )
            )}
        </>
    )
}
