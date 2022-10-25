import axios from "axios"
import IEventResponse from "./meetupevents"

const getMeetupEvents = async (): Promise<IEventResponse[] | undefined > => {
  const API_URL = "https://api.meetup.com/gql"
  const DATA = await axios.post(API_URL, {
    query: `query($groupURL: String!) {
      groupByUrlname(urlname: $groupURL) {
      name
      link
        upcomingEvents (input: {first: 5 }) {
          edges {
            node {
              dateTime
              title
              eventUrl
              id
            }
          }
        }
      }
    }`,
    variables: {
      groupURL: "tokyopythonsocietyclub"
    }
  })

  
  // response is a list of nodes, type it as IEventResponse
  const response = DATA.data.data.groupByUrlname.upcomingEvents.edges;

  if (!response) {
    console.log("Unable to obtain event information")
    return
  }

  return response
}

export { getMeetupEvents };