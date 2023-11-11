import { NextResponse } from "next/server";
import {connectDB} from '@/app/utils/db'

export function GET() {
    connectDB();
    return NextResponse.json({
        message: "ping pong"
    })
}