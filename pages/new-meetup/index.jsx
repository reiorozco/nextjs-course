import React from "react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

import NewMeetUpForm from "../../components/meetups/newMeetUpForm";

function NewMeetUpPage() {
  const router = useRouter();

  const addMeetUpHandler = async (enteredMeetUpData) => {
    try {
      const { data: newMeetUp } = await axios.post(
        "/api/meetups",
        enteredMeetUpData
      );

      console.log(newMeetUp);

      await router.push("/");
    } catch (e) {
      console.log("Error in addMeetUpHandler: " + e.message);
    }
  };

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>

      <NewMeetUpForm onAddMeetUp={addMeetUpHandler} />
    </>
  );
}

export default NewMeetUpPage;
