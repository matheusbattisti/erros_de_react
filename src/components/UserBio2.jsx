import React from "react";

function UserBio2({ user }) {
  return <p>Bio: {user.bio?.length > 0 ? user.bio : "Sem bio disponível"}</p>;
}

export default UserBio2;
