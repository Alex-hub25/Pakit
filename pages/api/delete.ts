import type { NextApiRequest, NextApiResponse } from "next"
import clientPromise from "../../lib/mongodb"
import { ObjectId } from "mongodb"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise
    const db = client.db("waitlist") // <-- use your real DB name
    const collection = db.collection("requests")

    if (req.method !== "DELETE") {
      return res.status(405).json({ message: "Method not allowed" })
    }

    const { id } = req.query
    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Missing or invalid id" })
    }

    const result = await collection.deleteOne({ _id: new ObjectId(id) })

    if (result.deletedCount === 0) {
      res.status(404).json({ message: "Record not found" })
    } else {
      res.status(204).end()
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error deleting record" })
  }
}
