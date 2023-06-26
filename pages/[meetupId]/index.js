import MeetupDetail from "../../components/meetups/MeetUpDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      title="A First Meetup"
      address="Some Street , NY CITY"
      description="The meetup description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //  fetch data for single meetup

  const meetupId = context.params.meetupId;

  // console.log(meetupId); we see this console on terminal(developer server)  = >  not on browser caz the code between getStaticProps() run during built time
  return {
    props: {
      meetupData: {
        image:
          "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",

        id: meetupId,
        title: "A First Meetup",
        address: "Some Street , NY CITY",
        description: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
