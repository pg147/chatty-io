import { LucideImagePlus, LucideKeyboard, LucideSend } from "lucide-react";

export default function MessageInputs() {
    return (
        <div className="fixed bottom-0 flex gap-x-5 w-full bg-white border-2 border-stroke p-4">
            {/* Textfield */}
            <div className="relative w-[70%]">
                <div className="absolute inset-y-0 flex items-center pl-5">
                    <LucideKeyboard className="text-primary size-5" />
                </div>
                <input
                    type="text"
                    placeholder="Type a message"
                    className="h-14 w-full pl-12 border-2 outline-primary border-stroke rounded-2xl"
                />
            </div>

            {/* More */}
            <div className="flex items-center gap-x-5 w-[30%]">
                {/* Attach Image Button */}
                <label className="size-14 flex items-center justify-center bg-light hover:bg-mediumDark/40 cursor-pointer border-2 border-stroke rounded-xl">
                    <LucideImagePlus className="text-primary size-5" />
                    <input
                        type="file"
                        accept="images/*"
                        className="hidden"
                    />
                </label>

                {/* Send Button */}
                <button className="size-14 flex items-center justify-center bg-primary/10 hover:bg-primary/15 cursor-pointer rounded-xl">
                    <LucideSend className="text-primary size-5" />
                </button>
            </div>
        </div>
    )
}
