import { LucideUsersRound } from "lucide-react";

export default function SidebarSkeleton() {
    return (
        <div className="grid gap-y-6 py-6">
            {/* Headers */}
            <div className="px-6">
                <div className="flex items-center gap-x-2.5">
                    <LucideUsersRound className="size-6 text-primary" />
                    <p className="font-semibold text-lg">Contacts</p>
                </div>
            </div>

            {/* User List Skeleton */}
            <div>
                {Array.from({ length : 9 }).map((_, index) => (
                    <div key={index} className="px-6 py-5">
                        <div className="flex gap-x-5 items-center">
                            {/* User Avatar Skeleton */}
                            <div className="skeleton animate-pulse size-12 bg-mediumDark rounded-full" />
                            
                            {/* User Info Skeleton */}
                            <div>
                                <div className="skeleton animate-pulse h-3 md:w-16 lg:w-24 bg-mediumDark"></div>
                                <div className="flex items-center gap-x-2 mt-3">
                                    <div className="skeleton animate-pulse h-3 md:w-20 lg:w-32 rounded-xl font-medium text-sm bg-mediumDark"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
