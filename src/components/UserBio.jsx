import React from "react";

function UserBio({ user }) {
  return <p>Bio: {user.bio.length > 0 ? user.bio : "Sem bio disponível"}</p>;
}

export default UserBio;
