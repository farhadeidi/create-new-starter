import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const useAppNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStack>>();

export default useAppNavigation;
