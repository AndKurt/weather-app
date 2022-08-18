// Color palette
export const COLOR = {
  WHITE: '#fff',
  BLACK: '#000',
  LIGHT_BLUE: 'rgba(55.0, 55.0, 189.0, 1.0)',
  DARK_BLUE: 'rgba(35.0, 35.0, 76.0, 1.0)',
  LIGHT_GREY: 'rgba(152.0, 152.0, 156.0, 1)',
  DARK_GREY: 'rgba(59.0, 59.0, 61.0, 0.6)',
}

const SPINNER_COLORS = {
  1: '#000',
  2: '#ccc',
  3: '#4fa94d',
  4: '#2f5870',
}

// Font sizes
const FONT_SIZE = {
  S: '15px',
  M: '25px',
  L: '50px',
  XL: '70px',
}

// Line height
const LINE_HEIGHT = {
  S: '20px',
  M: '45px',
  L: '65px',
  XL: '90px',
}

// Line height
const FONT_WEIGHT = {
  300: 300,
  500: 500,
  700: 700,
  900: 900,
}

// Spaces
const SPACES = {
  0: 0,
  5: 5,
  10: 10,
  15: 15,
  30: 30,
  60: 60,
}

// Width
const WIDTH = {
  MAX: '1200px',
  MIN: '300px',
  DATE_MAX: '40%',
  LOCATION_MAX: '40%',
  SELECTOR: '190px',
}

// Height
const HEIGHT = {}

// Media queries
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

const DEVICE = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
}

export const theme = {
  COLOR,
  SPACES,
  FONT_SIZE,
  LINE_HEIGHT,
  FONT_WEIGHT,
  WIDTH,
  HEIGHT,
  SPINNER_COLORS,
  DEVICE,
}
