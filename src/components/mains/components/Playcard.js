import React from "react";

const Playcard = ({ song }) => {
   if (!song) {
      return;
   }

   return (
      <div className="cardPlayContainer">
         <div className="cardPlay">
            <div className="cardPlayImg">
               <img src={song.album_img} alt={song.artist_name} />
            </div>

            <div className="titleDotContainer">
               <input type="checkbox" name="dot" id="dotCheckbox" />

               <div className="cardPlayStatus">
                  <div className="status">
                     {`"${song.title}" `}
                  </div>

                  <div className="title">{`${song.artist_name}`}</div>
               </div>

               <div className="addFavorite">
                  <label htmlFor="dotCheckbox" className="addFaveLabel">
                     Add to favorites
                  </label>
                  <div className="pointer"></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Playcard;
