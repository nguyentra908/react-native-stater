import { getStorybookUI } from '@storybook/react-native';
import * as Font from 'expo-font';

import './storybook.requires';

Font.loadAsync({
  InterMedium: require('../assets/fonts/Inter-Medium.ttf'),
  InterBold: require('../assets/fonts/Inter-Bold.ttf'),
})

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;
