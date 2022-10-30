## Developer Notes

IMPORTANT

Before working in on the app:

Make .env file in this directory (`back`) and add the following: 

MEETUP_GRAPHQL_URL="https://api.meetup.com/gql"

.env is not saved into source control for security purposes.

## Running the App

From `/back`:

`uvicorn main:app --reload`

You should see an output similar to the below

```
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [20392] using WatchFiles
INFO:     Started server process [2332]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

## Verifying that the app is running successfully

Visit `http://127.0.0.1:8000/` and check that the response code is `200`

