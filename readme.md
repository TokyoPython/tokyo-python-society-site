# Tokyo Python Society Site - Overview Proposal

# Getting Started

## Requirements:

Python 3.10  
NodeJS v14.15.0 and npm

# Setting up the Backend

## Step 1

Clone repository

`git clone git@github.com:TokyoPython/tokyo-python-society-site.git`

## Step 2

Create Python virtual environment within the project root directory

```bash
$ cd tokyo-python-society-site

# Windows

$ python -m venv venv
$ source venv/Scripts/activate

# MacOS/Linux

$ python -m venv venv
$ source venv/bin/activate
```

If this succeeds, you should see (venv) or an indicator that you are in a virtual environment.

## Step 3 - Install Dependencies

`pip install -r requirements.txt`

## Step 4 - Set Environment Variables

In the same `back` directory, create an `.env` file and put environment variables into it. The bare minimum you will need to place inside of it is:

```bash
MEETUP_GRAPHQL_URL="https://api.meetup.com/gql"
```

## Step 5 - Check that the backend runs successfully

In `back`, run the command `uvicorn main:app --reload`

Side note: as the project grows, we may want to add other flags or commands to the above command. In order to avoid having to remember the command, there is also a `run.sh` script that can also optionally be run instead of `uvicorn main:app --reload`

Visit [http://127.0.0.1:8000/](http://127.0.0.1:8000/) from a browser or send a get request to the above URL. If you get a response with data

```bash
{
Hello: "World"
}
```

You have successfully got the backend up and running. You may now begin contributing to the backend.

# Setting up the Frontend

## Step 1 - Install Front Dependencies

Move to the front directory and run `npm install`

```bash
$ cd front
$ npm install
```

This will produce a `node_modules` directory with all dependencies. 

## Step 2 - Run the project in dev mode

`npm run dev`

To check that the project runs successfully, go to [`http://localhost:3000/`](http://localhost:3000/)

## Finished

The frontend and backend are successfully connected if there is meetup event information at the bottom of the page. It should be viewable even if you are running both the back and frontend locally.

You are now ready to begin developing on this project.

The `production` branch is the live production version of the site. When making changes and adding features, be sure to create a branch from `production`.

## Extra Information

## Tools Used in Development

Language: Python 3.10  
Libraries: FastAPI  
Database: Postgres (version to be determined) (10/29 currently not in use, installation not required)
Formatter: Black 22.8.0
Testing: PyTest
Front: JavaScript, Reactjs, Nextjs

## Frontend
The frontend is compiled and bundled with Nextjs from a barebones template design. 

## Branch Information

- production  
This is the production branch. Changes to this branch will ultimately affect the live site. It is currently locked down and must be modified via pull requests. A PR will trigger a github actions CI CD script where a build test happens. If build succeeds, merging to production is possible. Upon merge, another CI CD script takes the production bundle and uploads it to the live server. 

- dev
As of 11/16/2022 there is no staging environment. I suppose the site won't get so complicated as to need both staging and production, however, things may change in the near future depending on how we want to evolve the web application.

## Viewing the endpoints

`http://127.0.0.1:8000/docs`


## Alternative API docs

`http://127.0.0.1:8000/redoc`
