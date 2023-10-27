import * as React from 'react';
import {View, Text} from 'react-native';
import {Link} from '@react-navigation/native';

export function BScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>B Screen</Text>
      <Link to="/">
        <Text>Go to home</Text>
      </Link>
    </View>
  );
}
