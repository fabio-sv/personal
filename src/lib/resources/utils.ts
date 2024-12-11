export const randomRGBValue = () => Math.floor(Math.random() * 256);

export const intToHex = (value: number) => value.toString(16).padStart(2, "0");

export const getRandomRGBAHexColor = () => {
  const r = intToHex(randomRGBValue());
  const g = intToHex(randomRGBValue());
  const b = intToHex(randomRGBValue());
  const a = intToHex(Math.round(Math.random() * 255));

  return `#${r}${g}${b}${a}`;
};
