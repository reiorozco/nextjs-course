import React from "react";
import axios from "axios";

import { client } from "../../database/db";
import MeetUpDetail from "../../components/meetups/meetUpDetail";

function MeetUpDetails(props) {
  const { address, image, description, title } = props.meetUpDetail;

  return (
    <MeetUpDetail
      title={title}
      address={address}
      image={image}
      description={description}
    />
  );
}

export async function getStaticPaths() {
  await client.connect();
  const database = client.db();
  const meetupsCollection = database.collection("meetups");

  const result = await meetupsCollection
    .find({}, { projection: { _id: 1 } })
    .toArray();

  await client.close();

  return {
    paths: result.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  // Fetch data from external API
  const { meetupId } = params;

  const { data: meetUpDetail } = await axios.get(
    `http://localhost:3000/api/meetups/${meetupId}`
  );

  return {
    props: {
      meetUpDetail,
    },
  };
}

export default MeetUpDetails;
