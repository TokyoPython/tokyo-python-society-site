#!/bin/bash

echo "Running uvicorn main:app --reload"
uvicorn main:app --reload