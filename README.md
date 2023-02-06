<h1 align="center">Rebook Fullstack Application</h1>

This is a fullstack application with React, Express and TypeScript. Search and View books and some details using this application.

## Table of contents

- [Table of contents](#table-of-contents)
- [Demo](#demo)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Technologies](#technologies)
- [Installation](#installation)
- [Docker](#docker)
- [Containers](#containers)
- [Usage](#usage)
- [Server](#server)
    - [.env file](#env-file)
    - [Install dependencies \& Run the server](#install-dependencies--run-the-server)
- [Client](#client)
    - [.env file](#env-file-1)
    - [Install dependencies \& Run the server](#install-dependencies--run-the-server-1)
- [Screenshots](#screenshots)
- [Additional notes](#additional-notes)

<a name="demo"></a>

## Demo

- Live demo is available here: **[Demo](https://rebook-weld.vercel.app/)**

<a name="features"></a>

## Features

- Server

  - Express server application
  - `GET` books from the `googleapis.com` 
  - Serve books with `thumbnail, title, authors, language` and `buy links` fields that related to the client queries

- Client

  - React client application with functional components and hooks
  - Search books from the Express Server, which is based on `googleapis.com` 
  - View books with `thumbnail, title, authors, language` and `buy links` fields
  - Switch between pages using pagination

<a name="folders"></a>

## Folder Structure

- Client
  - `public`: Contains public files for React
  - `src`: Contains source codes
    - `assets`: Contains static assets such as images and fonts
    - `components`: Contains reusable React components
    - `hooks`: Contains custom React hooks
    - `models`: Contains models for TypeScript
- Server
  - `dist`: Contains output files for deployment to vercel
  - `src`: Contains source codes

<a name="tech"></a>

## Technologies

Rebook Fullstack Application is built using the following technologies:

- [React](https://reactjs.org/): A JavaScript library for building user interfaces
- [Express.js](https://expressjs.com/): A framework for building Node.js server applications
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that helps improve the reliability and maintainability of the codebase
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs

This project makes use of the following technologies:

- [Docker](https://www.docker.com/): A containerization platform for building, deploying, and running applications

<a name="installation"></a>

## Installation

Read on on how to set up this for local. Clone the repo.

```
$ git clone https://github.com/ferruhcihan/rebook-app.git
$ cd rebook-app
```
<a name="docker"></a>

## Docker

If you have a Docker on your local device, continue reading, otherwise proceed to the [Server](#server)

<a name="containers"></a>

## Containers

* `client` with React on `https://localhost:3000` route
* `server` with Express on `https://localhost:5000` route

<a name="usage"></a>

## Usage

`docker-compose up -d` or for every container separately `docker-compose up -d client server`

Shut down containers with `docker-compose down`

If you change `Dockerfile` rebuild container with `docker-compose build server`. Container names are `client` and `server`

Access React app on `http://localhost:3000` and test the server on `https://localhost:5000`

<a name="server"></a>

## Server
You are good to go, server will be available on `https://localhost:5000`

#### .env file
```
PORT=5000
HOST=127.0.0.1
```

#### Install dependencies & Run the server
```
$ cd server
$ yarn
$ yarn start
```
<a name="client"></a>

## Client

First install the dependencies and run the server. Then install the dependencies and run the client. App will load on `https://localhost:3000`.

#### .env file
```
REACT_APP_API_URL=http://localhost:5000/
```

#### Install dependencies & Run the server
```
$ cd client
$ yarn
$ yarn start
```

<a name="screenshots"></a>

## Screenshots

![Screenshot1](/Screenshot_1.png)

![Screenshot2](/Screenshot_2.png)

![Screenshot3](/Screenshot_3.png)

<a name="additional"></a>

## Additional notes

Tested on macOS using Docker.

