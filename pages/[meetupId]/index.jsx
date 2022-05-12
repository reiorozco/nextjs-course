import React from "react";

import MeetUpDetail from "../../components/meetups/meetUpDetail";

const MOCK_DETAIL = {
  id: "m1",
  title: "A First MeetUp",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/2/25/Lions-Gate-Mycenae.jpg",
  address: "Some address ABC, 123 Some City",
  description: "This is a First MeetUp!",
};

function MeetUpDetails(props) {
  const { address, image, description, title } = props.meetups;

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
  return {
    paths: [
      { params: { meetupId: "m1" } },
      { params: { meetupId: "m2" } },
      { params: { meetupId: "m3" } },
    ],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  // Fetch data from external API

  const { meetupId } = params;
  console.log(meetupId);

  return {
    props: {
      meetups: MOCK_DETAIL,
    },
  };
}

export default MeetUpDetails;
