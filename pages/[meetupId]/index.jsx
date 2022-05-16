import React from "react";
import Head from "next/head";

import MeetUpDetail from "../../components/meetups/meetUpDetail";
import { client } from "../../database/db";
import { getMeetUps } from "../../utils/meetup";

function MeetUpDetails(props) {
  const { address, image, description, title } = props.meetUpDetail;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
      </Head>

      <MeetUpDetail
        title={title}
        address={address}
        image={image}
        description={description}
      />
    </>
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
    fallback: "blocking", // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  // Fetch data from external API
  const { meetupId } = params;
  const meetUp = await getMeetUps(meetupId);

  return {
    props: {
      meetUpDetail: {
        _id: meetUp._id.toString(),
        title: meetUp.title,
        image: meetUp.image,
        address: meetUp.address,
        description: meetUp.description,
      },
    },
  };
}

export default MeetUpDetails;
