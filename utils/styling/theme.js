const theme = {
  breakpoints: { xs: '0px', sm: '540px', md: '820px', lg: '1060px', xl: '1200px' },
  fontFamily: {
    regular: "'Open Sans', Helvetica, Arial, sans-serif",
    title: "'Secret Winter', cursive",
    subTitle: "'Caviar Dreams', 'Open Sans', Helvetica, Arial, sans-serif"
  },
  colors: {
    primaryLight: '#90c0f6',
    primary: '#3b7cc9',
    primaryDark: '#2e66a6',
    secondaryLight: '#dde2ff',
    secondary: '#1271a4',
    secondaryDark: '#063A56',
    tertiaryLight: '#f8d4cc',
    tertiary: '#DC00E4',
    tertiaryDark: '#DC00E4',
    error: '#D80033',
    warning: '#f9be8e',
    success: '#3C763D',

    black: '#222',
    darkGrey: '#444',
    grey: '#777',
    mediumGrey: '#999',
    lightGrey: '#BBB',
    ultraLightGrey: '#DDDDDD',
    background: '#F7F7F7',
    white: '#FFF',

    navText: '#444',
    navSeparator: '#AAA',
    navBackground: '#EEE',

    // lightRose: '#f8d4cc',
    // rose: '#DC00E4',
    // lightPurple: '#e6d5f6',  // primaryLight
    // purple: '#B500DF',
    // darkPurple: '#976694',
    // darkBlue: '#063A56',
    // violet: '#bd95f6',
    // blue: '#B159FA',
    // lightBlue: '#dde2ff', // secondaryLight
    // green: '#3ea542',
    // darkGreen: '#3C763D',
    // lightGreen: '#DFF0D8',
    // yellow: '#f7a02d',
    // lightOrange: '#f9be8e', // warning
    // orange: '#ED7600',
    // darkOrange: '#FF4500',
    // red: '#E13434',
    // darkRed: '#D80033',
    //
    // ochreRed: '#A94442',
    // lightOchreRed: '#F2DEDE',
    // ochreOrange: '#8A6D3B',
    // lightOchreOrange: '#FCF8E3',
    transparent: 'transparent',
    facebook: '#3B5998',
    linkedin: '#2F4A84',
    doctolib: '#0596de'
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
  },
  buttons: {
    classic: {
      font: 'white',
      bg: 'primaryDark',
      border: 'primaryDark',
      hoverFont: 'primaryDark',
      hoverBg: 'transparent'
    },
    classicNoHover: {
      font: 'white',
      bg: 'secondaryDark',
      border: 'secondaryDark',
      hoverBg: 'secondaryDark'
    },
    classicLight: {
      font: 'white',
      bg: 'secondaryDark',
      border: 'white',
      hoverFont: 'secondaryDark',
      hoverBg: 'white'
    },
    classicHoverLight: {
      font: 'white',
      bg: 'secondaryDark',
      border: 'secondaryDark',
      hoverFont: 'white',
      hoverBg: 'transparent',
      hoverBorder: 'white'
    },
    darkGrey: {
      font: 'white',
      bg: 'lightGrey',
      border: 'lightGrey',
      hoverFont: 'white',
      hoverBg: 'primaryDark'
    }
  }
};

export default theme;
