import { NextResponse } from "next/server";

export async function GET(req){
    const result = await db.select().from(GRADES);
    return new NextResponse(result);
}