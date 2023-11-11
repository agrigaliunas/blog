import { NextResponse } from "next/server";

export function GET(request, {params}) {
    return NextResponse.json({
        message: `Obtained note ${params.id}`
    })
}

export function DELETE(request, {params}) {
    return NextResponse.json({
        message: `Deleted note ${params.id}`
    })
}

export function UPDATE(request, {params}) {
    return NextResponse.json({
        message: `Updated note ${params.id}`
    })
}