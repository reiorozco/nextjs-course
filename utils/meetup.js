import { client } from "../database/db";
import { ObjectId } from "mongodb";

export async function getMeetUps(meetupId = null) {
  let result;
  await client.connect();
  const database = client.db();
  const meetupsCollection = database.collection("meetups");

  if (meetupId) {
    result = await meetupsCollection.findOne({
      _id: new ObjectId(meetupId),
    });
  } else {
    result = await meetupsCollection.find().toArray();
  }

  await client.close();

  return result;
}
