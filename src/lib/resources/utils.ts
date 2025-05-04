export const randomRGBValue = () => Math.floor(Math.random() * 256);

export const intToHex = (value: number) => value.toString(16).padStart(2, "0");

export const getRandomRGBAHexColor = () => {
  const warmColors = [
    '#FF5733FF', // Fiery Red-Orange
    '#FF6F61FF', // Coral
    '#FF7F50FF', // Coral Orange
    '#FF8C42FF', // Deep Orange
    '#FF9F1CFF', // Golden Orange
    '#FFA07AFF', // Light Salmon
    '#FF6347FF', // Tomato
    '#FF4500FF', // Orange Red
    '#FFB347FF', // Pastel Orange
    '#FFD700FF', // Gold
    '#E9967AFF', // Dark Salmon
    '#FA8072FF', // Salmon
    '#F08080FF', // Light Coral
    '#FF5E5BFF', // Warm Red
    '#FF4040FF', // Bright Red
    '#CD5C5CFF', // Indian Red
    '#DC143CFF', // Crimson
    '#E25822FF', // Flame
    '#D2691EFF', // Chocolate
    '#FFA500FF'  // Orange
  ];

  const randomIndex = Math.floor(Math.random() * warmColors.length);
  return warmColors[randomIndex];
};


export function getRandomNiceColor() {
  const niceColors = [
    // Warm Colors
    '#FF5733FF', '#FF6F61FF', '#FF7F50FF', '#FF8C42FF', '#FF9F1CFF',
    '#FFA07AFF', '#FF6347FF', '#FF4500FF', '#FFB347FF', '#FFD700FF',
    '#E9967AFF', '#FA8072FF', '#F08080FF', '#FF5E5BFF', '#FF4040FF',
    '#CD5C5CFF', '#DC143CFF', '#E25822FF', '#D2691EFF', '#FFA500FF',

    // Cool & Calm Colors
    '#00BFFFEE', // Deep Sky Blue
    '#1E90FFFF', // Dodger Blue
    '#7B68EEFF', // Medium Slate Blue
    '#8A2BE2FF', // Blue Violet
    '#48D1CCFF', // Medium Turquoise
    '#5F9EA0FF', // Cadet Blue
    '#6495EDFF', // Cornflower Blue
    '#40E0D0FF', // Turquoise
    '#7FFFD4FF', // Aquamarine
    '#4682B4FF', // Steel Blue

    // Pastels & Soft Colors
    '#FFB6C1FF', // Light Pink
    '#FFDAB9FF', // Peach Puff
    '#E6E6FAFF', // Lavender
    '#FFFACDFF', // Lemon Chiffon
    '#D8BFD8FF', // Thistle
    '#F5DEB3FF', // Wheat
    '#FFE4E1FF', // Misty Rose
    '#F0E68CFF', // Khaki
    '#E0FFFFDD', // Light Cyan (with semi-transparency)

    // Vivid & Playful Colors
    '#FF00FFFF', // Fuchsia
    '#00FF7FFF', // Spring Green
    '#ADFF2FFF', // Green Yellow
    '#FF1493FF', // Deep Pink
    '#00CED1FF', // Dark Turquoise
    '#EE82EEFF', // Violet
    '#DA70D6FF', // Orchid
    '#BA55D3FF', // Medium Orchid
    '#FF69B4FF', // Hot Pink
  ];

  const randomIndex = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomIndex];
}
