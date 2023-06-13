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
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"></link>

      <div className="border border-3 border-success p-5 d-flex justify-content-center align-items-center box w-75">
        <div>
          <input style={{marginTop:20,marginLeft:12}} className="w-50 fs-3 mt-2 bg-transparent text-light border border-2 border-primary" type="text" name="Room" id="Room" onChange={(e)=>{setInput(e.target.value)}} />
          {props.type=="broadcaster" ? <Link href={`/broadcaster/${input}`} style={{marginBottom:2.5}} className="buttonx btn btn-outline-primary  fs-4" onClick={()=>{props.setRoomName(input)}}>Create Room</Link>: ''} 
          {props.type=="receiver" ? <Link href={`/receiver/${input}`} style={{marginBottom:2.5}} className="buttonx btn btn-outline-primary  fs-4" onClick={()=>{props.setRoomName(input)}}>Join Room</Link>:''}
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossOrigin="anonymous"></script>
    </div>
  )
}

export default Room
