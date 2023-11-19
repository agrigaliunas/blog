import { NextResponse } from "next/server";
import {connectDB} from '@/app/utils/db'
import Note from "@/app/models/Note";

export async function GET() {
    connectDB()
    const notes = await Note.find().sort({updatedAt: "desc"})
    return NextResponse.json(notes)
}

export async function POST(request) {
    connectDB()
    try {
        const data = await request.json()
        const note = new Note(data)
        const savedNote = await note.save()

        return NextResponse.json(savedNote)
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}