import {connect, connection} from 'mongoose'

const conn = {
    isConnected: false
}

export async function connectDB() {
    if (conn.isConnected) return;

    const db = await connect(process.env.MONGO_DB_URL)
    conn.isConnected = db.connections[0].readyState;
}

connection.on('connected', () => {
    console.log("Mongoose connected")
})

connection.on('error', (err) => {
    console.log("Mongoose error:", err)
})