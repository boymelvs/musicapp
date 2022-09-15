import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headers from "./components/headers/Headers";
import Main from "./components/mains/Main";
import sampleSongs from "./assets/songs/SongData";
import Audioplayer from "./components/mains/components/Audioplayer";
axios.defaults.baseURL = "http://localhost:8000";

function App() {
   const [songs, setSongs] = useState(sampleSongs);
   const [index, setIndex] = useState(0);
   const [music, setMusic] = useState({
      isPlaying: false,
      length: songs.length,
   });

   const playFavorite = (index) => {
      setIndex(index);
      setMusic({ ...music, isPlaying: true });
   };

   const startSearch = (value) => {
      const data = { search: value };

      axios
         .post("/search", data)
         .then((res) => {
            console.log(res);
            setSongs(res.data);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <div className="container">
         <Headers startSearch={startSearch} />
         <Main songs={songs} index={index} playFavorite={playFavorite} music={music} />
         <Audioplayer songs={songs} index={index} setIndex={setIndex} music={music} setMusic={setMusic} />
      </div>
   );
}

export default App;
