// Global States
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

// Icon Library
import { LucideX } from "lucide-react";

export default function ChatHeader() {
    const { selectedUser, setSelectedUser } = useChatStore();
    const { onlineUsers } = useAuthStore();

    const handleCloseChat = () => setSelectedUser(null);

    return (
        <div className="sticky top-0 z-[5] w-full px-6 py-3 flex items-center bg-white justify-between border-2 border-stroke">
            <div className="flex gap-x-5 items-center">
                {/* User Avatar */}
                <div className="size-fit relative">
                    <img
                        src={selectedUser.profilePic || '/avatar.svg'}
                        alt={selectedUser.name + '_profile'}
                        className="size-12 rounded-full bg-light"
                    />
                    {onlineUsers.includes(selectedUser._id) ? (<div className="absolute right-0 size-2 rounded-full border border-white bg-green-500"></div>) : null}
                </div>

                {/* User Info */}
                <div>
                    <h1 className="font-semibold">{selectedUser.name}</h1>
                    {onlineUsers.includes(selectedUser._id) ? (
                        <p className="mt-2">Online</p>
                    ) : (
                        <div className="flex items-center gap-x-2 mt-2">
                            <div className="size-fit p-1 bg-red-400 rounded-full"></div>
                            <p className="font-medium text-sm text-subtitle">Offline</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Close Menu */}
            <div onClick={handleCloseChat} className="cursor-pointer size-fit p-2 rounded-full hover:bg-primary/10">
                <LucideX className="size-6 text-primary" />
            </div>
        </div>
    )
}
