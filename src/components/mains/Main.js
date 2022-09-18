import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SearchSong from "./components/SearchSong";
import Playcard from "./components/Playcard";
import Audioplayer from "./components/Audioplayer";
import CreatePlaylist from "./components/playlist/CreatePlaylist";
import Login from "../loginsignup/Login";
import Signup from "../loginsignup/Signup";
import Notfound from "../modal/Notfound";
import ViewProfile from "../loginsignup/ViewProfile";

const Main = ({ songs, index, setIndex, playSearch, music, setMusic, allTracks, setAllTracks, isAdmin, setIsAdmin }) => {
   const [faveIndex, setFaveIndex] = useState(0);
   const [faveMusic, setfaveMusic] = useState({
      isPlaying: music.isPlaying,
      isLength: allTracks.length,
   });

   useEffect(() => {
      setfaveMusic({ ...faveMusic, isLength: allTracks.length });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [allTracks]);

   const playFavorite = (idx) => {
      setfaveMusic({ ...faveMusic, isPlaying: true });
      setFaveIndex(idx);
   };

   const addToFavorites = (track) => {
      const isAdded = allTracks.includes(track);

      if (isAdded) {
         return;
      }

      setAllTracks([...allTracks, track]);
   };

   const onDeleteFavorites = (index) => {
      const newAlltracks = [...allTracks];

      setfaveMusic({ ...faveMusic, isPlaying: false });
      newAlltracks.splice(index, 1);
      setAllTracks(newAlltracks);
   };

   return (
      <main className="myMain">
         <section className="playerSection">
            <Routes>
               <Route
                  path="/"
                  element={
                     songs.length === 0 ? (
                        <Notfound />
                     ) : (
                        <>
                           <Playcard song={songs[index]} />
                           <SearchSong songs={songs} index={index} playSearch={playSearch} music={music} addToFavorites={addToFavorites} allTracks={allTracks} isAdmin={isAdmin} />
                           <Audioplayer songs={songs} index={index} setIndex={setIndex} music={music} setMusic={setMusic} />
                        </>
                     )
                  }
               />

               <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
               <Route path="/signup" element={<Signup setIsAdmin={setIsAdmin} />} />
               <Route path="/profile" element={<ViewProfile isAdmin={isAdmin} songs={allTracks} />} />

               <Route
                  path="/playlist"
                  element={
                     <>
                        {isAdmin.id ? (
                           <CreatePlaylist
                              allTracks={allTracks}
                              faveIndex={faveIndex}
                              setFaveIndex={setFaveIndex}
                              playFavorite={playFavorite}
                              faveMusic={faveMusic}
                              onDeleteFavorites={onDeleteFavorites}
                              setfaveMusic={setfaveMusic}
                              isAdmin={isAdmin}
                           />
                        ) : (
                           <Login setIsAdmin={setIsAdmin} />
                        )}
                     </>
                  }
               />
            </Routes>
         </section>
      </main>
   );
};

export default Main;
