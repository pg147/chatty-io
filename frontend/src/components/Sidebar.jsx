// React imports
import { useEffect, useState } from "react";

// Global States
import { useChatStore } from "../store/useChatStore"
import { useAuthStore } from "../store/useAuthStore";

// Icon Library
import { LucideUsersRound } from "lucide-react";

// Components
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { useHelperStore } from "../store/useHelperStore";

export default function Sidebar() {
    const { users, getUsers, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
    const { onlineUsers } = useAuthStore();
    const { setChatOpen } = useHelperStore();
    const [showOnlineUsers, setShowOnlineUsers] = useState(false);

    const handleUserClick = (userId) => {
        setSelectedUser(userId);

        if (window.innerWidth < 768) {
            setChatOpen();
        }
    }

    const handleOnlineUsers = () => {
        setShowOnlineUsers(!showOnlineUsers);
    }

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const filteredUsers = showOnlineUsers ? users.filter(user => onlineUsers.includes(user._id)) : users;

    // Render Skeleton Component while loading
    if (isUsersLoading) return <SidebarSkeleton />

    return (
        <div className="grid gap-y-4 py-6">
            {/* Headers */}
            <div className="flex w-full items-center md:w-fit md:block justify-between px-6 gap-y-4 md:space-y-4">
                <div className="flex items-center gap-x-2.5">
                    <LucideUsersRound className="size-6 text-primary" />
                    <p className="font-medium text-base md:text-lg">Contacts</p>
                </div>
                <div className="flex items-center gap-x-1">
                    <div className="flex items-center gap-x-2.5">
                        <input
                            type="checkbox"
                            className="checkbox size-5 [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary"
                            checked={showOnlineUsers}
                            onChange={handleOnlineUsers}
                        />
                        <p className="font-regular text-sm">Show online only</p>
                    </div>
                    {showOnlineUsers && <p className="text-sm text-subtitle font-semibold">{`(${onlineUsers.length > 0 ? onlineUsers.length - 1 : 0})`}</p>}
                </div>
            </div>

            <div className="w-full px-5">
                <hr className="w-full" />
            </div>

            {/* User List */}
            <div>
                {filteredUsers.map((users, index) => (
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
                                    <p className="font-regular text-sm text-green-500">Online</p>
                                ) : (
                                    <p className="font-regular text-sm text-subtitle">Offline</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
