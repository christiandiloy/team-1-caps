
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import "./store.css";
import TheFooter from "../footer";
import Embed from "../main-web-components/embed";
import StoreHead from "./store-head";
import StoreNavBar from "../store/navbar";
import StoreHeader from "./store-header";
import StoreCarousel from "./StoreCarousel";
import TopDeals from "./top-deals";



function Store() {
  const [currentLink, setCurrentLink] = useState(window.location.pathname.substring(1));
  

  console.log(currentLink);
  if(currentLink === "/" || currentLink === ""){
    return (
      <>
        <StoreHead/>
        <StoreHeader/>
        <StoreNavBar setCurrentLink = {setCurrentLink} />
        <StoreCarousel/>

        <TopDeals/>
        <Embed/>
        <Outlet />
        <TheFooter/>
      </>

    );
  } else if(currentLink === "/all-products") {
    return (
      <>
        <StoreHead/>
        <StoreHeader/>
        <StoreNavBar setCurrentLink = {setCurrentLink} />
        <Outlet />
        <TheFooter/>
      </>

    ); 
  }
  
  else{
    return(
      <>
        <StoreHead/>
        <StoreHeader/>
        <StoreNavBar setCurrentLink = {setCurrentLink} />
        <Outlet />
        <TheFooter/>
      </>
    );
  }
  
  
}

export default Store;