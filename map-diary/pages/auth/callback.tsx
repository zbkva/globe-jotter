import React from "react";
import useUser from "../../hooks/userHook";

const Callback: React.FC = () => {
  const { userResponse, isLoading, isError } = useUser();

  console.log(userResponse);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {userResponse && userResponse.isAuthenticated ? (
        <p>{userResponse.user.firstName} Logged in successfully</p>
      ) : (
        <p>Not Authenticated</p>
      )}
    </>
  );
};

export default Callback;
