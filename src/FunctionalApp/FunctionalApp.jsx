import { useState } from "react";

import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";

export const FunctionalApp = () => {
  const [userInformation, setUserInformation] = useState(null);

  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation userData={userInformation} />
      <FunctionalForm
        handleUserInfo={(updatedUser) => {
          setUserInformation(updatedUser);
        }}
      />
    </>
  );
};
