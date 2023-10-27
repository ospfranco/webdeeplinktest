import * as React from 'react';
import {View, Text} from 'react-native';
import {Link} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function SubScreenB() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>B Screen</Text>
      <Link to="/">
        <Text>Go to home</Text>
      </Link>
    </View>
  );
}

export function BScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="B" component={SubScreenB} />
    </Stack.Navigator>
  );
}
