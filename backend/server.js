import {app} from './app.js';
import mongoose from 'mongoose';
const PORT = process.env.PORT;

const server = app.listen(PORT,() => {
    console.log(`Server running on PORT ${PORT}..`);
})

const DB = process.env.MONGODB.replace('<password>', process.env.DATABASE_PASSWORD);

const connectDB = async() => {
    await mongoose
        .connect(DB)
        .then(() => console.group("Database Connected Succesfully!") )
        .catch(err => console.log("Error connecting database!  " + err))
}
connectDB();

import {Server as socket} from 'socket.io';

// const io = new socket(server);
const io = new socket(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on("connection",(socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('send-message', async(msg) => {
      console.log('🔥: A user send a message '+ msg);
    });
})
