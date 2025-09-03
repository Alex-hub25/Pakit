import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, timestamp } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db("waitlist");
    const collection = db.collection("requests");

    const result = await collection.insertOne({ name, email, message, timestamp });

    res.status(201).json({
      message: "Record created successfully",
      data: { _id: result.insertedId, name, email, message, timestamp },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating record" });
  }
}



