
export default function MessageSkeleton() {
    return (
        <div className="w-full flex-1 flex flex-col overflow-y-scroll space-y-4 p-3 md:p-9">
            {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className={`flex w-full space-x-4 items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end' }`}>
                    <div className={`flex items-center w-fit space-x-4 ${(index + 1) % 2 === 0 ? 'flex-row-reverse gap-x-4' : '' }`}>
                        {/* User Avatar Skeleton */}
                        <div className="skeleton animate-pulse size-16 bg-mediumDark rounded-full" />

                        {/* User Info Skeleton */}
                        <div className={`flex flex-col ${(index + 1) % 2 === 0 ? 'items-end' : '' }`}>
                            <div className="skeleton animate-pulse h-4 w-32 md:w-28 lg:w-36 bg-mediumDark"></div>
                            <div className="flex items-center gap-x-2 mt-3">
                                <div className="skeleton animate-pulse h-6 w-32 md:w-52 lg:w-64 rounded-xl font-medium text-sm bg-mediumDark"></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
