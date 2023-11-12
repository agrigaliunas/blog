import Note from "@/app/models/Note";
import { connectDB } from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    connectDB()
    try {
        const note = await Note.findById(params.id)

        if (!note)
            return NextResponse.json({
        message: "Note not found"
        }, {
          status: 404,
        });
        return NextResponse.json(note)
    } catch (err) {
        return NextResponse.json(err.message, {
            status: 400,
          });
      
    }
}