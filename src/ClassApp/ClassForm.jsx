import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";

import {isFirstNameValid, isLastNameValid, isEmailValid, isCityValid, isPhoneValid } from "../utils/validations";

import { PhoneInput } from "./ClassPhoneInput";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "City is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

//this is the form section with labels and inputs along with error msgs in case of invalid entry
export class ClassForm extends Component {

  state = {
    firstNameInput: '',
    lastNameInput: '',
    emailInput: '',
    cityInput: '',
    phoneInputState: ['', '', '', ''],
    isSubmitted: false
  }

  render() {

    const {handleUserInfo} = this.props;

    const {firstNameInput, lastNameInput, emailInput, cityInput, phoneInputState, isSubmitted} = this.state;

    const isFirstNameInputValid = isFirstNameValid(firstNameInput);
    const isLastNameInputValid = isLastNameValid(lastNameInput);
    const isEmailInputValid = isEmailValid(emailInput);
    const isCityInputValid = isCityValid(cityInput);
    const isPhoneInputValid = isPhoneValid(phoneInputState);

    const oneOrMoreFieldInvalid = !isFirstNameInputValid || !isLastNameInputValid || !isEmailInputValid || !isCityInputValid || !isPhoneInputValid;

    const showFirstNameError = isSubmitted && !isFirstNameInputValid;
    const showLastNameError = isSubmitted && !isLastNameInputValid;
    const showEmailError = isSubmitted && !isEmailInputValid;
    const showCityError = isSubmitted && !isCityInputValid;
    const showPhoneError = isSubmitted && !isPhoneInputValid;

    const reset = () => {
      this.setState(() => {
        return {firstNameInput: '',
        lastNameInput: '',
        emailInput: '',
        cityInput: '',
        phoneInputState: ['', '', '', ''],
        isSubmitted: false}
      })
    }

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.setState(() => {
          return {isSubmitted: true}
        })
        if (oneOrMoreFieldInvalid) {
          alert('Bad data input!')
        } else {
          handleUserInfo({
            firstName: firstNameInput,
            lastName: lastNameInput,
            email: emailInput,
            city: cityInput,
            phone: phoneInputState
          })
          reset();
        }
      }}>
        <u>
          <h3>User Information Form</h3>
        </u>

        {/* first name input */}
        <div className="input-wrap">
          <label>{"First Name"}:</label>
          <input
            type="text"
            value={firstNameInput}
            onChange={(e) => this.setState(() => {
              return {firstNameInput: e.target.value}
            })}
            placeholder="Bilbo" />
        </div>
        {showFirstNameError && (
          <ErrorMessage message={firstNameErrorMessage} />
        )}

        {/* last name input */}
        <div className="input-wrap">
          <label>{"Last Name"}:</label>
          <input
            type="text"
            value={lastNameInput}
            onChange={(e) => this.setState(() => {
              return {lastNameInput: e.target.value}
            })}
            placeholder="Baggins" />
        </div>
        {showLastNameError && (
          <ErrorMessage message={lastNameErrorMessage} />
        )}

        {/* Email Input */}
        <div className="input-wrap">
          <label>{"Email"}:</label>
          <input
            type="text"
            value={emailInput}
            onChange={(e) => this.setState(() => {
              return {emailInput: e.target.value}
            })}
            placeholder="bilbo-baggins@adventurehobbits.net" />
        </div>
        {showEmailError && (
          <ErrorMessage message={emailErrorMessage} />
        )}

        {/* City Input */}
        <div className="input-wrap">
          <label>{"City"}:</label>
          <input
            list="cities"
            type="text"
            value={cityInput}
            onChange={(e) => this.setState(() => {
              return {cityInput: e.target.value}
            })}
            placeholder="Hobbiton" />
        </div>
        {showCityError && (
          <ErrorMessage message={cityErrorMessage} />
        )}

        <PhoneInput phoneInputState={phoneInputState} handlePhoneInputState={(updatedNum) => this.setState(() => {
          return {phoneInputState: updatedNum}
        })}/>
        {showPhoneError && (
          <ErrorMessage message={phoneNumberErrorMessage}  />
        )}
        
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
