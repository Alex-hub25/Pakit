import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    // Try a simple command to test
    await db.command({ ping: 1 });
    console.log("✅ Connected to MongoDB!");
    res.status(200).json({ message: "Connected to MongoDB!" });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    res.status(500).json({ message: "MongoDB connection failed", error });
  }
}
