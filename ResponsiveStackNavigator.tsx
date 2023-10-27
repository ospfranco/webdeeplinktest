import React from 'react';
import {
  useNavigationBuilder,
  createNavigatorFactory,
} from '@react-navigation/native';
import {StackView} from '@react-navigation/stack';
import CustomRouter from './CustomRouter';

function ResponsiveStackNavigator(props: any) {
  const {navigation, state, descriptors, NavigationContent} =
    useNavigationBuilder(CustomRouter, {
      children: props.children,
      screenOptions: props.screenOptions,
      initialRouteName: props.initialRouteName,
      getIsSmallScreenWidth: () => false,
    });

  console.log(
    `🟠 Reponsive stack navigator ${JSON.stringify(state, null, 2)} and url ${
      window.location.href
    }`,
  );

  return (
    <NavigationContent>
      <StackView
        {...props}
        state={state}
        descriptors={descriptors}
        navigation={navigation}
      />
    </NavigationContent>
  );
}

ResponsiveStackNavigator.displayName = 'ResponsiveStackNavigator';

export default createNavigatorFactory(ResponsiveStackNavigator);
