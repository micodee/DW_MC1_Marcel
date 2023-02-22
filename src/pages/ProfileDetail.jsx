import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../assets/data.json";

const ProfileDetail = () => {
  const params = useParams();
  const id = parseInt(params.id);
  console.log(id);
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          backgroundColor: "#808080",
          width: "768px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: ".65rem",
        }}
      >
        <img
          src={data[id].image}
          alt="profile"
          style={{
            width: "80px",
            height: "80px",
            border: "4px solid red",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "1rem",
            gap: ".5rem",
          }}
        >
          <p>@{data[id].username} </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              color: "black",
              fontWeight: "700",
            }}
          >
            <p>{data[id].follower}</p>
            <p>{data[id].following}</p>
          </div>
          <div
            style={{
              marginBottom: "2rem",
              display: "flex",
              gap: "1rem",
              color: "black",
              fontWeight: "700",
            }}
          >
            <p>Followers</p>
            <p>Following</p>
          </div>
        </div>
      </div>
      <p
        style={{ color: "black", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        back
      </p>
    </div>
  );
};

export default ProfileDetail;
