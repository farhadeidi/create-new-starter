import React from 'react';
import { View } from 'react-native-ui-lib';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ionicons } from './vectorIconSet';
import { Colors } from 'react-native-ui-lib';
import { useColorScheme } from 'react-native';

export type VectorIconProps = {
  name: keyof typeof ionicons;
  size?: number;
  color?: keyof ThemeColors;
  customColor?: string;
};

export type VectorIconName = keyof typeof ionicons;

const VectorIcon: React.FC<VectorIconProps> = ({
  name,
  color = 'c1',
  customColor,
  size = 18,
}) => {
  const scheme = useColorScheme();
  return (
    <View key={scheme}>
      <Ionicons
        name={name}
        size={size}
        color={customColor ? customColor : Colors[color]}
      />
    </View>
  );
};

export default VectorIcon;
