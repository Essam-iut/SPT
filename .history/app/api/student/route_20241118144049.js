import { db } from "@/utils";
import { STUDENTS } from "@/utils/schema";
import {  NextResponse } from "next/server";

export async function POST(req,res){
    const data = await req.json();

    const result = await db.insert(STUDENTS).values({
        name: data?.name,
        grade: data?.grade,
        contact: data?.contact,
        address: data?.address,
    });
f
    return NextResponse.json(result);
}


export async function GET(req){
    const result = await db.select().from(students);

    return NextResponse.json(result);
}