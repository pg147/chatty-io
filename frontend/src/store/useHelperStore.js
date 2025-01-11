import { create } from "zustand";

export const useHelperStore = create((set) => ({
    isChatOpen: false,

    setChatOpen: () => {
        set({ isChatOpen: true });
    },

    closeChat: () => {
        set({ isChatOpen: false });
    }
}))