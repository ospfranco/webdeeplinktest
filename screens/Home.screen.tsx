import * as React from 'react';
import {View, Text} from 'react-native';
import {Link} from '@react-navigation/native';

export function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Link to="/deep">
        <Text>Go to deep</Text>
      </Link>
    </View>
  );
}
