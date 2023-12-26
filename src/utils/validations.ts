import { allCities } from "./all-cities";

export const isFirstNameValid = (str: string): boolean => {
  return (
    str.split("").every((char) => char.toLowerCase() !== char.toUpperCase()) &&
    str.length >= 2
  );
};

export const isLastNameValid = (str: string): boolean => {
  return (
    str.split("").every((char) => char.toLowerCase() !== char.toUpperCase()) &&
    str.length >= 2
  );
};

export function isEmailValid(emailAddress: string): boolean {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}

export const isCityValid = (cityName: string): boolean => {
  return allCities.some(
    (city) => cityName.toLowerCase() === city.toLowerCase()
  );
};

export const isPhoneValid = (number: string[]): boolean => {
  if (number[0] && number[1] && number[2] && number[3]) {
    return true;
  }
  return false;
};
