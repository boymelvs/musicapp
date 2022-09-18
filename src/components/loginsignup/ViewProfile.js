import React from "react";
import avatar from "../../assets/images/profile/avatar.png";
import { Link } from "react-router-dom";

const ViewProfile = ({ isAdmin, songs }) => {
   let faveSongsRender;

   faveSongsRender = songs.map((song, idx) => {
      return (
         <div className="cardSong" key={song.id || idx}>
            <div className="cardSongImg">
               <img src={song.albumImg} alt={song.artistName} className="songImg" />
            </div>

            <div className="titleArtist">
               <div className="cardSongTitle">{song.title}</div>

               <div className="cardSongArtist">{`by ${song.artistName}`}</div>
            </div>
         </div>
      );
   });

   if (!songs[0]) {
      faveSongsRender = "No Records";
   }

   return (
      <div className="profileContainer">
         <div className="profile">
            <div className="profileCard">
               <div className="profPic">
                  <img src={avatar} alt={isAdmin.first_name} />
               </div>

               <div className="profInfo">
                  <div className="name">
                     {`${isAdmin.first_name} ${isAdmin.last_name}`}

                     <Link to="/edit" className="edit">
                        Edit
                     </Link>
                  </div>

                  <div className="email">{isAdmin.email}</div>
               </div>
            </div>
         </div>

         <div className="favoritesContainer">
            <h2>Your Favorites</h2>
            <div className="favorites">{faveSongsRender}</div>
         </div>
      </div>
   );
};

export default ViewProfile;
