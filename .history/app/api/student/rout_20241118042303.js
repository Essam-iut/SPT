import { db } from "@/utils";
import { STUDENTS } from "@/utils/schema";
import { NextResponse } from "next/server";

export async function POST(req,res){
    const data = await req.json();

    const result = await db.insert(STUDENTS)
    .values({
        name:data?.name,
        grade:data?.grade,
        address:data?.address,
        contact:data?.contact,
    });

    return NextResponse.json(result);
}