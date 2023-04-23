'use client';

import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import io from 'socket.io-client';
import Peer from 'simple-peer';

const File = () => {
  const videoPlayer = useRef<HTMLVideoElement>(null);
  const serverUrl = process.env.SERVER_URL || "http://192.168.43.30:3000"
  const socketRef = useRef(io('http://192.168.43.30:3000'))

  useEffect(() => {
    const video = videoPlayer.current;
    if (video == null) return;
    const socket = socketRef.current
    // socket.emit('viewer');
    const peer = new Peer({ initiator: true, trickle: false });

    peer.on('signal',(data)=>{
      console.log("in receiver peer signal");
      
      socket.emit("request-stream",({sender:socket.id,signal:data}))
    })
    
    peer.on('stream',(currentStream)=>{
      console.log("In receiver peer stream");
      console.log(currentStream);
      
      video.srcObject = currentStream
      video.play()
    })

    socket.on("recieve-stream",(data)=>{
      console.log("In receiver receive-stream");
      
      peer.signal(data);
    })

    // socket.on('viewerStream', (stream) => {
    //     console.log(stream);
        
    //     video.srcObject = stream;
    //     video.play();
    // });
  }, []);



// // Get the user's media stream
// navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//   .then((stream) => {
//     // Send the stream to the server
//     socket.emit('broadcaster');

//     // Display the stream in the local video element
//     const localVideo = document.getElementById('local-video');
//     localVideo.srcObject = stream;
//     localVideo.play();

//     // Broadcast the stream to viewers
//     socket.emit('stream', stream);
//   })
//   .catch((err) => {
//     console.error('Error accessing media devices:', err);
//   });

  return (
    <div>
      <video
        ref={videoPlayer}
        style={{"width":"100vh","height":"100vh"}}
      />
    </div>
  );
};

export default File;
