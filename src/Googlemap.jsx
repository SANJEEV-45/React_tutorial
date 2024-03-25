"use client";
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useState } from "react";
// import {APIProvider, InofWindow, Pin, Map } from '@vis.gl/react-google-maps';

const Googlemap = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 53.34,
    lng: 10,
  };

  return (
    <div style={{width:"100%",height:"100%"}}>
      <LoadScript googleMapsApiKey="AIzaSyCjRWxOXzdQdvLzijcuoJE3S6QnoajjnBo">
        <GoogleMap 
          mapContainerStyle={mapStyles}
          zoom={8}
          center={defaultCenter}
        />
      </LoadScript>
    </div>
  );
};

export default Googlemap;
