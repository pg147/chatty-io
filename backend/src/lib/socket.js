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

io.on("connection", (socket) => {
    console.log("An user is connected : ", socket.id);

    // Event listener for Disconnect
    socket.on("disconnect", () => {
        console.log("The user got disconnected : ", socket.id);
    })
});

export { app, server, io };