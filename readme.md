# Tokyo Python Society Site - Overview Proposal

## Tools Used in Development

Language: Python 3.10  
Libraries: FastAPI  
Database: Postgres (version to be determined)  
Formatter: Black 22.8.0  
Testing: PyTest  
Front: JavaScript, Reactjs, Nextjs

## Frontend
The frontend is compiled and bundled with Nextjs from a barebones template design. For more information please see the `front/README.md`.

- Next.js allows for client-side navigation, which is faster than using html `<a></a>` tags. Routing is built in, so there is no need to install extra dependencies. [API reference for `Link`](https://nextjs.org/docs/api-reference/next/link).
- Next.js does prefetching (in production); other pages are fetched in the background *after* the landing page has loaded, providing the visitor with lightning fast load times
- Developing on NextJS is a breeze since it caters to the developer. Fast reload is built in, and with `npm run dev` you can immediately start contributing.
- The biggest pull for me was that responsiveness has been built in. We do not need to worry about catering to all sorts of screen sizes (this is mostly due to good TailwindCSS conventions)

## Branch Information

- production  
This is the production branch. Changes to this branch will ultimately affect the live site.
10/22: As of now, there is no production branch. It will not be ready until the site is at least somewhat presentable

- dev  
This is the development branch. Changes to this branch are local. 

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

This will install everything needed to get the backend running. The core app consists of:
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