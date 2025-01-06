import { Loader2 } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

export default function Messages() {
    const { isMessagesLoading, messages } = useChatStore();

    return (
        <>
            {isMessagesLoading ? (
                <div className="flex flex-col h-screen items-center justify-center">
                    <Loader2 className="size-6 text-primary animate-spin" />
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
