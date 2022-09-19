import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const EditProfile = ({ user, setUser, setShowEdit, setIsAdmin }) => {
   const [editUser, setEditUser] = useState(user);
   let navigate = useNavigate();

   useEffect(() => {
      setEditUser(user);
   }, [user]);

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
            swal("Saved!", "", "success");
         })
         .catch((err) => {
            swal("Error!", err.response.data.message, "error");
         });

      const logInfo = JSON.stringify(editUser);
      localStorage.setItem("logInfo", logInfo);

      navigate("/profile");
   };

   const onConfirmDelete = (e) => {
      e.preventDefault();
      const id = editUser.id;

      swal("Warning!", `Do want to delete? "${editUser.first_name}"`, "warning", { dangerMode: true, buttons: true }).then((confirm) => {
         if (confirm) {
            axios
               .delete(`/users/delete/${id}`)
               .then((res) => {
                  // console.log(res.data);
                  swal("Deleted", res.data.message, "success");
                  setIsAdmin({});
                  localStorage.removeItem("logInfo");
                  localStorage.removeItem("saveTracks");
                  navigate("/");
               })
               .catch((err) => {
                  swal("Error", "Unable to delete", "error");
               });
         }
      });
   };

   return (
      <div className="editProfileContainer">
         <div className="profile">
            <h2>Update Information</h2>
            <button type="button" className="delete" onClick={onConfirmDelete}>
               Delete
            </button>

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
      </div>
   );
};

export default EditProfile;
