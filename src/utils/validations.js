import { allCities } from "./all-cities";

export const isFirstNameValid = (str) => {
  return (
    str
    .split('')
    .every(char => char.toLowerCase() !== char.toUpperCase()) && str.length >= 2
  )
}

export const isLastNameValid = (str) => {
  return (
    str
    .split('')
    .every(char => char.toLowerCase() !== char.toUpperCase()) && str.length >= 2
  )
}

export function isEmailValid(emailAddress) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}

export const isCityValid = (cityName) => {
  for (let city of allCities) {
    if (cityName.toLowerCase() === city.toLowerCase()) return true; 
  }
}

console.log(allCities);

export const isNumberKey = (e) => {
  // const regex = /[0-9]|\./;
  // if (!regex.test(e.key)) {
  //   e.preventDefault();
  // } else {
  //   e.key
  // }
  const x = e.which || e.keycode;
  if (x >= 48 && x <= 57) {
    // return true;
    e.key;
  } else {
    // return false;
    e.preventDefault();
  }
}

export const isPhoneValid = (number) => {
  if (number[0] && number[1] && number[2] && number[3]) {
    return true
  }
  return false
}