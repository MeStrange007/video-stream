'use client';

import { ChangeEvent, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'

import io from 'socket.io-client';
import Peer from 'simple-peer';
// import { roomContext } from "../Context";

interface videoStream {
  params: {roomName:string}
}

const VideoInterface:React.FC<videoStream> = ({params}) => {

  
  const roomName = params.roomName

  // const {room,setRoom} =  useContext(roomContext)
  const canvasPlayer = useRef<HTMLCanvasElement>(null);
  const videoPlayer = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState("");
  // const [socket,setSocket] = useState()
  const selectObject = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.target.files ? setSrc(URL.createObjectURL(e.target.files[0])) : "";
  }, []);

  // const serverUrl = process.env.SERVER_URL || "http://localhost:3000"
  const socketRef = useRef(io("https://video-stream-phti.onrender.com"))
  // const socketRef = useRef(io(serverUrl))
  // var Audctx = new AudioContext
  // var dst = Audctx.createMediaStreamDestination();


  useEffect(() => {
    // console.log(process.env.SERVER_URL)
    const canvas = canvasPlayer.current;
    if (canvas == null) return;
    const ctx = canvas.getContext("2d");
    if (ctx == null) return;
    const video = videoPlayer.current;
    if (video == null) return;
    // navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    //   .then((stream)=>{
    //     video.srcObject = stream
    //     video.play()
    //     console.log({stream,src});
    //     video.onplaying = () => {
    //       socket.emit("stream",{stream,src})
    //     }
        
      // })

    const audioCtx = new AudioContext();  
    var destination:MediaStreamAudioDestinationNode;
    var source:MediaElementAudioSourceNode;
    
    video.addEventListener("loadedmetadata", () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const drawFrame = () => {
        if (!video.paused && !video.ended) {
          ctx.drawImage(video, 0, 0);
          setTimeout(drawFrame, 1000 / 30); // drawing at 30fps
        }
      };
      video.addEventListener("play", drawFrame);
      video.play();
    });
    video.onplaying = () => {
      const socket = socketRef.current   
      destination = audioCtx.createMediaStreamDestination();
      source = audioCtx.createMediaElementSource(video);
      source.connect(destination);
      const canvasStream = canvas.captureStream();
      const audioStream = destination.stream;
      // canvasStream.addTrack(audioStream.getTracks()[0])
      const stream = new MediaStream([...canvasStream.getTracks(), ...audioStream.getTracks()]);
      // const stream = canvasStream
      // var stream = canvas.captureStream()
      socket.emit('broadcaster',roomName);
      socket.on("send-stream",(request)=>{
        console.log("In broadcaster send-stream");
        const peer = new Peer({ initiator: false, trickle: false, stream });
        peer.on('signal', (data) => {
          console.log("In broadcaster peer signal");
          console.log("Sending: ",data);
          socket.emit('stream', { signal: data, to: request.sender });
        });
        peer.signal(request.signal)
      })
    }
  }, [src]);



  return (
    
    <div>
      <input type="file" onChange={(e) => selectObject(e)} />
      <video
        ref={videoPlayer}
        src={src}
        autoPlay
        controls
      />
      <canvas style={{ display: "none" }} ref={canvasPlayer} />
    </div>
  );
};

export default VideoInterface;
