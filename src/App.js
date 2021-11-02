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
import HotelPortalScreen from "./HotelPortal.png";

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

      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />

      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

      <Hero />
      <div id="projectHeading">
        <h1 className="section-heading">Projects</h1>
      </div>
      <div className="projects">
        <Project
          title="The Rugby Vault"
          description="A website that displays and allows users to watch match and try highlights. Built with Django and ReactJS."
          gif={rugbyGif}
          src="https://github.com/rhysmaiden/rugbyvaultfrontend"
          demo="https://therugbyvault.netlify.app/"
          tags={["ReactJS", "Django"]}
          img={RugbyVaultScreens}
        />
        <Project
          title="Hotel Portal"
          description="A hotel management system that allows for guests to interact with hotel staff from their mobile. Built with VueJS and Laravel."
          username="Email: admin@balanvillage.com.au"
          password="Password: password"
          gif={InstaLiveGif}
          src="https://github.com/rhysmaiden/motelPortal"
          demo="https://hotelportal.xyz/"
          img={HotelPortalScreen}
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
