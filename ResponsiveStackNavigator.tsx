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
      // Options for useNavigationBuilder won't update on prop change, so we need to pass a getter for the router to have the current state of isSmallScreenWidth.
      getIsSmallScreenWidth: () => false,
    });

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
