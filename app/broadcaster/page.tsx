'use client';

import React, { useState } from 'react'
import Room from '../Components/room'

const Broadcaster = () => {

  const [roomName,setRoomName] = useState("")

  return (
    <Room type="broadcaster" setRoomName={setRoomName}/>
  )
}

export default Broadcaster
