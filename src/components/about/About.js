import React from "react";

const About = () => {
   return (
      <div className="aboutContainer">
         <h2>What is MusicApp?</h2>
         <div className="para first_para">
            MusicApp is a free personalized music streaming service that offers unlimited listening with no commercial interruptions and no ads. The service is available online at
            www.musicapp-kodego-proj.vercel.app.
         </div>

         <div className="para second_para">
            It's like having a radio station that will play the music that you like, but without the commercials! Just tune in to artist that you like and let MusicApp do the rest.
            You can further personalize your music experience by adding your favorites songs that you want to hear more often.
         </div>
         <div className="aboutContainer">

         <h1>Why Create an Account?</h1>
         <br />

         <i className="icons bi bi-arrow-through-heart">
            <h3>Add to Favorites</h3>
            <p className="text-icons">Save your favorite songs.</p>
         </i>
         <i class="icons bi bi-skip-forward">
            <h3>Unlimited Skips</h3>
            <p className="text-icons">Just hit next.</p>
         </i>

         <i class="icons bi bi-play-btn">
            <h3>Play any Songs.</h3>
            <p className="text-icons">Even on mobile.</p>
         </i>

         <i class="icons bi bi-bell-slash-fill">
            <h3>Unlimited Skips.</h3>
            <p className="text-icons">Even on mobile.</p>
         </i>
         </div>
      </div>
   );
};

export default About;
