import React from "react";
import axios from "axios";
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
    <div>
      <NewMeetUpForm onAddMeetUp={addMeetUpHandler} />
    </div>
  );
}

export default NewMeetUpPage;
