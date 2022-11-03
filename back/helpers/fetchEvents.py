from helpers.fetchEnvironmentVar import fetchEnv
import requests
from fastapi import HTTPException
from datetime import datetime


# global cache
CACHE = {}


def fetchEventsFromServer(MEETUP_GRAPHQL_ENDPOINT):
    """queries meetup API for events
    returns
            "groupname": string,
            "groupurl": string,
            "groupeventlist": List[event]
    """
    # Construct query string
    queryString = """
    query($groupURL: String!) {
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
    }
    """

    # Meetup API is graphql; query and variables must be posted to API
    query = {"query": queryString, "variables": {"groupURL": "tokyopythonsocietyclub"}}

    # Post and check response
    response = requests.post(MEETUP_GRAPHQL_ENDPOINT, json=query)

    # Success
    if response.status_code == 200:
        response = response.json()
        data = response["data"]["groupByUrlname"]

        if not data:
            raise HTTPException(
                status_code=404,
                detail="MeetupAPI status was 200, but no data received. Check query parameters",
            )

        GROUP_NAME = data["name"]
        GROUP_URL = data["link"]
        GROUP_EVENT_LIST = data["upcomingEvents"]["edges"]
        return {
            "groupname": GROUP_NAME,
            "groupurl": GROUP_URL,
            "groupeventlist": GROUP_EVENT_LIST,
        }
    else:
        raise HTTPException(
            status_code=404,
            detail="MeetupAPI did not have 200 status, could not retrieve data.",
        )


def fetchEvents(force=False):
    """fetchEvents returns a cache of stored events if NUMBER_OF_SECONDS has not passed since the last fetch
    if no data is cached, it will perform a network request for meetup data then cache it
    force: if set to True, fetchEvents will cache the latest version of data
    """

    if ("date" in CACHE) and (force == False):
        NUMBER_OF_SECONDS = 86400  # seconds in 24 hours
        requestTime = datetime.today()
        cachedTime = CACHE["date"]
        # less than 1 day has passed
        if (requestTime - cachedTime).total_seconds() < NUMBER_OF_SECONDS:
            return CACHE["data"]

    # at least NUMBER_OF_SECONDS has passed, or force flag has been set to True
    else:
        print("fetching meetup events...")
        CACHE["date"] = datetime.today()
        ENDPOINT = fetchEnv("MEETUP_GRAPHQL_URL")
        CACHE["data"] = fetchEventsFromServer(ENDPOINT)
        return CACHE["data"]
