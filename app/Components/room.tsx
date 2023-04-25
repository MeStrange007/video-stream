import React, { Dispatch, SetStateAction, useState } from 'react'
import Link from 'next/link'

interface RoomProps {
  setRoomName: Dispatch<SetStateAction<string>>,
  type: string
}

const Room: React.FC<RoomProps> = (props:RoomProps) => {

  const [input,setInput] = useState("")

  return (
    <div>
      <label htmlFor="Room">Room Name</label>
      <input type="text" name="Room" id="Room" onChange={(e)=>{setInput(e.target.value)}} />
      {props.type=="broadcaster" ? <Link href={`/broadcaster/${input}`} onClick={()=>{props.setRoomName(input)}}>Create Room</Link>: ''} 
      {props.type=="receiver" ? <Link href={`/receiver/${input}`} onClick={()=>{props.setRoomName(input)}}>Create Room</Link>:''}
    </div>
  )
}

export default Room
