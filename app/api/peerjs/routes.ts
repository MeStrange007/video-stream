// import { ExpressPeerServer } from 'peer';
// import { Server } from 'http';
// import { Server as SocketIOServer } from 'socket.io';
// import socketIO from 'socket.io';
// import { NextApiRequest, NextApiResponse } from 'next';
// import { PeerServer } from 'peer';
// import  express  from 'express';

// const app = express();
// const server = new Server(app);
// const io = new SocketIOServer(server);
// const peerServer = PeerServer({ port: 9000, path: '/peer' });

// let broadcasterStream;

// // Listen for Socket.io connections
// io.on('connection', (socket) => {
//   console.log('A user connected.');

//   // Listen for 'broadcaster' event from the broadcaster
//   socket.on('broadcaster', () => {
//     // Set the broadcaster's socket ID as the room name
//     const roomName = socket.id;

//     // Join the room
//     socket.join(roomName);

//     // Send a message to the broadcaster indicating that they are now the broadcaster
//     socket.emit('broadcaster');

//     // Listen for 'stream' event from the broadcaster
//     socket.on('stream', (stream) => {
//       // Store the broadcaster's stream
//       broadcasterStream = stream;

//       // Broadcast the stream to all viewers in the room
//       socket.to(roomName).emit('viewerStream', stream);
//     });
//   });

//   // Listen for 'viewer' event from a viewer
//   socket.on('viewer', () => {
//     // Send a message to the viewer indicating that they are now a viewer
//     socket.emit('viewer');

//     // If there is a broadcaster, send them the broadcaster's stream
//     if (broadcasterStream) {
//       socket.emit('viewerStream', broadcasterStream);
//     }
//   });

//   // Listen for Socket.io disconnections
//   socket.on('disconnect', () => {
//     console.log('A user disconnected.');
//   });
// });

// // io.on('connection', (socket) => {
// //   console.log('a user connected');

// //   socket.on('disconnect', () => {
// //     console.log('user disconnected');
// //   });

// //   socket.on('join-room', (roomId, userId) => {
// //     socket.join(roomId);
// //     socket.to(roomId).broadcast.emit('user-connected', userId);

// //     socket.on('disconnect', () => {
// //       socket.to(roomId).broadcast.emit('user-disconnected', userId);
// //     });
// //   });
// // });

// const handler = (req: NextApiRequest, res: NextApiResponse) => {
//   peerServer(req, res);
// };

// export default handler;


// // // Require necessary modules
// // const express = require('express');
// // const http = require('http');
// // const socketIO = require('socket.io');
// // const { ExpressPeerServer } = require('peer');

// // // Create an Express app and a server instance
// // const app = express();
// // const server = http.createServer(app);

// // // Create a PeerJS server instance
// // const peerServer = ExpressPeerServer(server, {
// //   debug: true
// // });

// // // Use the PeerJS server as middleware
// // app.use('/peerjs', peerServer);

// // // Serve static files from the 'public' directory
// // app.use(express.static('public'));

// // // Create a Socket.io instance and listen for connections
// // const io = socketIO(server);

// // // Define a global variable to store the broadcaster's stream
// // let broadcasterStream;

// // // Listen for Socket.io connections
// // io.on('connection', (socket) => {
// //   console.log('A user connected.');

// //   // Listen for 'broadcaster' event from the broadcaster
// //   socket.on('broadcaster', () => {
// //     // Set the broadcaster's socket ID as the room name
// //     const roomName = socket.id;

// //     // Join the room
// //     socket.join(roomName);

// //     // Send a message to the broadcaster indicating that they are now the broadcaster
// //     socket.emit('broadcaster');

// //     // Listen for 'stream' event from the broadcaster
// //     socket.on('stream', (stream) => {
// //       // Store the broadcaster's stream
// //       broadcasterStream = stream;

// //       // Broadcast the stream to all viewers in the room
// //       socket.to(roomName).emit('viewerStream', stream);
// //     });
// //   });

// //   // Listen for 'viewer' event from a viewer
// //   socket.on('viewer', () => {
// //     // Send a message to the viewer indicating that they are now a viewer
// //     socket.emit('viewer');

// //     // If there is a broadcaster, send them the broadcaster's stream
// //     if (broadcasterStream) {
// //       socket.emit('viewerStream', broadcasterStream);
// //     }
// //   });

// //   // Listen for Socket.io disconnections
// //   socket.on('disconnect', () => {
// //     console.log('A user disconnected.');
// //   });
// // });

// // // Start the server
// // server.listen(3000, () => {
// //   console.log('Server started on port 3000.');
// // });
