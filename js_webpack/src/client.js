import React from "react";
import ReactDOM from "react-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import manyCats from "./images/manyArmsManyCats.png";

const position = [49.2123657, -122.9215445];

const App = () => {
  return (
    <main>
      <Map center={position} zoom={15} style={{ height: "800px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Codecore College
            <br />
            New Westminster BC, V3M 6Z1
          </Popup>
        </Marker>
      </Map>

      <h1 style={{ fontFamily: "sans-serif" }}>Lady with cats</h1>
      <img
        src={manyCats}
        alt="Many Cats Many Arms"
        style={{
          borderRadius: "20px",
          filter: "blur(0px) sepia(1) hue-rotate(50deg)",
          height: "400px"
        }}
      />
    </main>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.createElement("div");
  document.body.append(root);

  ReactDOM.render(<App />, root);
});
