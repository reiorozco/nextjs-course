// /api/meetups/[meetupId]
import { ObjectId } from "mongodb";

import { client } from "../../../database/db";

export default async function handler(req, res) {
  const {
    query: { meetupId },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        await client.connect();
        const database = client.db();
        const meetupsCollection = database.collection("meetups");

        const meetup = await meetupsCollection.findOne({
          _id: new ObjectId(meetupId),
        });

        res.status(200).json(meetup);
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }

      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
