/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
require('react-native-ui-lib/config').setConfig({ appScheme: 'default' });

AppRegistry.registerComponent(appName, () => App);
