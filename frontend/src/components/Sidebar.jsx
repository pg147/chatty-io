// React imports
import { useEffect } from "react";

// Global States
import { useChatStore } from "../store/useChatStore"
import { useAuthStore } from "../store/useAuthStore";

// Icon Library
import { LucideUsersRound } from "lucide-react";

// Components
import SidebarSkeleton from "./skeletons/SidebarSkeleton";

export default function Sidebar() {
    const { users, getUsers, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
    const { onlineUsers } = useAuthStore();

    const handleUserClick = (userId) => {
        setSelectedUser(userId);
    }

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    // Render Skeleton Component while loading
    if (isUsersLoading) return <SidebarSkeleton />

    return (
        <div className="grid gap-y-6 py-6">
            {/* Headers */}
            <div className="px-6">
                <div className="flex items-center gap-x-2.5">
                    <LucideUsersRound className="size-6 text-primary" />
                    <p className="font-semibold text-lg">Contacts</p>
                </div>
            </div>

            {/* User List */}
            <div>
                {users.map((users, index) => (
                    <div
                        key={index}
                        onClick={() => handleUserClick(users)}
                        className={`border-b-[1.5px] border-b-stroke px-6 py-5 ${selectedUser === users._id ? 'bg-primary/10 hover:bg-none cursor-default' : 'hover:bg-light cursor-pointer'}`}
                    >
                        <div className="flex gap-x-5 items-center">
                            {/* User Avatar */}
                            <div className="size-fit relative">
                                <img
                                    src={users.profilePic.length > 0 ? users.profilePic : '/avatar.svg'}
                                    alt={users.name + '_profile'}
                                    className="size-12 rounded-full bg-light"
                                />
                                <div className={`absolute bottom-0 -right-1 size-4 rounded-full border-2 border-white ${onlineUsers.includes(users._id) ? 'bg-green-500' : 'bg-dark'}`}>
                                </div>
                            </div>

                            {/* User Info */}
                            <div>
                                <h1 className="font-semibold">{users.name}</h1>
                                {onlineUsers.includes(users._id) ? (
                                    <p className="font-medium text-sm text-green-500">Online</p>
                                ) : (
                                    <p className="font-medium text-sm text-subtitle">Offline</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
