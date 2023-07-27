import Constants from 'expo-constants';
import { Text } from 'react-native';

const StorybookApp = require('./.storybook').default;

const App = () => <Text>App.tsx</Text>;

export default Constants.expoConfig?.extra?.storybookEnabled === 'true'
  ? StorybookApp
  : App;
