// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./App.css";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import CharacterDetails from "./pages/CharacterDetails";
import EpisodeDetails from "./pages/EpisodeDetails";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <h1>Welcome to rick and morty gallery</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/episodes/:id" element={<EpisodeDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
