// 'use client';

// import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";



// const File = () => {

//   const canvasPlayer = useRef<HTMLCanvasElement>(null)
//   const videoPlayer = useRef<HTMLVideoElement>(null)

//   const [src,setSrc] = useState('');
//   const [ctx,setCtx] = useState();
  
//   const selectObject = useCallback( (e: ChangeEvent<HTMLInputElement>) => {    
//     e.target.files ? setSrc(URL.createObjectURL(e.target.files[0])):''
//   },[src])

//   useEffect(() => {
//     const canvas = canvasPlayer.current;
//     if (canvas==null) return;
//     const ctx = canvas.getContext("2d");
//     if (ctx==null) return
//     const video = videoPlayer.current;
//     if (video==null) return
//     canvas.width = video.videoWidth
//     canvas.height = video.videoHeight
//     const drawFrame = () => {
//       if (!video.paused && !video.ended) {
//         ctx.drawImage(video, 0, 0); 
//         setTimeout(drawFrame, 1000 / 30); // drawing at 30fps
//       }
//     };
//     video.addEventListener("play", function () {
//       drawFrame();
//     });
//   }, []);
  
//   return (
//     <div>
//       <input type="file" onChange={(e)=>{selectObject(e)}} />
//       <video ref={videoPlayer} style={{display:"none"}} muted src={src} autoPlay />
//       <canvas ref={canvasPlayer} style={{zIndex:1}}/>
//     </div>
//   )
// }

// export default File

'use client';

import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

const File = () => {
  const canvasPlayer = useRef<HTMLCanvasElement>(null);
  const videoPlayer = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState("");

  const selectObject = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.target.files ? setSrc(URL.createObjectURL(e.target.files[0])) : "";
  }, []);

  useEffect(() => {
    const canvas = canvasPlayer.current;
    if (canvas == null) return;
    const ctx = canvas.getContext("2d");
    if (ctx == null) return;
    const video = videoPlayer.current;
    if (video == null) return;

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
  }, []);

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

export default File;
