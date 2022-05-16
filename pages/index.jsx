import React from "react";
import Head from "next/head";

import MeetUpList from "../components/meetups/meetUpList";
import { client } from "../database/db";

const MOCK_MEETUPS = [
  {
    id: "m1",
    title: "A First MeetUp",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Lions-Gate-Mycenae.jpg",
    address: "Some address ABC, 123 Some City",
    description: "This is a First MeetUp!",
  },

  {
    id: "m2",
    title: "A Second MeetUp",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/da/The_Parthenon_in_Athens.jpg",
    address: "Some address ABC, 123 Some City",
    description: "This is a Second MeetUp!",
  },

  {
    id: "m3",
    title: "A Third MeetUp",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/Rotunda_of_Galerius_%28February_2009%29.jpg",
    address: "Some address ABC, 123 Some City",
    description: "This is a Third MeetUp!",
  },
];

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Browse a huge of highly active React meetups!"
        />
      </Head>

      <MeetUpList meetUps={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  // Fetch data from external API

  await client.connect();
  const database = client.db();
  const meetupsCollection = database.collection("meetups");

  const result = await meetupsCollection.find().toArray();

  await client.close();

  return {
    props: {
      meetups: result.map((meetUp) => ({
        _id: meetUp._id.toString(),
        title: meetUp.title,
        image: meetUp.image,
        address: meetUp.address,
        description: meetUp.description,
      })),
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps({ req, res }) {
//   // // Fetch data from external API
//   // const res = await fetch(`https://.../data`);
//   // const data = await res.json();
//
//   // Pass data to the page via props
//   return { props: { meetups: MOCK_MEETUPS } };
// }

export default HomePage;
