'use client';

import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import io from 'socket.io-client';
import Peer from 'simple-peer';

interface videoStream {
  params: {roomName:string}
}

const VideoInterface:React.FC<videoStream> = ({params}) => {

  
  const roomName = params.roomName

  const videoPlayer = useRef<HTMLVideoElement>(null);
  // const serverUrl = process.env.SERVER_URL || "http://192.168.43.30:3000"
  const socketRef = useRef(io("https://video-stream-phti.onrender.com"))
  // const socketRef = useRef(io(serverUrl))

  const [recID,setRecID] = useState('')

  useEffect(()=>{
    const socket = socketRef.current
    socket.emit('viewer');
    socket.on("receiveID",(data)=>{
      setRecID(data.id)
      console.log("Receive ID",data.id);
      
    })
  },[])

  useEffect(() => {
    if (recID!=''){
      const video = videoPlayer.current;
      if (video == null) return;
      const socket = socketRef.current
      
      const peer = new Peer({ initiator: true, trickle: false });

      peer.on('signal',(data)=>{
      console.log("in receiver peer signal");
      console.log(recID);
      socket.emit("request-stream",({sender:recID,signal:data,to:roomName}))
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
    }
  }, [recID]);



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

export default VideoInterface;
