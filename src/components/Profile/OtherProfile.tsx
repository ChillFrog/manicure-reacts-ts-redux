import React, { useState } from "react";
import { authApi } from "../../services/authAPI";

function OtherProfile() {
  const [userId, setUserId] = useState<string>("");
  const {
    data: userProfile,
    isLoading,
    isError,
  } = authApi.useGetUserProfileByIdQuery("rUxWiXLpmChalufbnuTPVPs9ueD3");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError && !userProfile) {
    return <div>Error fetching user profile</div>;
  }

  return (
    <div>
      <h1>{userProfile?.displayName}</h1>
      <p>{userProfile?.email}</p>
      {userProfile?.photoURL && (
        <img src={userProfile?.photoURL} alt={userProfile?.displayName} />
      )}
    </div>
  );
}

export default OtherProfile;
