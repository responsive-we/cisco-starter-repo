import React,{useEffect} from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://localhost:55455');

const Pylon = ({setLatency}) => {
    useEffect(() => {
        client.onmessage = async (message) => {
            setLatency(new Date().getTime() - message.data)
        };
        //eslint-disable-next-line
    }, []);
  return (
   <></>
  )
}

export default Pylon
