import React from "react";

const Playcard = ({ song }) => {
   return (
      <div className="cardPlayContainer">
         <div className="cardPlay">
            <div className="cardPlayImg">
               <img src={song.albumImg} alt={song.artistName} />
            </div>

            <div className="titleDotContainer">
               <input type="checkbox" name="dot" id="dotCheckbox" />

               <div className="cardPlayStatus">
                  <div className="status">{`"${song.title}" is Now Playing`}</div>
                  <div className="title">{`by ${song.artistName}`}</div>
               </div>

               <label htmlFor="dotCheckbox" className="cardPlayDot">
                  <span id="dot1" className="dot"></span>
                  <span id="dot2" className="dot"></span>
                  <span id="dot3" className="dot"></span>
               </label>

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
