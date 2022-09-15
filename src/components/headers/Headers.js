import React, { useState, useRef } from "react";
import logo from "../../assets/images/logo/logo.png";
import avatar from "../../assets/images/profile/avatar.png";

const Headers = ({ startSearch }) => {
   const refForm = useRef();
   const [search, setSearch] = useState("");

   const onSearch = (e) => {
      const value = e.target.value;
      setSearch(value);
   };

   const onFormSubmit = (e) => {
      e.preventDefault();
      const value = refForm.current[0].value;
      startSearch(value);
   };

   return (
      <>
         <header className="myHeader">
            <div className="logoContainer">
               <img src={logo} alt="logo" />
            </div>

            <nav className="myNavs">
               <div className="menuItem nowPlaying active">Now Playing</div>
               <div className="menuItem favoriteSong">Play Lists</div>
            </nav>

            <div className="profileSearchContainer">
               <form action="" ref={refForm} onSubmit={onFormSubmit} className="searchForm">
                  <input type="text" name="search" id="search" className="search" placeholder="Artist" value={search} onChange={onSearch} />
               </form>

               <div className="loginSignup">
                  <span className="login">Login</span>
                  <span className="signup">Signup</span>
               </div>

               <div className="avatarContainer" style={{ display: "none" }}>
                  <input type="checkbox" name="profileCheckbox" id="profileCheckbox" />

                  <label htmlFor="profileCheckbox">
                     <img src={avatar} className="avatar" alt="profile avatar" />
                  </label>

                  <label htmlFor="profileCheckbox" className="profile">
                     <span className="viewProfile">View Profile</span>
                     <span className="logout">Logout</span>
                  </label>
               </div>
            </div>
         </header>
      </>
   );
};

export default Headers;
