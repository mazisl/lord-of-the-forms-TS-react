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
export const FunctionalForm = ({ handleUserInfo }) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [phoneInputState, setPhoneInputState] = useState(["", "", "", ""]);

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
          onChange: (e) => setFirstNameInput(e.target.value),
          placeholder: "Bilbo",
        }}
      />
      {showFirstNameError && <ErrorMessage message={firstNameErrorMessage} />}

      <FunctionalTextInput
        label={"Last Name"}
        inputProps={{
          value: lastNameInput,
          onChange: (e) => setLastNameInput(e.target.value),
          placeholder: "Baggins",
        }}
      />
      {showLastNameError && <ErrorMessage message={lastNameErrorMessage} />}

      <FunctionalTextInput
        label={"Email"}
        inputProps={{
          value: emailInput,
          onChange: (e) => setEmailInput(e.target.value),
          placeholder: "bilbo-baggins@adventurehobbits.net",
        }}
      />
      {showEmailError && <ErrorMessage message={emailErrorMessage} />}

      <FunctionalTextInput
        label={"City"}
        inputProps={{
          list: "cities",
          value: cityInput,
          onChange: (e) => setCityInput(e.target.value),
          placeholder: "Hobbiton",
        }}
      />
      {showCityError && <ErrorMessage message={cityErrorMessage} />}

      {/* <div className="input-wrap">
        <label>{"First Name"}:</label>
        <input 
          type="text" 
          value={firstNameInput}
          onChange={(e) => setFirstNameInput(e.target.value)}
          placeholder="Bilbo" />
      </div>
      {showFirstNameError && (
        <ErrorMessage message={firstNameErrorMessage} />
      )}

      
      <div className="input-wrap">
        <label>{"Last Name"}:</label>
        <input
          type="text" 
          value={lastNameInput}
          onChange={(e) => setLastNameInput(e.target.value)} 
          placeholder="Baggins" />
      </div>
      {showLastNameError && (        
        <ErrorMessage message={lastNameErrorMessage} />
      )}

      
      <div className="input-wrap">
        <label>{"Email"}:</label>
        <input
          type="text"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
         placeholder="bilbo-baggins@adventurehobbits.net" />
      </div>
      {showEmailError && (
        <ErrorMessage message={emailErrorMessage} />
      )}

      
      <div className="input-wrap">
        <label>{"City"}:</label>
        <input
          list="cities"
          type="text" 
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)} 
          placeholder="Hobbiton" 
        />        
      </div>
      {showCityError && (
        <ErrorMessage message={cityErrorMessage} />
      )} */}

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
