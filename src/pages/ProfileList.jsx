import React from 'react'
import { useNavigate } from 'react-router-dom';
import data from "../assets/data.json"

const ProfileList = () => {
 const navigate = useNavigate();
  return (
    <div>
     {data.map((item,index) => {
      return(
     <div key={index} style={{ backgroundColor: "#2b2d42", width: "768px", display: "flex", justifyContent: "start", marginBottom: ".65rem", cursor: "pointer" }} onClick={() => navigate(`/detail/${index}`)}>
      <img src={item.image} alt="profile" width="50px" height="50px" style={{ borderRadius: "50%" }} />
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "start", marginLeft: "1rem" }}>
      <p>@{item.username}</p>
      <p>Followers : {item.follower}</p>
      </div>
     </div>
     )
     })}

    </div>
  )
}

export default ProfileList