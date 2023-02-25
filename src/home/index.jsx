
import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "./navbar";
import React from "react";
import "./home.css";
import TheFooter from "../footer";
import Vapes from "../main-web-components/vapes";
import Embed from "../main-web-components/embed";
import Slider from "../main-web-components/SliderParent";
import Head from "./head";
import StoreNavBar from "../store/navbar";


function Home() {
  const [currentLink, setCurrentLink] = useState(window.location.pathname.substring(1));
  let isUserLoggedIn = false;
  try {
    isUserLoggedIn = JSON.parse(localStorage.getItem("user"));
    if (isUserLoggedIn && isUserLoggedIn.id) {
      // do nothing, continue lang
    } else {
      localStorage.clear();
      window.location.href = "http://localhost:3000/login";
    }
  } catch (error) {
    localStorage.clear();
    window.location.href = "http://localhost:3000/login";
  }

  if(currentLink === "aegis") {
    return !!isUserLoggedIn ? (
      <>
        <Head/>
        <NavBar setCurrentLink = {setCurrentLink} />
        <Outlet />
        <TheFooter/>
      </>
    ) : (
      <></>
    );
  }
  else if(currentLink === "geekvape-u"){
    return !!isUserLoggedIn ? (
      <>
        <Head/>
        <NavBar setCurrentLink = {setCurrentLink} />
        <Outlet />
        <TheFooter/>
      </>
    ) : (
      <></>
    );
  }
  else if(currentLink === "geekvape-z"){
    return !!isUserLoggedIn ? (
      <>
        <Head/>
        <NavBar setCurrentLink = {setCurrentLink} />
        <Outlet />
        <TheFooter/>
      </>
    ) : (
      <></>
    );
  }
  else if(currentLink === "wenax"){
    return !!isUserLoggedIn ? (
      <>
        <Head/>
        <NavBar setCurrentLink = {setCurrentLink} />
        <Outlet />
        <TheFooter/>
      </>
    ) : (
      <></>
    );
  }
  else if(currentLink === "obelisk"){
    return !!isUserLoggedIn ? (
      <>
        <Head/>
        <NavBar setCurrentLink = {setCurrentLink} />
        <Outlet />
        <TheFooter/>
      </>
    ) : (
      <></>
    );
  }
  else if(currentLink === "coils"){
    return !!isUserLoggedIn ? (
      <>
        <Head/>
        <NavBar setCurrentLink = {setCurrentLink} />
        <Outlet />
        <TheFooter/>
      </>
    ) : (
      <></>
    );
  }
  else if(currentLink === "FAQ"){
    return !!isUserLoggedIn ? (
      <>
        <Head/>
        <NavBar setCurrentLink = {setCurrentLink} />
        <Outlet />
        <TheFooter/>
      </>
    ) : (
      <></>
    );
  }
  else if(currentLink === "about-us"){
    return !!isUserLoggedIn ? (
      <>
        <Head/>
        <NavBar setCurrentLink = {setCurrentLink} />
        <Outlet />
        <TheFooter/>
      </>
    ) : (
      <></>
    );
  }
  else if(currentLink === "contact-us"){
    return !!isUserLoggedIn ? (
      <>
        <Head/>
        <NavBar setCurrentLink = {setCurrentLink} />
        <Outlet />
        <TheFooter/>
      </>
    ) : (
      <></>
    );
  }
  else if(currentLink === "store"){
    return !!isUserLoggedIn ? (
      <>
        <Head/>
        <StoreNavBar setCurrentLink = {setCurrentLink} />
        <Outlet />
        <TheFooter/>
      </>
    ) : (
      <></>
    );
  }
  
  else{
    return !!isUserLoggedIn ? (
      <>
        <Head/>
        <NavBar setCurrentLink = {setCurrentLink} />
        <Slider/>
        <Vapes/>
        <Embed/>
        <Outlet />
        <TheFooter/>
      </>
    ) : (
      <></>
    );
  }
  
  
}

export default Home;
