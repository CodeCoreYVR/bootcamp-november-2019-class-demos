import React from "react";
import ReactDOM from "react-dom";

import manyCats from "./images/manyArmsManyCats.png";

console.log(manyCats);

// document.addEventListener("DOMContentLoaded", () => {
//   const img = document.createElement("img");
//   img.src = manyCats;
//   img.style.borderRadius = "20px";
//   img.style.filter = "blur(1px) sepia(1) hue-rotate(50deg)";
//   img.style.height = "500px";

//   document.querySelector("body").append(img);
// });

const App = () => {
  return (
    <main>
      <h1 style={{ fontFamily: "sans-serif" }}>Here's a picture!</h1>
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
