import { db } from "@/utils";
import { STUDENTS } from "@/utils/schema";

export async function POST(req,res){
    const data = await req.json();

    const result = await db.insert(STUDENTS)
    .values({
        name:data?.name,
        grade
    })
}