// our-domain.com/new-meetUp

import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

// Accepting the data from child to parent here we create function , and pass this onAddMeetup to newMeetUpform.js in components folder. form Submission .

function newMeetUpPage() {
  async function addMeetUpHandler(enteredmeetUpData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredmeetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    // console.log(data);
  }

  return <NewMeetUpForm onAddMeetup={addMeetUpHandler} />;
}

export default newMeetUpPage;
