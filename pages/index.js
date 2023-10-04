import MeetupList from '../components/meetups/MeetupList';

// Dummy Data

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Magic Darft',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/97/Vienna_by_Sentinel-2.jpg',
    address: 'wien1',
    description: 'spass',
  },
  {
    id: 'm2',
    title: 'Carcassonne',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/97/Vienna_by_Sentinel-2.jpg',
    address: 'wien2',
    description: 'schmeckt',
  },
];

// See below, now this homepage get this page through props from belows function!!!

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// This function will be be called(pre-rendered) first with (getStaticProps), before HomePage will be called!!
// This will prepair it with all the props first until it is loaded and then return the props function!!!
// This will never be on the client site!!!
// This will always return an object!!!
// revalidate will refresh page

export function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
