import React from "react";

import MeetUpList from "../components/meetups/meetUpList";

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

function HomePage() {
  return <MeetUpList meetUps={MOCK_MEETUPS} />;
}

export default HomePage;
