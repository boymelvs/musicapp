import React, { useState, useEffect } from "react";
import Audioplayer from "./components/Audioplayer";
import Favesongs from "./components/Favesongs";
import Playcard from "./components/Playcard";
// import songs from "../../assets/songs/Songs";

const Main = ({ songs }) => {
   const [index, setIndex] = useState(0);
   const [songList, setSongList] = useState([]);

   const playFavorite = (index) => {
      setIndex(index);
   };

   useEffect(() => {
      let listSong = [];
      const numSong = songs.length > 9 ? 9 : songs.length;

      for (let i = 0; i < numSong; i++) {
         listSong.push(<Favesongs song={songs[i]} index={i} key={songs[i].id} playFavorite={playFavorite} />);
      }

      setSongList(listSong);
   }, [songs]);

   return (
      <main className="myMain">
         <section className="playerSection">
            <Playcard song={songs[index]} />

            <div className="songContainer">
               <h2>Most Played Songs</h2>
               <div className="cardSongContainer">{songList}</div>
            </div>
         </section>

         <section className="audio-player">
            <Audioplayer songs={songs} index={index} setIndex={setIndex} />
         </section>
      </main>
   );
};

export default Main;

// {
//    songs.map((song, idx) => {
//       return <Favesongs song={song} key={idx} index={idx} playFavorite={playFavorite} />;
//    });
// }
