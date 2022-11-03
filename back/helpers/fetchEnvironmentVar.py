import os
from helpers.exceptions import MissingEnvironmentVariable


def fetchEnv(env_variable_name: str):
    try:
        data = os.environ[env_variable_name]
        return data
    except KeyError:
        raise MissingEnvironmentVariable(env_variable_name)
