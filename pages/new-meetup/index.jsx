import React from "react";

import NewMeetUpForm from "../../components/meetups/newMeetUpForm";

function NewMeetUpPage() {
  let addMeetUpHandler = (enteredMeetUpData) => {
    console.log(enteredMeetUpData);
  };

  return (
    <div>
      <NewMeetUpForm onAddMeetUp={addMeetUpHandler} />
    </div>
  );
}

export default NewMeetUpPage;
