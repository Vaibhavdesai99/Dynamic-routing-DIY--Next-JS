import MeetUpList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://images.unsplash.com/photo-1520330979108-7d66e04b35e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    address: "Some address 5 ,123 , NY CITY",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    address: "Some address 10th street  ,789 , W DC",
    description: "This is a second  meetup",
  },
];

function HomePage(props) {
  return (
    <>
      <MeetUpList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  // fetch data from API
  //  return must Object
  // must have props property
  // this props we need in HomePage as props.
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 5,
  };
}

// ========  getServerSideProps()============>>

// serverSideProp guranteed us to run at every req
// This function run on the server after deployment

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from API
//   // Any code we write here run on server not on client

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
