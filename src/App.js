import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Project from "./Project.js";
import Hero from "./Hero.js";
import rugbyGif from "./rugby.gif";
import noCashGif from "./nocash.gif";
import InstaLiveGif from "./InstaLive.gif";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
      />
      <Hero />
      <div className="projects">
        <Project
          title="The Rugby Vault"
          description="A website that displays and allows users to watch match and try highlights."
          frontEnd="ReactJS"
          frontEndDescription="Data is passed from Django views to the template through url parameters"
          backEnd="Django REST Framework"
          backEndDescription="The backend acts as an API which the front end calls to recieve the correct highlights. There are a number of python scripts that run periodically to get new fixtures and youtube highlights."
          gif={rugbyGif}
          frontEndSrc="https://github.com/rhysmaiden/rugbyvaultfrontend"
          backEndSrc="https://github.com/rhysmaiden/rugbyvaultbackend"
          demo="https://www.therugbyvault.com/"
        />
        <Project
          title="No Cash"
          description="A mobile app that allows users to play board and card games that require currency. e.g. Poker without chips, Monopoly without cash."
          frontEnd="React Native"
          frontEndDescription="The front-end is built using react-native in combination with Expo. It uses Socket IO to communicate with the server."
          backEnd="Node JS and MongoDB"
          backEndDescription="The Node JS server uses Socket IO to communicate with clients. A MongoDB collection stores all the room and player information."
          gif={noCashGif}
          src="https://github.com/rhysmaiden/NoCash"
        />
        <Project
          title="InstaLive"
          description="A frontEnd single page application that displays a live photo feed from a location via Instagram."
          frontEnd="ReactJS"
          frontEndDescription="Data is fetched through Instagram GraphQL Queries and displayed in a responsive grid."
          gif={InstaLiveGif}
        />

        <Project
          title="The Custom Herald"
          description="A single page application which enables users to search and filter news"
          frontEnd="Jinja Templates"
          frontEndDescription="Data is passed from Django views to the template through url parameters"
          backEnd="Django"
          backEndDescription="SQLite database is updated through automated python web crawlers"
          gif={rugbyGif}
        />

        <Project
          title="Song of the Season"
          description="A single page application that shows your most listened to tracks, artists and albums."
          frontEnd="Jinja Templates"
          frontEndDescription="Data is fetched through Last FM"
          gif={rugbyGif}
        />
      </div>
    </div>
  );
}

export default App;