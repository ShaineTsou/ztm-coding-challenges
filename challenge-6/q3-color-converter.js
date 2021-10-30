// --- Test Cases ----
const hex1 = "#af01d9";
// -> [175, 1, 217]

const hex2 = "#AF01D9";
// -> [175, 1, 217]

const rgbArr1 = [221, 111, 147];
// -> "#DD6F93"

const rgbArr2 = [12, 111, 137];
// -> "#0C6F89"

const wrongFormat1 = "123456#";
// -> "Wrong Format"

const wrongFormat2 = "helloooo";
// -> "Wrong Format"

const wrongFormat3 = true;
// -> "Wrong Format"

const wrongFormat4 = [-1, 99, 255];
// -> "Wrong Format"

const wrongFormat5 = [0, 99, 255, 5];
// -> "Wrong Format"

const checkColorType = function (color) {
  let regex = /^#[0-9a-fA-F]{6}$/;

  if (typeof color === "string" && regex.test(color)) {
    return "hex";
  }

  if (Array.isArray(color) && color.length === 3) {
    for (let num of color) {
      if (
        typeof num !== "number" ||
        !Number.isInteger(num) ||
        num < 0 ||
        num > 255
      ) {
        return "error";
      }
    }
    return "rgb";
  }

  return "error";
};

const rgbToHex = function (rgbArr) {
  let hex = "#";

  for (let color of rgbArr) {
    const hexStr = color.toString(16);

    if (hexStr.length === 1) {
      hex += `0${hexStr}`;
    } else {
      hex += hexStr;
    }
  }

  return hex.toUpperCase();
};

const hexToRgb = function (hex) {
  const redRgb = parseInt(hex.slice(1, 3), 16);
  const greenRgb = parseInt(hex.slice(3, 5), 16);
  const blueRgb = parseInt(hex.slice(5, 7), 16);

  return [redRgb, greenRgb, blueRgb];
};

const convertColor = function (color) {
  // Check param type
  const type = checkColorType(color);

  if (type === "rgb") {
    return rgbToHex(color);
  } else if (type === "hex") {
    return hexToRgb(color);
  } else {
    return "Wrong Format";
  }
};

console.log(convertColor(hex1));
console.log(convertColor(hex2));
console.log(convertColor(rgbArr1));
console.log(convertColor(rgbArr2));
console.log(convertColor(wrongFormat1));
console.log(convertColor(wrongFormat2));
console.log(convertColor(wrongFormat3));
console.log(convertColor(wrongFormat4));
console.log(convertColor(wrongFormat5));
