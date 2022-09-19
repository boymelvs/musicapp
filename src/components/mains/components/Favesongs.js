import React, { useState } from "react";
import playBtn from "../../../assets/images/player/plays.svg";
import paused from "../../../assets/images/player/paused.svg";
import DeleteModal from "./playlist/DeleteModal";

const Favesongs = ({ songs, index, playFavorite, music, onDeleteFavorites }) => {
   const [deleteSong, setDeleteSong] = useState({});
   const [showModal, setShowModal] = useState(false);

   const onSongClick = (idx) => {
      playFavorite(idx);
   };

   const onDelete = (song, idx) => {
      setDeleteSong({...deleteSong, song, idx});
      setShowModal(true);
   };

   const faveSongsRender = songs.map((song, idx) => {
      return (
         <div className="cardSong" key={song.id}>
            <div className="close" onClick={() => onDelete(song, idx)}>
               X
            </div>
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
         <h2>Favorites</h2>
         <div className="cardSongContainer">{faveSongsRender}</div>
         {showModal && <DeleteModal song={deleteSong} onDeleteFavorites={onDeleteFavorites} setShowModal={setShowModal} />}
      </div>
   );
};

export default Favesongs;
