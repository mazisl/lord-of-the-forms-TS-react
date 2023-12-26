export const capitalize = (name: string): string => {
  // this func capitalizes first letter of name
  // `capitalize("jOn")` should output `"Jon"`
  let firstLetter = name.charAt(0).toUpperCase();
  let nameWithCapFirstLetterArr: string[] = [];
  for (let i = 1; i < name.length; i++) {
    nameWithCapFirstLetterArr.push(name[i].toLowerCase());
  }
  nameWithCapFirstLetterArr.unshift(firstLetter);
  return nameWithCapFirstLetterArr.join("");
};

export const formatPhoneNumber = (number: string[]): string => {
  // `formatPhoneNumber("1234567")` should be `"12-34-56-7"`
  return `${number[0]}-${number[1]}-${number[2]}-${number[3]}`;
};
