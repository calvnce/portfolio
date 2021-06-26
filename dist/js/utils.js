/*
  * This file contains the functions that are reused
  * throught the project
*/

/*
* This function checks if the string is only in lower case
*/

function isLower(str) {
  str = str.replace(/[^a-zA-Z ]/g, '');
  const chars = str.split(/(?:)/u);
  let lower = true;

  for (let i = 0; i < chars.length; i += 1) {
    if (chars[i] !== chars[i].toLowerCase()) {
      lower = false;
      break;
    }
  }
  return lower;
}

export {
  // eslint-disable-next-line import/prefer-default-export
  isLower,
};