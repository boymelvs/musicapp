import React from "react";
import Audioplayer from "../Audioplayer";
import Notfound from "../../../modal/Notfound";
import Playcard from "../Playcard";
import Favesongs from "../Favesongs";

const CreatePlaylist = ({ allTracks, faveIndex, setFaveIndex, playFavorite, faveMusic, onDeleteFavorites, setfaveMusic }) => {
   if (allTracks.length === 0) {
      return <Notfound value={"Saved Favorites"} />;
   }

   return (
      <>
         <Playcard song={allTracks[faveIndex]} />
         <Favesongs songs={allTracks} index={faveIndex} playFavorite={playFavorite} music={faveMusic} onDeleteFavorites={onDeleteFavorites} />
         <Audioplayer songs={allTracks} index={faveIndex} setIndex={setFaveIndex} music={faveMusic} setMusic={setfaveMusic} />
      </>
   );
};

export default CreatePlaylist;
