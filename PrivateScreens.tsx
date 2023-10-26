import * as React from 'react';
import createCustomStackNavigator from './ResponsiveStackNavigator';
import {View, Text} from 'react-native';
import {HomeScreen} from './screens/Home.screen';

function NotFound() {
  return (
    <View>
      <Text>PAGE NOT FOUND!</Text>
    </View>
  );
}

function DeepLinkScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is a deep link screen</Text>
    </View>
  );
}

const RootStack = createCustomStackNavigator();

export default () => {
  return (
    <RootStack.Navigator
      keyboardHandlingEnabled={false}
      isSmallScreenWidth={false}
      mode="modal">
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Deep" component={DeepLinkScreen} />
      <RootStack.Screen name="NotFound" component={NotFound} />
    </RootStack.Navigator>
  );
};
