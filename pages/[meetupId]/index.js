import MeetupDetails from '../../components/meetups/MeetupDetail';

function MeetupDetail() {
  return (
    <MeetupDetails
      image="https://upload.wikimedia.org/wikipedia/commons/9/97/Vienna_by_Sentinel-2.jpg"
      title="First Meetup"
      address="street"
      description="first one"
    />
  );
}

// getStaticPaths, helps with pre-rendering(most used ones) and with fallback will support all paths.

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

// context will have a params key from the [meetupId], this will be the value hardcoded in the url(as an identifier)!!!

export function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/9/97/Vienna_by_Sentinel-2.jpg',
        id: meetupId,
        title: 'First Meetup',
        address: 'street',
        description: 'first one',
      },
    },
    revalidate: 1,
  };
}

export default MeetupDetail;
