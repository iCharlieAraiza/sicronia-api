/*

import express from 'express'
import path from 'path'
import http from 'http'
import cors from 'cors'
//const socketio = require('socket.io')
const PORT = 3001 || process.env.PORT
import {fileURLToPath} from 'url';

const app = express()
const server = http.createServer(app)
//const io = require('socket.io')(http, { cors: {origin: '*'}});

const __dirname = fileURLToPath(import.meta.url);


app.use(express.static(path.join(__dirname, 'public')))
app.options('*', cors())

import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
});


// Run when client connects
io.on('connection', socket => {
    console.log('New WS Connection...', 'Address:', socket.request.connection._peername.address )
    // Welcome current user
    socket.emit('message', 'Welcome to ChatCord!')
    /*
    setTimeout(() => {
        io.emit('message', 'Welcome to ChatCord!')
        //io.emit('message', {"name": "John", "age": 30, "city": "New York"});
    }, 5000);
    */
/*
    setTimeout(() => {
        socket.emit('message', 'play')
    }, 10000);


    io.on('disconnect', message => {
        io.emit('message', 'A user has left the chat')
        console.log('A user has left the chat')
    });

    // Listen for chatMessage
    socket.on('chatMessage', msg => {
        io.emit('message', msg)
        console.log(msg)
    })

})


server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

*/
/*
import { createServer } from "http";
import { Server } from "socket.io";
import express from 'express'
import {fileURLToPath} from 'url';
import path from 'path'

const app = express();
const __dirname = fileURLToPath(import.meta.url);
app.use(express.static(path.join(__dirname, 'public')))

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*'
      }
 });



io.on("connection", (socket) => {
  // 
  console.log('New WS Connection...', 'Address:', socket.request.connection._peername.address )
  socket.on("message", (msg) => {
    console.log(msg);
  });
});

httpServer.listen(3001);
*/

const app = require("express")();
const path = require("path");
const http = require("http");
const express = require("express");
app.use(express.static(path.join(__dirname, "public")));

const httpServer = require("http").createServer(app);
const options = { cors: { origin: "*" } };
const io = require("socket.io")(httpServer, options);

io.on("connection", (socket) => {
  console.log( "New WS Connection...","Address:",socket.request.connection._peername.address);
  console.log("New client connected");
  socket.emit("message", "Welcome!");
  socket.on("message", (message) => {
    console.log(message);
    if (message == "active") {
      io.emit("message", "active");
    }
  });
});

httpServer.listen(3001);
