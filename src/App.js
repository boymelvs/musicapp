import React, { useState, useEffect } from "react";
import Headers from "./components/headers/Headers";
import Main from "./components/mains/Main";
import sampleSongs from "./assets/songs/SongData";
// import sampleSongs from "./assets/songs/Songs";

function App() {
   const CLIENT_ID = "8d9358cede0f4d958fce2896dba9b05f";
   const CLIENT_SECRET = "549aebdf3c8c4510b741d59fef3c345e";
   const [token, setToken] = useState("");
   const [songs, setSongs] = useState(sampleSongs);

   useEffect(() => {
      const authOptions = {
         method: "POST",
         headers: {
            "Content-Type": "application/x-www-form-urlencoded",
         },
         body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      };

      try {
         fetch("https://accounts.spotify.com/api/token", authOptions)
            .then((res) => res.json())
            .then((datas) => setToken(datas.access_token));
      } catch (error) {
         console.log(error);
      }

      // startSearch();
   }, []);

   const startSearch = async (getSearch = "eraserheads") => {
      const artistParams = {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
         },
      };

      const getSongs = await fetch(`https://api.spotify.com/v1/search?q=${getSearch}&type=artist,album,track`, artistParams)
         .then((res) => res.json())
         .then((datas) => {
            const tracks = datas.tracks.items;

            const getTracks = tracks.map((track) => {
               const allTracks = {
                  id: track.id,
                  title: track.name,
                  track: track.preview_url,
                  artistName: track.artists[0].name,
                  albumImg: track.album.images[0].url,
               };
               return allTracks;
            });

            return getTracks;
         });

      console.log(getSongs);

      setSongs(getSongs);
   };

   return (
      <div className="container">
         <Headers startSearch={startSearch} />
         <Main songs={songs} />
      </div>
   );
}

export default App;
