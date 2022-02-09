# Easy User Authentication for React Apps

This repository hosts a React project that defines a Single-Page Application (SPA). You'll secure access to some of its routes using Auth0 User Authentication.

## Get Started

Install the client project dependencies:

```bash
npm install
```

Run the client project locally:

```bash
npm start
```

The application runs by on port `4040` to mitigate conflicting with other client applications you may be running.

Visit [`http://localhost:4040/`](http://localhost:4040/) to access the starter application.

## Environment Variables
The application requires the following variable to work
```
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
REACT_APP_AUTH0_AUDIENCE=
REACT_APP_SERVER_URL=http://localhost:6060
```

Variable `REACT_APP_SERVER_URL` refers to the url of the server which excuting the API commands. An example for such implementation can be found at: [https://github.com/Lerer/pizza42-express-server](https://github.com/Lerer/pizza42-express-server)

The client application need to have a registered Auth0 application from which the missing details can be found. 

Following the [Register Single-Page Web Applications
](https://auth0.com/docs/get-started/auth0-overview/create-applications/single-page-web-apps) instructions to create the SPA in your Auth0 tenent.

From the new SPA, copy the `Client ID` to the `REACT_APP_AUTH0_CLIENT_ID` environment variable.
Your Auth0 tenent domain name will be the value of the `REACT_APP_AUTH0_DOMAIN` variable.
> Note - the domain name will have the following pattern: `tenant-name.region.auth0.com`

The last part would be to collect the `REACT_APP_AUTH0_AUDIENCE`. For that we will need to create an `API` in our Auth0 tenent.

Follow the [Register APIs
](https://auth0.com/docs/get-started/auth0-overview/set-up-apis) instruction and use the value of the `Identifier` as your `REACT_APP_AUTH0_AUDIENCE`.

> Note - make sure your server application also use the same audience

## Heroku deployment

The project already includes a `Procfile` which instruct HEROKU how to start the client.

You can now deploy your application with one of the deployment options:

1. Deploy via commands (`git` and `heroku`) - see: [Deploying with Git](https://devcenter.heroku.com/articles/git)
2. Deploy via direct integration to GitHub - see: [GitHub Integration (Heroku GitHub Deploys)](https://devcenter.heroku.com/articles/github-integration)

Make sure to setup the [environment variables in your Heroku application](https://devcenter.heroku.com/articles/nodejs-support#environment-variables)


