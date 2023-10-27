import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {HomeScreen} from './screens/Home.screen';
import {DeepLinkScreen} from './screens/Deep.screen';
import {BScreen} from './screens/B.screen';
import {NotFound} from './screens/NotFound.screen';

const RootStack = createStackNavigator();

export default () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="B" component={BScreen} />
      <RootStack.Screen name="Deep" component={DeepLinkScreen} />
      <RootStack.Screen name="NotFound" component={NotFound} />
    </RootStack.Navigator>
  );
};
