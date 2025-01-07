// React imports
import { useState, useRef } from "react";

// React hot toast
import toast from "react-hot-toast";

// Global Imports
import { useChatStore } from "../store/useChatStore";

// Icon Library
import { LucideImagePlus, LucideKeyboard, LucideSend, X } from "lucide-react";

export default function MessageInputs() {
    const [text, setText] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);

    const { sendMessage } = useChatStore();

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        // If file isn't an image
        if (!file.type.startsWith("image/")) {
            toast.error("Please select a valid image!");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };

        reader.readAsDataURL(file);
    }

    const handleRemoveImage = () => {
        setImagePreview(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    }

    const handleSendMessage = async (e) => {
        e.preventDefault(); // preventing reload

        // If no text or no image exist
        if (!text.trim() && !imagePreview) return;

        try {
            await sendMessage({
                text: text.trim(),
                image: imagePreview
            });

            // Clear form after submission
            setText("");
            setImagePreview(null);
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (error) {
            console.error("Error sending message : ", error);
            toast.error("Error sending message!");
        }
    }

    return (
        <div className="w-full">
            {/* Image Preview */}
            {imagePreview && (
                <div className="size-fit relative mx-5 my-2">
                    <img
                        src={imagePreview}
                        alt="image_preview"
                        className="size-24 rounded-2xl"
                    />
                    <button
                        onClick={handleRemoveImage}
                        className="absolute -right-2 -top-3 bg-primary p-1 size-fit rounded-full"
                    >
                        <X className="text-white size-5" />
                    </button>
                </div>
            )}

            {/* User Inputs */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-2 border-stroke">
                <div className="flex items-center gap-x-3 w-full">
                    {/* Textfield */}
                    <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-6 flex items-center">
                            <LucideKeyboard className="text-primary size-5" />
                        </div>
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Type a message"
                            className="w-full h-12 pl-14 pr-4 border border-stroke rounded-full outline-primary bg-light/50"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-x-2">
                        {/* Attach Image Button */}
                        <input
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="hidden"
                            ref={fileInputRef}
                        />
                        <button
                            type="button"
                            className="hidden sm:flex items-center justify-center size-12 bg-light hover:bg-mediumDark/40 border border-stroke rounded-full"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <LucideImagePlus className="text-primary size-5" />
                        </button>

                        {/* Send Button */}
                        <button
                            type="submit"
                            disabled={!text.trim() && !imagePreview}
                            className="flex items-center justify-center size-12 bg-primary/10 hover:bg-primary/15 rounded-full disabled:opacity-50"
                        >
                            <LucideSend className="text-primary size-5" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
