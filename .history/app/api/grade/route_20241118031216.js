import { NextResponse } from "next/server";
import
export async function GET(req){
    const result = await db.select().from(GRADES);
    return NextResponse.json(result)
}