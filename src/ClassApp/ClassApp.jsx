import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { ProfileInformation } from "../ProfileInformation";

// const defaultUser = {
//   firstName: "Default",
//   lastName: "Default",
//   email: "default@default.com",
//   city: "Hobbiton",
//   phone: "1234567",
// };

export class ClassApp extends Component {

  state = {
    userInformation: ''
  }

  render() {

    const {userInformation} = this.state;

    return (
      <>
        <h2>Class</h2>
        <ProfileInformation userData={userInformation} />
        <ClassForm handleUserInfo={(updatedUser) => {
          this.setState({
            ...this.state,
            userInformation: updatedUser
          })
        }} />
      </>
    );
  }
}
