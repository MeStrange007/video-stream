'use client';

import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import io from 'socket.io-client';
import Peer from 'simple-peer';
import Room from "../Components/room";

const Receiver = () => {
  const [roomName,setRoomName] = useState("")

  return (
    <Room type="receiver" setRoomName={setRoomName}/>
  )
};

export default Receiver;
