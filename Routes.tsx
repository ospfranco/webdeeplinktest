import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {Link} from '@react-navigation/native';

function NotFound() {
  return (
    <View>
      <Text>PAGE NOT FOUND!</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Link to="/deep">
        <Text>Go to deep</Text>
      </Link>
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

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Deep" component={DeepLinkScreen} />
      <Stack.Screen name="NotFound" component={NotFound} />
    </Stack.Navigator>
  );
};
