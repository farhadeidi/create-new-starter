import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './pages/Tabs/HomeTab/HomeTab';
import SettingsTab from './pages/Tabs/SettingsTab/SettingsTab.page';
import { VectorIconName } from './components/elements/VectorIcon';
import VectorIcon from './components/elements/VectorIcon/VectorIcon';
import { useConfigsSlice } from './hooks';
import { Colors, Text } from 'react-native-ui-lib';
import { useTranslation } from 'react-i18next';

declare global {
  type RootStack = {
    Root: undefined;
    HomeTab: undefined;
    SettingsTab: undefined;
  };
}

const Stack = createNativeStackNavigator<RootStack>();
const Tab = createBottomTabNavigator<RootStack>();

const AppNavigator = () => {
  const { isDarkMode } = useConfigsSlice();

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' },
      }}
      initialRouteName="Root"
    >
      <Stack.Screen
        name="Root"
        component={AppTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AppTabNavigator: React.FC<
  NativeStackScreenProps<RootStack, 'Root'>
> = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName: VectorIconName = 'home';
          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'SettingsTab') {
            iconName = focused ? 'cog' : 'cog-outline';
          }
          return (
            <VectorIcon
              name={iconName}
              size={size}
              color={focused ? 'c1' : 'c3'}
            />
          );
        },
        tabBarActiveTintColor: Colors.c1,
        tabBarInactiveTintColor: Colors.c3,

        tabBarLabel({ focused, children }) {
          return (
            <Text
              style={{
                color: focused ? Colors.c1 : Colors.c3,
                fontSize: 11,
              }}
            >
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{ title: t('Home') }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsTab}
        options={{ title: t('Settings') }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
