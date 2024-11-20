export async function POST(req,res){
    const data = await req.json();

    const result = await db.insert(STUDENT)
    
}