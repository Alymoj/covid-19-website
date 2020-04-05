import React, { useState } from "react";
import '../styles/Map.css';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
//import { Icon } from "leaflet";
//import * as parkData from "./data/skateboard-parks.json";


export default function App() {
    return (
      <Map center={[30.044420, 31.235712]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    );
  }
