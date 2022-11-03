from fastapi import FastAPI, Query, HTTPException
from helpers.fetchEvents import fetchEvents
from helpers.fetchEnvironmentVar import fetchEnv
from fastapi.middleware.cors import CORSMiddleware
import dotenv

app = FastAPI()
origins = ["http://localhost:3000", "http://localhost"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load environment variables to be accessed globally
dotenv.load_dotenv()

# Check app runs by visiting "/"
@app.get("/")
def read_root():
    return {"Hello": "World"}


# GET meetup events
@app.get("/meetupevents")
def get_meetup_events():
    """Fetch from meetup API."""
    return fetchEvents()
