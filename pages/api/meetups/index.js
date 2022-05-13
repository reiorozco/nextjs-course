// /api/meetups

import { client } from "../../../database/db";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        await client.connect();
        const database = client.db();
        const meetupsCollection = database.collection("meetups");

        const result = await meetupsCollection.find().toArray();

        res.status(200).json(result);
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
      break;

    case "POST":
      // Process a POST request
      try {
        await client.connect();
        const database = client.db();

        const meetupsCollection = database.collection("meetups");

        const result = await meetupsCollection.insertOne(req.body);
        const meetup = await meetupsCollection.findOne({
          _id: result.insertedId,
        });

        res
          .status(201)
          .json({ message: "Meetup created successfully.", meetup });
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
