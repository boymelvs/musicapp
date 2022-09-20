import React from "react";
import axios from "axios";
import playBtn from "../../../assets/images/player/plays.svg";
import paused from "../../../assets/images/player/paused.svg";
import heart from "../../../assets/images/fave/heart.svg";
import addHeart from "../../../assets/images/fave/heart1.png";

const SearchSong = ({ songs, index, playSearch, music, setAllTracks, allTracks, isAdmin, onDeleteFavorites }) => {
   const onSongClick = (idx) => {
      playSearch(idx);
   };

   const addTo = (song) => {
      const isAdded = allTracks.includes(song);
      const data = {
         id: isAdmin.id,
         title: song.title,
         track: song.track,
         artistName: song.artistName,
         albumImg: song.albumImg,
      };

      if (isAdded) {
         onDeleteFavorites(song);
         return;
      }

      setAllTracks([...allTracks, song]);

      const saveTracks = JSON.stringify([...allTracks, song]);
      localStorage.setItem("saveTracks", saveTracks);

      // save to db
      axios.post("/", data);
   };

   const faveSongsRender = songs.map((song, idx) => {
      return (
         <div className="cardSong" key={song.id || idx}>
            {isAdmin.id && <img src={allTracks.includes(song) ? addHeart : heart} alt="favorites" className="heart" onClick={(e) => addTo(song)} />}

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
