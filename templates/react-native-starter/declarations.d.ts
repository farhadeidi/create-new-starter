declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare namespace GlobalProps {}

declare type AppColorScheme = 'auto' | 'light' | 'dark';
