import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { ProfileInformation, UserInfoType } from "../ProfileInformation";

type ClassAppState = {
  userInformation: null | UserInfoType
}

//bcoz there are no props we use <Record<never, never>>
//state has been given type of ClassAppState
//so 1st generic arg is for props and 2nd generic arg is for state
export class ClassApp extends Component<Record<never, never>, ClassAppState> {
  state: ClassAppState = {
    userInformation: null,
  };

  render() {
    const { userInformation } = this.state;

    return (
      <>
        <h2>Class</h2>
        <ProfileInformation userData={userInformation} />
        <ClassForm
          handleUserInfo={(updatedUser) => {
            this.setState({
              ...this.state,
              userInformation: updatedUser,
            });
          }}
        />
      </>
    );
  }
}
