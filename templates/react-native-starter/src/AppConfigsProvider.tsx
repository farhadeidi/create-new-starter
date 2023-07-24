import { NavigationContainer } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { getNavigationTheme } from './utils/styles/theme/theme-colors';
import { useConfigsSlice } from './hooks';
import { initTheme } from './utils/styles/theme/theme-init';
import { useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ToastProvider } from 'react-native-toast-notifications';
import { View } from 'react-native-ui-lib';

export type AppConfigsProviderProps = {
  children?: React.ReactNode;
};

const AppConfigsProvider: React.FC<AppConfigsProviderProps> = ({
  children,
}) => {
  const scheme = useColorScheme();
  const [isInitialized, setIsInitialized] = useState(false);
  const { i18n } = useTranslation();
  const { language } = useConfigsSlice();

  useEffect(() => {
    i18n.changeLanguage(language || 'en');
  }, []);

  const startApp = useCallback(async () => {
    setIsInitialized(false);
    initTheme();
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    startApp();
  }, [scheme]);

  if (!isInitialized) return null;

  return (
    <ToastProvider
      placement="bottom"
      offsetBottom={80}
      duration={3000}
      animationType="slide-in"
    >
      <NavigationContainer theme={getNavigationTheme(scheme === 'dark')}>
        <View flex-1>{children}</View>
      </NavigationContainer>
    </ToastProvider>
  );
};

export default AppConfigsProvider;
