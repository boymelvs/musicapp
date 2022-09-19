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
import About from "../about/About";

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

   const onDeleteFavorites = (songToDelete) => {
      const newAlltracks = [...allTracks];

      setfaveMusic({ ...faveMusic, isPlaying: false });
      newAlltracks.splice(songToDelete.song, 1);
      setAllTracks(newAlltracks);
      setFaveIndex(0);
   };

   return (
      <main className="myMain">
         <section className="playerSection">
            <Routes>
               <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
               <Route path="/signup" element={<Signup setIsAdmin={setIsAdmin} />} />
               <Route path="/profile" element={<ViewProfile songs={allTracks} setIsAdmin={setIsAdmin} />} />
               <Route path="/about" element={<About />} />

               <Route
                  path="/"
                  element={
                     songs.length === 0 ? (
                        <Notfound />
                     ) : (
                        <>
                           <Playcard song={songs[index]} />
                           <SearchSong
                              songs={songs}
                              index={index}
                              playSearch={playSearch}
                              music={music}
                              setAllTracks={setAllTracks}
                              allTracks={allTracks}
                              isAdmin={isAdmin}
                              onDeleteFavorites={onDeleteFavorites}
                           />
                           <Audioplayer songs={songs} index={index} setIndex={setIndex} music={music} setMusic={setMusic} />
                        </>
                     )
                  }
               />

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
