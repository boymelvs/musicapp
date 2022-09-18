import React, { useState } from "react";

const Playlist = ({ onSaveTitle, setCreate }) => {
   const [listName, setListName] = useState("");

   const onSave = (e) => {
      e.preventDefault();

      if (listName) {
         setCreate(false);
         onSaveTitle(listName);
      }
   };

   const onCancel = () => {
      setCreate(false);
   };

   return (
      <div className="newPlaylistContainer">
         <div className="newPlaylist">
            <form className="playListForm" onSubmit={onSave}>
               <div className="playListName">
                  <label htmlFor="playListName">Play List Name</label>
                  <input type="text" name="playListName" id="playListName" value={listName} onChange={(e) => setListName(e.target.value)} />
               </div>

               <div className="btnContainer">
                  <button type="submit" className="btn saveBtn">
                     Save
                  </button>

                  <button type="button" className="btn cancelBtn" onClick={onCancel}>
                     Cancel
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Playlist;
