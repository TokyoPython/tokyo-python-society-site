import axios from "axios"
import { AppConfig } from "./AppConfig"

const getMeetupEvents = async () => {
  const API_URL = AppConfig.API.MEETUP_URL

  if (!API_URL) {
    console.log(`Could not get API URL: ${API_URL}, check env variables`)
    return
  }

  // response is a list of nodes, type it as IEventResponse
  const response = axios.get(`${API_URL}/meetupevents`);

  return response
}

export { getMeetupEvents };