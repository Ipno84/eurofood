import {
    alterGray,
    azure,
    black,
    dark,
    darkOrange,
    darkRed,
    gray,
    lightGray,
    lightOrange,
    orange,
    red,
    white,
} from './../constants/ThemeConstants';

const ThemeColors = {
    black,
    white,
    orange,
    lightOrange,
    darkOrange,
    dark,
    red,
    darkRed,
    gray,
    alterGray,
    lightGray,
    azure,
};

export default function getColor(colors) {
    const colorsValues = Object.values(colors);
    const colorsKeys = Object.keys(colors);
    const index = colorsValues.findIndex(e => e);
    const key = colorsKeys[index];
    if (key && ThemeColors[key]) return ThemeColors[key].toString();
    return dark.toString();
}
