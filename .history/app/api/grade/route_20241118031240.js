import { NextResponse } from "next/server";
import { GRADES } from "@/utils/schema";
inport db
export async function GET(req){
    const result = await db.select().from(GRADES);
    return NextResponse.json(result)
}