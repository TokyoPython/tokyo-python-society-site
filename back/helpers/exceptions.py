

class MissingEnvironmentVariable(Exception):
    """Custom exception to troubleshoot env variable errors better.
    This is called when an environment variable cannot be obtained. The log will look like this:
    raise MissingEnvironmentVariable(f"{env_var_name} does not exist")
    helpers.exceptions.MissingEnvironmentVariable: XXXX does not exist
    """
    pass