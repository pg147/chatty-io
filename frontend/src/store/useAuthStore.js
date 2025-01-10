// Zustand Global State
import { create } from 'zustand';

// Axios Instance Function
import { axiosInstance } from '../lib/axios';

// React Hot Toast
import toast from 'react-hot-toast';

// Socket.io
import { io } from 'socket.io-client';

const BASE_URL = import.meta.env.VITE_NODE_ENV === 'development' ? 'http://localhost:5001' : '/';

export const useAuthStore = create((set, get) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,
    onlineUsers: [],
    socket: null,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get('/auth/check');
            set({ authUser: res.data });

        } catch (error) {
            console.log('Error in checkAuth : ', error);
            set({ authUser: null });

        } finally {
            set({ isCheckingAuth: false })
        }
    },

    signUp: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post('/auth/signup', data);
            set({ authUser: res.data });
            toast.success("Account created successfully!");
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isSigningUp: false });
        }
    },

    login: async (data) => {
        set({ isLoggingIn: true });
        try {
            const res = await axiosInstance.post('/auth/login', data);
            set({ authUser: res.data });

            get().connectSocket();
            toast.success("Logged in successfully!");
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isLoggingIn: false });
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post('/auth/logout');
            set({ authUser: null });

            get().disconnectSocket();
            toast.success("Logged out successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },

    updateProfileImage: async (image) => {
        set({ isUpdatingProfile: true });

        try {
            const res = await axiosInstance.put('/auth/update-profile', image);
            set({ authUser: res.data });
            toast.success("Image updated successfully !");
        } catch (error) {
            console.log("Error updating image : ", error.message);
            toast.error(error.response.data.message);
        } finally {
            set({ isUpdatingProfile: false });
        }
    },

    connectSocket: () => {
        const { authUser } = get();

        // if user isn't authenticated or socket already established, return
        if (!authUser || get().socket?.connected) return;

        const socket = io(BASE_URL, {
            query: { userId: authUser._id } // passing userId as a query to Socket
        });

        socket.connect();
        set({ socket: socket }); // setting socket state on successful connection

        socket.on("getOnlineUsers", (userIds) => {
            set({ onlineUsers: userIds });
        });
    },

    disconnectSocket: () => {
        if (get().socket?.connected) get().socket.disconnect();
        set({ socket: null });
    }
}));