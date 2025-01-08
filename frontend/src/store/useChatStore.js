import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from './useAuthStore';
import toast from "react-hot-toast";

export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

    getUsers: async () => {
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get('/messages/users');
            set({ users: res.data });
        } catch (error) {
            console.log("Error fetching users : ", error.message);
            toast.error(error.response.data.message);
        } finally {
            set({ isUsersLoading: false });
        }
    },

    getMessages: async (userId) => {
        set({ isMessagesLoading: true });
        try {
            const res = await axiosInstance.get(`/messages/${userId}`);
            set({ messages: res.data });
        } catch (error) {
            console.log("Error loading messages : ", error.message);
            toast.error(error.response.data.message);
        } finally {
            set({ isMessagesLoading: false });
        }
    },

    sendMessage: async (message) => {
        const { messages, selectedUser } = get(); // getter method to access properties
        try {
            const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, message);
            set({ messages: [...messages, res.data] });
        } catch (error) {
            console.log("Error sending message : ", error.message);
            toast.error(error.response.data.message);
        }
    }, 

    subscribeToMessages: () => {
        const { selectedUser } = get();
        if (!selectedUser) return; // no need to update array if no user is selected
        
        const socket = useAuthStore.getState().socket; // from Auth Global State

        socket.on("newMessage", (message) => {
            set({ messages: [...get().messages, message]}); 
        });
    },

    unsubscribeToMessages: () => {
        const socket = useAuthStore.getState().socket; // from Auth Global State
        socket.off("newMessage");
    },

    setSelectedUser: (user) => set({ selectedUser: user }),

}));