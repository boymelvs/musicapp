import React, { useState, useEffect } from "react";
import playBtn from "../../../assets/images/player/plays.svg";
import paused from "../../../assets/images/player/paused.svg";
import heart from "../../../assets/images/fave/heart.svg";
import addHeart from "../../../assets/images/fave/heart1.png";

const SearchSong = ({ songs, index, playSearch, music, addToFavorites, allTracks, isAdmin }) => {
   const [track, setTracks] = useState({});
   const [isAdded, setIsAdded] = useState(false);

   const onSongClick = (idx) => {
      playSearch(idx);
   };

   const addTo = (song) => {
      addToFavorites(song);
      setTracks(song);
   };

   const faveSongsRender = songs.map((song, idx) => {
      return (
         <div className="cardSong" key={song.id || idx}>
            {isAdmin.id && <img src={isAdded ? addHeart : heart} alt="favorites" className="heart" onClick={() => addTo(song)} />}
            <div className="cardSongImg" onClick={() => onSongClick(idx)}>
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
         <h2>Search Results </h2>
         <div className="cardSongContainer">{faveSongsRender}</div>
      </div>
   );
};

export default SearchSong;
