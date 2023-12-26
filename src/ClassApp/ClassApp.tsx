import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { ProfileInformation } from "../ProfileInformation";

export class ClassApp extends Component {
  state = {
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
