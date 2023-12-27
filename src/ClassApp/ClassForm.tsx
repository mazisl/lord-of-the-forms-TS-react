import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";

import {
  isFirstNameValid,
  isLastNameValid,
  isEmailValid,
  isCityValid,
  isPhoneValid,
} from "../utils/validations";

import { ClassTextInput } from "./ClassTextInput";
import { PhoneInput } from "./ClassPhoneInput";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "City is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

import type { UserInfoType } from "../ProfileInformation";
import type { PhoneInputState } from "../types";

interface ClassFormProps {
  handleUserInfo: (updatedUserInfo: UserInfoType) => void;
}

type ClassFormState = {
  firstNameInput: string;
  lastNameInput: string;
  emailInput: string;
  cityInput: string;
  phoneInputState: PhoneInputState;
  isSubmitted: boolean;
}

//this is the form section with labels and inputs along with error msgs in case of invalid entry
export class ClassForm extends Component<ClassFormProps, ClassFormState> {
  state: ClassFormState = {
    firstNameInput: "",
    lastNameInput: "",
    emailInput: "",
    cityInput: "",
    phoneInputState: ["", "", "", ""],
    isSubmitted: false,
  };

  render() {
    const { handleUserInfo } = this.props;

    const {
      firstNameInput,
      lastNameInput,
      emailInput,
      cityInput,
      phoneInputState,
      isSubmitted,
    } = this.state;

    const isFirstNameInputValid = isFirstNameValid(firstNameInput);
    const isLastNameInputValid = isLastNameValid(lastNameInput);
    const isEmailInputValid = isEmailValid(emailInput);
    const isCityInputValid = isCityValid(cityInput);
    const isPhoneInputValid = isPhoneValid(phoneInputState);

    const oneOrMoreFieldInvalid =
      !isFirstNameInputValid ||
      !isLastNameInputValid ||
      !isEmailInputValid ||
      !isCityInputValid ||
      !isPhoneInputValid;

    const showFirstNameError = isSubmitted && !isFirstNameInputValid;
    const showLastNameError = isSubmitted && !isLastNameInputValid;
    const showEmailError = isSubmitted && !isEmailInputValid;
    const showCityError = isSubmitted && !isCityInputValid;
    const showPhoneError = isSubmitted && !isPhoneInputValid;

    const reset = () => {
      this.setState(() => {
        return {
          firstNameInput: "",
          lastNameInput: "",
          emailInput: "",
          cityInput: "",
          phoneInputState: ["", "", "", ""],
          isSubmitted: false,
        };
      });
    };

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.setState(() => {
            return { isSubmitted: true };
          });
          if (oneOrMoreFieldInvalid) {
            alert("Bad data input!");
          } else {
            handleUserInfo({
              firstName: firstNameInput,
              lastName: lastNameInput,
              email: emailInput,
              city: cityInput,
              phone: phoneInputState,
            });
            reset();
          }
        }}
      >
        <u>
          <h3>User Information Form</h3>
        </u>

        <ClassTextInput
          label={"First Name"}
          inputProps={{
            value: firstNameInput,
            onChange: (e: React.FormEvent<HTMLInputElement>) =>
              this.setState(() => {
                return { firstNameInput: e.currentTarget.value };
              }),
            placeholder: "Bilbo",
          }}
        />
        {showFirstNameError && <ErrorMessage message={firstNameErrorMessage} />}

        <ClassTextInput
          label={"Last Name"}
          inputProps={{
            value: lastNameInput,
            onChange: (e: React.FormEvent<HTMLInputElement>) =>
              this.setState(() => {
                return { lastNameInput: e.currentTarget.value };
              }),
            placeholder: "Baggins",
          }}
        />
        {showLastNameError && <ErrorMessage message={lastNameErrorMessage} />}

        <ClassTextInput
          label={"Email"}
          inputProps={{
            value: emailInput,
            onChange: (e: React.FormEvent<HTMLInputElement>) =>
              this.setState(() => {
                return { emailInput: e.currentTarget.value };
              }),
            placeholder: "bilbo-baggins@adventurehobbits.net",
          }}
        />
        {showEmailError && <ErrorMessage message={emailErrorMessage} />}

        <ClassTextInput
          label={"City"}
          inputProps={{
            list: "cities",
            value: cityInput,
            onChange: (e: React.FormEvent<HTMLInputElement>) =>
              this.setState(() => {
                return { cityInput: e.currentTarget.value };
              }),
            placeholder: "Hobbiton",
          }}
        />
        {showCityError && <ErrorMessage message={cityErrorMessage} />}

        <PhoneInput
          phoneInputState={phoneInputState}
          handlePhoneInputState={(updatedNum) =>
            this.setState(() => {
              return { phoneInputState: updatedNum };
            })
          }
        />
        {showPhoneError && <ErrorMessage message={phoneNumberErrorMessage} />}

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
