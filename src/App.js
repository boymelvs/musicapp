import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Headers from "./components/headers/Headers";
import Main from "./components/mains/Main";
import Footers from "./components/footers/Footers";
// import sampleSongs from "./assets/songs/SongData";
import loadingImg from "./assets/images/fave/loading.svg";
axios.defaults.baseURL = "http://localhost:8000";

function App() {
   let navigate = useNavigate();
   const [songs, setSongs] = useState([]);
   const [allTracks, setAllTracks] = useState([]);
   const [loading, setLoading] = useState(false);
   const [index, setIndex] = useState(0);
   const [music, setMusic] = useState({
      isPlaying: false,
      isLength: songs.length,
   });

   const datas = localStorage.getItem("logInfo");
   const logInfo = datas ? JSON.parse(datas) : {};
   const [isAdmin, setIsAdmin] = useState(logInfo);

   useEffect(() => {
      const logInfo = JSON.stringify(isAdmin);
      localStorage.setItem("logInfo", logInfo);

      if (!isAdmin.id) {
         startSearch();
      }

      // if (isAdmin.id) {
      //    // get favesong on db

      //    axios
      //       .get("/", isAdmin.id)
      //       .then((res) => {
      //          console.log(res.data);
      //       })
      //       .catch((err) => {
      //          console.log(err);
      //       });
      // }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isAdmin]);

   const playSearch = (index) => {
      setMusic({ ...music, isPlaying: true });
      setIndex(index);
   };

   const startSearch = (value = "Philippine Top Hits") => {
      const data = { search: value };
      setLoading(true);

      axios
         .post("/search", data)
         .then((res) => {
            // console.log(res.data);
            setSongs(res.data);
            setMusic({ ...music, isLength: res.data.length });
            setLoading(false);
            navigate("/");
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <div className="container">
         <Headers startSearch={startSearch} playSearch={playSearch} music={music} setMusic={setMusic} isAdmin={isAdmin} />

         {loading ? (
            <div className="loadingContainer">
               <img src={loadingImg} alt="" />
               <div className="loadingText">Loading...</div>
            </div>
         ) : (
            <Main
               songs={songs}
               index={index}
               setIndex={setIndex}
               playSearch={playSearch}
               music={music}
               setMusic={setMusic}
               allTracks={allTracks}
               setAllTracks={setAllTracks}
               isAdmin={isAdmin}
               setIsAdmin={setIsAdmin}
               startSearch={startSearch}
            />
         )}

         <Footers />
      </div>
   );
}

export default App;
