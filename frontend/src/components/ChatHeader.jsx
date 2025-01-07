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
        <div className="z-[5] w-full px-6 py-3 flex items-center bg-white justify-between border-2 border-stroke">
            <div className="flex gap-x-5 items-center">
                {/* User Avatar */}
                <div className="size-fit relative">
                    <img
                        src={selectedUser.profilePic || '/avatar.svg'}
                        alt={selectedUser.name + '_profile'}
                        className="size-12 rounded-full bg-light"
                    />
                    <div className={`absolute bottom-0 -right-1 size-4 rounded-full border-2 border-white ${onlineUsers.includes(selectedUser._id) ? 'bg-green-500' : 'bg-dark'}`}>
                    </div>
                </div>

                {/* User Info */}
                <div>
                    <h1 className="font-semibold">{selectedUser.name}</h1>
                    {onlineUsers.includes(selectedUser._id) ? (
                        <p className="font-medium text-sm text-green-500">Online</p>
                    ) : (
                        <p className="font-medium text-sm text-subtitle">Offline</p>
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
