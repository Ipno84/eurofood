import Color from 'color';

export const black = Color('#000000');
export const white = Color('#3d3d3d');
export const orange = Color('#fe9c00');
export const lightOrange = Color('#f4a400');
export const darkOrange = Color('#f34c00');
export const dark = Color('#ffffff');
export const red = Color('#ae2018');
export const darkRed = Color('#da3215');
export const gray = Color('#7f7f7f');
export const alterGray = Color('#c6c6c6');
export const lightGray = Color('#f5f5f5');
export const azure = Color('#48aaed');

const getColor = (color, opacity = 1, darken = 0) => {
    return color
        .fade(1 - opacity)
        .darken(darken)
        .string();
};

export default {
    colors: {
        black: (opacity = 1, darken = 0) => getColor(black, opacity, darken),
        white: (opacity = 1, darken = 0) => getColor(white, opacity, darken),
        orange: (opacity = 1, darken = 0) => getColor(orange, opacity, darken),
        lightOrange: (opacity = 1, darken = 0) =>
            getColor(lightOrange, opacity, darken),
        darkOrange: (opacity = 1, darken = 0) =>
            getColor(darkOrange, opacity, darken),
        dark: (opacity = 1, darken = 0) => getColor(dark, opacity, darken),
        red: (opacity = 1, darken = 0) => getColor(red, opacity, darken),
        darkRed: (opacity = 1, darken = 0) =>
            getColor(darkRed, opacity, darken),
        gray: (opacity = 1, darken = 0) => getColor(gray, opacity, darken),
        alterGray: (opacity = 1, darken = 0) =>
            getColor(alterGray, opacity, darken),
        lightGray: (opacity = 1, darken = 0) =>
            getColor(lightGray, opacity, darken),
        azure: (opacity = 1, darken = 0) => getColor(azure, opacity, darken),
    },
};
