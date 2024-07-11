import React, { useEffect }  from 'react'
import socketIO from 'socket.io-client';
import Search from './Search';

export default function InstantMessaging() {
    useEffect(() => {
        const socket = socketIO.connect('http://localhost:8080');
        
        socket.emit('send-message', "Hello world");

        return () => {
            socket.disconnect()
        };
    }, []);
  return (
    <div>
        <h1>Instant Messaging</h1>
        <Search />
        
    </div>
  )
}
