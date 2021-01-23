import { DefaultTheme, DarkTheme } from 'react-native-paper';

// #270afe
// #6d38ff
// #ffb638
// #404448
// #8e92a2
// #fefdff
// #edf0fc
// #f5f6fc
// #eef1fc

const dark = {
  dark: true,
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
};

const light = {
  dark: false,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export { light, dark };
