# FSDT usage : example repository

This repository contains examples of how to use the FSDT packages for your mono-repo.

## Contents

### Client

The client is a simple example of how to use the FSDT packages in the client part of a project.
In this example, the client is a simple React application.

### Server

The server is a simple example of how to use the FSDT packages in the server part of a project.
In this example, the server is a simple ExpressJS application.

## How to run

### Prerequisites

- [NodeJS](https://nodejs.org/en/) (version 16 or higher)
- [Yarn](https://yarnpkg.com/) (version 1.22 or higher)

### Steps

1. Clone this repository
2. Run `yarn install` in the root of the repository
3. Run `yarn start` to start the client, the server and the FSDT App (you can run them 1 by 1, check the package.json)

By default, the client is running on http://localhost:5173
The server is running on http://localhost:8000 (you can edit the port with a .env file)

### Interact with the FSDT App

Feel free to test and interact with the FSDT App.
You can interact with some element on the client and trigger some new messages
