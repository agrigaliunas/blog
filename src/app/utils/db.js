import {connect, connection} from 'mongoose'

const conn = {
    isConnected: false
}

export async function connectDB() {
    if (conn.isConnected) return;

    const db = await connect('mongodb://localhost:27017/blog')
    conn.isConnected = db.connections[0].readyState;
}

connection.on('connected', () => {
    console.log("Mongoose connected")
})

connection.on('error', (err) => {
    console.log("Mongoose error:", err)
})