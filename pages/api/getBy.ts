import type { NextApiRequest, NextApiResponse } from "next"
import clientPromise from "../../lib/mongodb"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise
    const db = client.db("waitlist") // <-- your DB name
    const collection = db.collection("requests")

    const { to } = req.query

    if (!to || typeof to !== "string") {
      return res.status(400).json({ message: "Missing or invalid 'to' parameter" })
    }

    const record = await collection.findOne({ to })

    if (!record) {
      res.status(404).json({ message: "Request not found" })
    } else {
      res.status(200).json(record)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error retrieving record" })
  }
}
