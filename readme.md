# Tokyo Python Society Site - Overview Proposal

## Tools Used in Development
Language: Python 3.10  
Libraries: FastAPI  
Database: Postgres (version to be determined)  
Formatter: Black 22.8.0  
Testing: PyTest  

## Branch Information

I propose two branches:

- production  
This is the production branch. Changes to this branch will ultimately affect the live site.

- dev  
This is the development branch. Changes to this branch are local

## Setting Up the Environment

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

This will install everything needed to get the app running. The core app consists of:
- Pytest
- FastAPI
- uvicorn
- psycopg2
- sqlmodel
- dotenv

Everything else seen in requirements.txt are dependencies of the above.

3. Install the appropriate code formatter. See `Tools` above for the formatter we use. 

## Running the App

`uvicorn main:app --reload`

## Seeing the endpoints

`http://127.0.0.1:8000/docs`

^ Provided by Swagger UI

## Alternative API docs

`http://127.0.0.1:8000/redoc`