import React from "react";
import playBtn from "../../../assets/images/player/plays.svg";

const Favesongs = ({ song, index, playFavorite }) => {
   const onSongClick = () => {
      playFavorite(index);
   };

   return (
      <div className="cardSong" onClick={onSongClick}>
         <div className="cardSongImg">
            <img src={song.albumImg} alt={song.artistName} className="songImg" />

            <img src={playBtn} alt="play" className="playBtn" />
         </div>

         <div className="titleArtist">
            <div className="cardSongTitle">{song.title}</div>

            <div className="cardSongArtist">{`by ${song.artistName}`}</div>
         </div>
      </div>
   );
};

export default Favesongs;
