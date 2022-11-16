# Tokyo Python Society Site - Overview Proposal

## Tools Used in Development

Language: Python 3.10  
Libraries: FastAPI  
Database: Postgres (version to be determined) (10/29 currently not in use, installation not required)
Formatter: Black 22.8.0
Testing: PyTest
Front: JavaScript, Reactjs, Nextjs

## Frontend
The frontend is compiled and bundled with Nextjs from a barebones template design. 

For more information for design decisions and implementation please see `front/README.md`

## Branch Information

- main
As of 10/29 we are committing directly to main, as the content is not yet ready to be opened up to the public to be worked on.

- production  
This is the production branch. Changes to this branch will ultimately affect the live site.
10/22: As of now, there is no production branch. It will not be ready until the site is at least somewhat presentable

- dev  
This is the development branch. Changes to this branch are local. 

## Setting Up the Environment (Back)

1. Install Python 3.10

2. Create a virtual environment to install dependencies. 
*I recommend venv as it is packaged with python.*
(venv documentation here https://docs.python.org/3/library/venv.html)

```
Example using venv (Windows)

$ python -m venv venv
$ source venv/Scripts/activate

Example using venv (MacOS/Linux)

$ python -m venv venv
$ source venv/bin/activate

```

After the above two lines, you should see (venv) or something similar in your terminal. 

3. While inside your virtual environment, run `pip install -r requirements.txt`

This will install everything needed to get the backend running. The core app consists of:
- Pytest
- FastAPI
- uvicorn
- psycopg2
- sqlmodel
- dotenv
- requests

Everything else seen in requirements.txt are dependencies of the above.

3. Install the appropriate code formatter. See `Tools` above for the formatter we use. 

4. Set an .env file. The app will not run without this. It is not stored in source control for security reasons. Please see `back/readme.md` for more information.

## Running the App (Backend)

`uvicorn main:app --reload`

## Checking to see that the app works as intended (Back)

Please complete the above steps before moving here.

Visit `http://127.0.0.1:8000` and you should see {"Hello": "World"} as a JSON response. If you do not, please ask the Python Society group for troubleshooting help.

If you have gotten this far, then your backend has been set up for development.

## Seeing the endpoints

`http://127.0.0.1:8000/docs`

^ Provided by Swagger UI

## Alternative API docs

`http://127.0.0.1:8000/redoc`




## Setting Up the Environment (Front)
Create a .env.local file at `/front` and add `MEETUP_URL=http://localhost:8000` to the environment file. 

The app will not work without being able to access the MEETUP_URL endpoint. 

From the /front directory run `npm install`

## Running the App (Front)
For development, run `npm run dev`

Then visit `http://localhost:3000` and verify that the page successfully loads. 

The frontend and backend are successfully connected if there is meetup event information at the bottom of the page. 