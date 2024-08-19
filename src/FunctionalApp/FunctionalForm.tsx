import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";

import {
  isFirstNameValid,
  isLastNameValid,
  isEmailValid,
  isCityValid,
  isPhoneValid,
} from "../utils/validations";

import { FunctionalTextInput } from "./FunctionalTextInput";
import { PhoneInput } from "./FunctionalPhoneInput";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "City is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

//this is the form section with labels and inputs along with error msgs in case of invalid entry
import type { UserInfoType } from "../ProfileInformation";

interface FunctionalFormProps {
  handleUserInfo: (updatedUserInfo: UserInfoType) => void;
}

//TS tuple for initial phoneInputState
import type { PhoneInputState } from "../types";

export const FunctionalForm = ({ handleUserInfo }: FunctionalFormProps) => {
  
  const [firstNameInput, setFirstNameInput] = useState<string>("");
  const [lastNameInput, setLastNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [cityInput, setCityInput] = useState<string>("");
  const [phoneInputState, setPhoneInputState] = useState<PhoneInputState>(["", "", "", ""]);

  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setFirstNameInput("");
    setLastNameInput("");
    setEmailInput("");
    setCityInput("");
    setPhoneInputState(["", "", "", ""]);
    setIsSubmitted(false);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSubmitted(true);
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

      <FunctionalTextInput
        label={"First Name"}
        inputProps={{
          value: firstNameInput,
          onChange: (e: React.FormEvent<HTMLInputElement>) => setFirstNameInput(e.currentTarget.value),
          placeholder: "Bilbo",
        }}
      />
      {showFirstNameError && <ErrorMessage message={firstNameErrorMessage} />}

      <FunctionalTextInput
        label={"Last Name"}
        inputProps={{
          value: lastNameInput,
          onChange: (e: React.FormEvent<HTMLInputElement>) => setLastNameInput(e.currentTarget.value),
          placeholder: "Baggins",
        }}
      />
      {showLastNameError && <ErrorMessage message={lastNameErrorMessage} />}

      <FunctionalTextInput
        label={"Email"}
        inputProps={{
          value: emailInput,
          onChange: (e: React.FormEvent<HTMLInputElement>) => setEmailInput(e.currentTarget.value),
          placeholder: "bilbo-baggins@adventurehobbits.net",
        }}
      />
      {showEmailError && <ErrorMessage message={emailErrorMessage} />}

      <FunctionalTextInput
        label={"City"}
        inputProps={{
          list: "cities",
          value: cityInput,
          onChange: (e: React.FormEvent<HTMLInputElement>) => setCityInput(e.currentTarget.value),
          placeholder: "Hobbiton",
        }}
      />
      {showCityError && <ErrorMessage message={cityErrorMessage} />}

      {/* phone input */}
      <PhoneInput
        phoneInputState={phoneInputState}
        handlePhoneInputState={(updatedNum) => setPhoneInputState(updatedNum)}
      />
      {showPhoneError && <ErrorMessage message={phoneNumberErrorMessage} />}

      <input type="submit" value="Submit" />
    </form>
  );
};
