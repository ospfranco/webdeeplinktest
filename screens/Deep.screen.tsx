import React from 'react';
import {View, Text} from 'react-native';

export function DeepLinkScreen({route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is a deep link screen</Text>
      <Text>{route.params.id}</Text>
    </View>
  );
}
