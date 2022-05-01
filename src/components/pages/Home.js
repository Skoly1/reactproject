import "../../App.css";

import React, { useState } from "react";

import Featured from "../Featured/Featured";
import Cards from "../List/Cards";
import Footer from "../Footer/Footer";
import List from "../List/List";
import ListItem from "../List/ListItem";
import Trailer from "../Trailers/Trailer";

function Home() {
  return (
    <>
      <Featured />

      <Cards />
      <List />

      {/* <ListItem /> */}

      {/* <Trailer /> */}
      <Footer />
    </>
  );
}

export default Home;
