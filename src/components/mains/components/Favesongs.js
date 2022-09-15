import React from "react";
import playBtn from "../../../assets/images/player/plays.svg";
import paused from "../../../assets/images/player/paused.svg";
import heart from "../../../assets/images/fave/heart.svg";

const Favesongs = ({ songs, index, playFavorite, music }) => {
   const onSongClick = (idx) => {
      playFavorite(idx);
   };

   const addToPlaylist = () => {
      console.log("test");
   };

   const faveSongsRender = songs.map((song, idx) => {
      return (
         <div className="cardSong" onClick={() => onSongClick(idx)} key={song.id}>
            <img src={heart} alt="favorites" className="heart" onClick={addToPlaylist} />
            <div className="cardSongImg">
               <img src={song.albumImg} alt={song.artistName} className="songImg" />

               <img src={music.isPlaying && index === idx ? paused : playBtn} alt="play" className="playBtn" />
            </div>

            <div className="titleArtist">
               <div className="cardSongTitle">{song.title}</div>

               <div className="cardSongArtist">{`by ${song.artistName}`}</div>
            </div>
         </div>
      );
   });

   return (
      <div className="songContainer">
         <h2>Most Search Songs</h2>
         <div className="cardSongContainer">{faveSongsRender}</div>
      </div>
   );
};

export default Favesongs;
