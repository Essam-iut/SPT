import { db } from "@/utils";
import { STUDENTS } from "@/utils/schema";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

    const result = await db.insert(STUDENTS).values({
      name: data?.name,
      grade: data?.grade,
      address: data?.address,
      contact: data?.contact,
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Error inserting student:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
