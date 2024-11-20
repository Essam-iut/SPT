import { db } from "@/utils";
import { STUDENTS } from "@/utils/schema";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const result = await db.insert(STUDENTS).values({
      name: data?.name,
      grade: data?.grade,
      address: data?.address,
      contact: data?.contact,
    });

    return res.status(200).json({ success: true, result });
  }

  res.status(405).json({ error: "Method Not Allowed" });
}
