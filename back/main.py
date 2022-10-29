from fastapi import FastAPI, Query, HTTPException
import requests
import dotenv
from helpers.get_env_var import get_env_var

# Load FastAPI
app = FastAPI()

# Load system environment variables
dotenv.load_dotenv()

# NOTES:
# requests is a synchronous library
# use httpx for both sync and async 
# Initial qraphql query is done using requests

# "/" sends us to Hello World, just to make sure the endpoint works. We can use this as a sanity check.
@app.get("/")
def read_root():
    return {"Hello": "World"}

# GET meetup events
@app.get("/meetupevents/")
def get_meetup_events():
    """Fetch from meetup API."""
    # Fetch endpoint from .env file
    MEETUP_GRAPHQL_ENDPOINT = get_env_var("MEETUP_GRAPHQL_URL")

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
    query = {
        "query": queryString,
        "variables": { "groupURL": "tokyopythonsocietyclub"}
        }

    # Post and check response
    response = requests.post(MEETUP_GRAPHQL_ENDPOINT, json = query)

    # Success
    if response.status_code == 200:
        response = response.json()
        data = response["data"]["groupByUrlname"]
        
        GROUP_NAME = data["name"]
        GROUP_URL = data["link"]
        GROUP_EVENT_LIST = data["upcomingEvents"]["edges"]
        return {
            "groupname": GROUP_NAME,
            "groupurl": GROUP_URL,
            "groupeventlist": GROUP_EVENT_LIST
        }
    else:
        HTTPException(status_code=404, detail="Could not retrieve meetup data.")