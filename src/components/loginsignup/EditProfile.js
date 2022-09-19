import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const EditProfile = ({ user, setUser, setShowEdit }) => {
   const [editUser, setEditUser] = useState(user);
   let navigate = useNavigate();

   const onInputChange = (e) => {
      setEditUser({ ...editUser, [e.target.name]: e.target.value });
   };

   const onFormSubmit = (e) => {
      e.preventDefault();
      setShowEdit(false);
      setUser(editUser);

      const data = {
         id: editUser.id,
         first_name: editUser.first_name,
         last_name: editUser.last_name,
      };

      axios
         .post("/users/profile", data)
         .then((res) => {
            // console.log(res);
            swal("Profile Saved!", "", "success");
         })
         .catch((err) => {
            swal("Error!", err.response.data.message, "error");
         });

      const logInfo = JSON.stringify(editUser);
      localStorage.setItem("logInfo", logInfo);

      navigate("/profile");
   };

   return (
      <div className="editProfileContainer">
         <form action="" id="editProfileForm" onSubmit={onFormSubmit}>
            <div className="field email-container">
               <label htmlFor="email">First Name</label>
               <input type="text" name="first_name" id="first_name" className="form-field" value={editUser.first_name} onChange={onInputChange} required />
            </div>

            <div className="field subject-container">
               <label htmlFor="last_name">Last Name</label>
               <input type="text" name="last_name" id="last_name" className="form-field" value={editUser.last_name} onChange={onInputChange} required />
            </div>

            <div className="btnContainer">
               <button type="submit" className="btn deleteBtn" onClick={onFormSubmit}>
                  Save
               </button>

               <button type="button" className="btn cancelBtn" onClick={() => setShowEdit(false)}>
                  Cancel
               </button>
            </div>
         </form>
      </div>
   );
};

export default EditProfile;
