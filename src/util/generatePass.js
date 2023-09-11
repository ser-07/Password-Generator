import { lower, upper, nums, symbols } from "./getRandomChars";

// console.log(lower, upper, nums, symbols);
const fnArr = [upper, lower, nums, symbols];

export const generatePassword = (len, checkedArr) => {
  console.log(len, checkedArr);
  let pass_String = "";

  let pos = 0;
  //   for (let i = 0; i < len; i++) {
  //     // console.log("Here", fnArr[pos % 4]());
  //     if (checkedArr[pos % 4]) pass_String += fnArr[pos % 4]();
  //     pos++;
  //   }

  while (pass_String.length < len) {
    if (checkedArr[pos % 4]) pass_String += fnArr[pos % 4]();
    pos++;
  }
  console.log(pass_String);
  return pass_String;
};
