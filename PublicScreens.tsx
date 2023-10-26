import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {HomeScreen} from './screens/Home.screen';

const RootStack = createStackNavigator();

export default () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen} />
    </RootStack.Navigator>
  );
};
