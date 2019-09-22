/*
 * Mapping to the old media-queries
 * --mobile = sm
 * --large-mobile = smd
 * --pad = md
 * --large-pad = mdl
 * --small-desktop = lg
 * --desktop = xl
 */
const theme = {
  breakpoints: { xs: '0px', sm: '540px', md: '820px', lg: '1060px', xl: '1200px' },
  fontFamily: {
    openSans: "'Open Sans', Helvetica, Arial, sans-serif",
    roboto: "'Roboto', Helvetica, Arial, sans-serif",
    montserrat: "'Montserrat', 'Open Sans', Helvetica, Arial, sans-serif",
    noto: "'Noto Serif', 'Open Sans', Helvetica, Arial, sans-serif",
    lobster: "'Lobster', cursive",
    century: "'Century Gothic', 'Open Sans', Helvetica, Arial, sans-serif",
    movingSkate: "'Moving Skate', cursive",
    caviarDreams: "'Caviar Dreams', 'Open Sans', Helvetica, Arial, sans-serif"
  },
  colors: {
    lightRose: '#f8d4cc',
    rose: '#DC00E4',
    lightPurple: '#e6d5f6',
    purple: '#B500DF',
    darkPurple: '#976694',
    darkBlue: '#063A56',
    violet: '#bd95f6',
    blue: '#B159FA',
    lightBlue: '#dde2ff',
    green: '#3ea542',
    darkGreen: '#3C763D',
    lightGreen: '#DFF0D8',
    yellow: '#f7a02d',
    lightOrange: '#f9be8e',
    orange: '#ED7600',
    darkOrange: '#FF4500',
    red: '#E13434',
    darkRed: '#D80033',
    black: '#222',
    darkGrey: '#444',
    grey: '#777',
    mediumGrey: '#999',
    lightGrey: '#BBB',
    ultraLightGrey: '#DDDDDD',
    background: '#F7F7F7',
    white: '#FFF',
    ochreRed: '#A94442',
    lightOchreRed: '#F2DEDE',
    ochreOrange: '#8A6D3B',
    lightOchreOrange: '#FCF8E3',
    transparent: 'transparent',
    facebook: '#3B5998',
    facebookDark: '#2F4A84',
    google: '#DD4B3E',
    googleDark: '#BB3A2E',
    twitter: '#27AAE0',
    twitterDark: '#0c7abf',
    pinterest: '#E2012F',
    youtube: '#CD181F',
    instagram: '#3798EF',
    whatsapp: '#41C452'
  },
  zIndex: {
    hamburger: 101,
    navigation: 100,
    overlay: 80,
    fixedDefault: 1,
    absoluteDefault: 0,
    background: -1
  },
  sizes: {
    header: { xs: '45px', sm: '55px' }
  }
};

export default theme;
