import type { NextApiRequest, NextApiResponse } from "next"
import clientPromise from "../../lib/mongodb"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise
    const db = client.db("waitlist") // <-- change to your real DB name
    const collection = db.collection("requests")

    // Fetch all documents
    const records = await collection.find({}).toArray()

    res.status(200).json(records)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error retrieving records" })
  }
}
