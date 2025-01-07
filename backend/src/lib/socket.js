import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express(); // initialized express app
const server = http.createServer(app);  // created a HTTP Server for app

// Initialized new Socket Server
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:5173']
    }
});

// For maintaing online users
const userSocketMap = {} // {userId (key) : socketId (value)}

io.on("connection", (socket) => {
    console.log("An user is connected : ", socket.id);
    
    const userId = socket.handshake.query.userId; // extracting userId from Client Query
    if (userId) userSocketMap[userId] = socket.id; // updating in userSocketMap

    // io.emit broadcasts events to all Socket Connected users
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    // Event listener for Disconnect
    socket.on("disconnect", () => {
        console.log("The user got disconnected : ", socket.id);

        // Removing the user from map when disconnected
        delete userSocketMap[userId];

        // Updating the Socket Map after disconnection
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
});

export { app, server, io };