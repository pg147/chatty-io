// React imports
import { useEffect } from "react";

// Global States
import { useChatStore } from "../store/useChatStore"

// Icon Library
import { LucideUsersRound } from "lucide-react";

// Components
import SidebarSkeleton from "./skeletons/SidebarSkeleton";

export default function Sidebar() {
    const { users, getUsers, setSelectedUser, isUsersLoading } = useChatStore();

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
                <div className="mt-3 flex items-center gap-x-2">
                    <input type="checkbox" className="size-4 rounded-xl" />
                    <p className="text-sm font-medium">Show online users only</p>
                </div>
            </div>

            {/* User List */}
            <div>
                {users.map((users, index) => (
                    <div onClick={() => handleUserClick(users._id)} key={index} className="border-b-[1.5px] border-b-stroke px-6 py-5 hover:bg-light cursor-pointer">
                        <div className="flex gap-x-5 items-center">
                            {/* User Avatar */}
                            <img
                                src={users.profilePic}
                                alt={users.name + '_profile'}
                                className="size-12 rounded-full"
                            />
                            
                            {/* User Info */}
                            <div>
                                <h1 className="font-semibold">{users.name}</h1>
                                <div className="flex items-center gap-x-2 mt-2">
                                    <div className="size-fit p-1 bg-red-400 rounded-full"></div>
                                    <p className="font-medium text-sm text-subtitle">Offline</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
