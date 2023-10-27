/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import createCustomStackNavigator from './ResponsiveStackNavigator';
import {View} from 'react-native';
import {HomeScreen} from './screens/Home.screen';
import {DeepLinkScreen} from './screens/Deep.screen';
import {BScreen} from './screens/B.screen';
import {NotFound} from './screens/NotFound.screen';

const RootStack = createCustomStackNavigator();

export default class PrivateScreens extends React.Component {
  render() {
    return (
      <View style={{flex: 1, height: '100%'}}>
        <RootStack.Navigator
          keyboardHandlingEnabled={false}
          isSmallScreenWidth={false}
          mode="modal">
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Deep" component={DeepLinkScreen} />
          <RootStack.Screen name="NotFound" component={NotFound} />
          <RootStack.Screen name="SubNavigator" component={BScreen} />
        </RootStack.Navigator>
      </View>
    );
  }
}
