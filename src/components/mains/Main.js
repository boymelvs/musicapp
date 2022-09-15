import React from "react";
import Favesongs from "./components/Favesongs";
import Playcard from "./components/Playcard";

const Main = ({ songs, index, playFavorite, music }) => {
   return (
      <main className="myMain">
         <section className="playerSection">
            <Playcard song={songs[index]} />

            <Favesongs songs={songs} index={index} playFavorite={playFavorite} music={music} />
         </section>
      </main>
   );
};

export default Main;
