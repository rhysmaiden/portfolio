import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Project from "./ProjectV2.js";
import Hero from "./Hero.js";
import rugbyGif from "./rugby.gif";
import noCashGif from "./nocash.gif";
import InstaLiveGif from "./InstaLive.gif";
import ContactMe from "./ContactMe";

import RugbyVaultScreens from "./Rugby Vault screens.png";
import InstaLiveScreens from "./Instalive Screens.png";
import NoCashScreens from "./NoCashScreens.png";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      />

      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

      <Hero />
      <div>
        <h1 className="section-heading">Projects</h1>
      </div>
      <div className="projects">
        <Project
          title="The Rugby Vault"
          description="A website that displays and allows users to watch match and try highlights. Built with Django and ReactJS."
          frontEnd="ReactJS"
          frontEndDescription="The frontend fetches data from the server."
          backEnd="Django REST Framework"
          backEndDescription="The backend accepts GET and POST requests from the client. Periodically run python scripts keep the database updated."
          gif={rugbyGif}
          src="https://github.com/rhysmaiden/rugbyvaultfrontend"
          frontEndSrc="https://github.com/rhysmaiden/rugbyvaultfrontend"
          backEndSrc="https://github.com/rhysmaiden/rugbyvaultbackend"
          demo="https://www.therugbyvault.com/"
          tags={["ReactJS", "Django"]}
          img={RugbyVaultScreens}
        />
        <Project
          title="InstaLive"
          description="A front-end single page application that displays a live photo feed from a location via Instagram. Built with ReactJS."
          frontEnd="ReactJS"
          frontEndDescription="Data is fetched through Instagram GraphQL Queries and displayed in a responsive grid."
          gif={InstaLiveGif}
          src="https://github.com/rhysmaiden/instalive"
          demo="https://instalive.netlify.com/"
          img={InstaLiveScreens}
        />
        <Project
          title="No Cash"
          description="A mobile app that allows users to play board and card games that require currency. e.g. Poker without chips, Monopoly without cash. Built with NodeJS, SocketIO and React Native."
          frontEnd="React Native"
          frontEndDescription="The front-end is built using react-native in combination with Expo. It uses Socket IO to communicate with the server."
          backEnd="Node JS and MongoDB"
          backEndDescription="The Node JS server uses Socket IO to communicate with clients. MongoDB holds all the room and player information."
          gif={noCashGif}
          src="https://github.com/rhysmaiden/NoCash"
          demo="App store link"
          img={NoCashScreens}
        />

        {/* <Project
          title="The Custom Herald"
          description="A single page application which enables users to search and filter news"
          frontEnd="ReactJS"
          frontEndDescription="Data is passed from Django views to the template through url parameters"
          gif={rugbyGif}
          src="https://github.com/rhysmaiden/customherald"
        /> */}

        {/* <Project
          title="Song of the Season"
          description="A single page application that shows your most listened to tracks, artists and albums."
          frontEnd="ReactJS"
          frontEndDescription="Data is fetched through Last FM. To test use username: sabermusicmag"
          gif={rugbyGif}
        /> */}
      </div>
      {/* <ContactMe /> */}
    </div>
  );
}

export default App;
