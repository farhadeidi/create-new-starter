import AppNavigator from './AppNavigator';
import { MMKV } from 'react-native-mmkv';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppConfigsProvider from './AppConfigsProvider';
import '@/utils/i18n';

const queryClient = new QueryClient();

export const defaultStorage = new MMKV();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <AppConfigsProvider>
              <AppNavigator />
            </AppConfigsProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
