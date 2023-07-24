import {
  Colors,
  Spacings,
  ThemeManager,
  Typography,
} from 'react-native-ui-lib';
import { themeColors } from './theme-colors';

export const initTheme = () => {
  require('react-native-ui-lib/config').setConfig({ appScheme: 'default' });

  Colors.loadSchemes({ ...themeColors });

  Spacings.loadSpacings({
    screen: 16,
  });

  Typography.loadTypographies({
    body: {
      fontSize: 16,
      lineHeight: 20,
    },
    sm: {
      fontSize: 12,
      lineHeight: 14,
    },
    xs: {
      fontSize: 10,
      lineHeight: 12,
    },
    h1: {
      fontSize: 32,
      lineHeight: 40,
    },
    h2: {
      fontSize: 24,
      lineHeight: 32,
    },
    h3: {
      fontSize: 20,
      lineHeight: 28,
    },
    h4: {
      fontSize: 16,
      lineHeight: 24,
    },
    h5: {
      fontSize: 14,
      lineHeight: 20,
    },
    h6: {
      fontSize: 12,
      lineHeight: 16,
    },
  });

  ThemeManager.setComponentTheme('Text', {
    c1: true,
    regular: true,
    body: true,
    customTypography: true,
  });

  ThemeManager.setComponentTheme(
    'Button',
    ({
      style,
      large,
      linkColor = Colors.brand,
      text,
      labelStyle,
      disabled,
      ...props
    }: any) => {
      const buttonProps = {
        normal: {
          height: 48,
        },

        large: {
          height: 54,
        },
      };

      return {
        'bg-brand': true,
        h4: true,
        bold: true,
        br30: !props.round,
        outlineColor: Colors.c4,
        style: [
          { height: buttonProps.normal.height },
          large && { height: buttonProps.large.height },
          disabled && { opacity: 0.5 },
          style,
        ],
        linkColor: text ? Colors.c1 : linkColor,
        labelStyle: props.iconSource
          ? [{ paddingHorizontal: 8 }, labelStyle]
          : labelStyle,
        disabled: disabled,
        // disabledBackgroundColor: 'transparent',
        ...props,
      };
    },
  );

  ThemeManager.setComponentTheme('Incubator.TextField', (props: any) => {
    return {
      floatingPlaceholder: true,
      floatingPlaceholderColor: Colors.c3,
      body: true,
      medium: true,
      color: Colors.c1,
      autoCapitalize: 'none',
      autoCorrect: false,
      fieldStyle: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        paddingBottom: 4,
      },

      ...props,
    };
  });

  ThemeManager.setComponentTheme('TouchableOpacity', (props: any) => {
    return {
      activeOpacity: 0.7,
      ...props,
    };
  });

  ThemeManager.setComponentTheme('Chip', (props: any) => {
    return {
      containerStyle: { backgroundColor: Colors.c6, borderColor: Colors.c5 },
      labelStyle: {
        // ...typoStyles.xs,
        // ...baseTextStyles.bold,
        color: props.disabled ? Colors.c3 : Colors.c1,
      },
      centerV: true,
      ...props,
    };
  });
};
