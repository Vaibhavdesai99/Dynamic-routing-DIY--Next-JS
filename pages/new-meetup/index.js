// our-domain.com/new-meetUp
import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

// Accepting the data from child to parent here we create function , and pass this onAddMeetup to newMeetUpform.js in components folder. form Submission .

function newMeetUpPage() {
  function addMeetUpHandler(enteredmeetUpData) {
    console.log(enteredmeetUpData);
  }

  return <NewMeetUpForm onAddMeetup={addMeetUpHandler} />;
}

export default newMeetUpPage;
