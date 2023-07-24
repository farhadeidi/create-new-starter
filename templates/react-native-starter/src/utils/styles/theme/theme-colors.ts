import { twColors } from '../colors';

declare global {
  type ThemeColors = { [K in keyof typeof themeLightColors]: string };
}

export const themeLightColors = {
  screen: '#ffffff',
  screenAlt: '#F5F7FA',
  card: '#ffffff',
  brand: '#148CFF',
  brandSecondary: '#FFA245',

  c1: '#182129',
  c2: '#3C4A56',
  c3: '#838B92',
  c4: '#C2C4C7',
  c5: '#DADDE0',
  c6: '#F5F7FA',

  error: '#EB5757',
  warning: '#F2C94C',
  success: '#27AE60',
  inverted: '#000000',
  border: twColors.gray[200],

  white: '#ffffff',
  black: '#000000',

  skeletonColor1: '#ffffff',
  skeletonColor2: '#f1f1f1',
  skeletonColor3: '#f2f2f2',
  onboardingCoverGradientStart: 'rgba(255, 255, 255, 0)',
  onboardingCoverGradientEnd: 'rgba(255, 255, 255, 1)',
};

export const themeDarkColors: ThemeColors = {
  screen: '#000000',
  screenAlt: '#000000',
  card: '#111827',
  brand: '#148CFF',
  brandSecondary: '#FFA245',

  c1: '#ffffff',
  c2: twColors.gray[200],
  c3: twColors.gray[500],
  c4: twColors.gray[700],
  c5: twColors.gray[700],
  c6: twColors.gray[800],

  error: '#EB5757',
  warning: '#F2C94C',
  success: '#27AE60',
  inverted: '#ffffff',
  border: twColors.gray[700],
  white: '#ffffff',
  black: '#000000',
  skeletonColor1: '#000000',
  skeletonColor2: '#111111',
  skeletonColor3: '#222222',
  onboardingCoverGradientStart: 'rgba(0, 0, 0, 0)',
  onboardingCoverGradientEnd: 'rgba(0, 0, 0, 1)',
};

export const themeColors = {
  light: themeLightColors,
  dark: themeDarkColors,
};

export const navigationLightTheme = {
  dark: false,
  colors: {
    primary: themeColors.light.brand,
    background: themeColors.light.screen,
    card: themeColors.light.screen,
    text: themeColors.light.c1,
    border: themeColors.light.border,
    notification: themeColors.light.brand,
  },
};

export const navigationDarkTheme = {
  dark: true,
  colors: {
    primary: themeColors.dark.brand,
    background: themeColors.dark.screen,
    card: themeColors.dark.screen,
    text: themeColors.dark.c1,
    border: themeColors.dark.border,
    notification: themeColors.dark.brand,
  },
};

export const getNavigationTheme = (isDark = false) => {
  if (isDark) {
    return navigationDarkTheme;
  }

  return navigationLightTheme;
};
