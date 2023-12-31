import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Routes} from './Routes';
import {Linking, Text} from 'react-native';

const linking = {
  prefixes: ['http://localhost'],
  config: {
    initialRouteName: 'Home' as const,
    screens: {
      SubNavigator: {
        screens: {
          B: 'B',
        },
      },
      Deep: 'deep/:id/:second_id',
      Home: {
        path: '',
      },
      NotFound: '*',
    },
  },
};

const App = () => {
  const [canRenderRouter, setCanRenderRouter] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigationRef = useRef<
    NavigationContainerRef<{
      Home: undefined;
      Deep: undefined;
      NotFound: undefined;
    }>
  >(null);

  useEffect(() => {
    Linking.getInitialURL()
      .then(url => {
        if (!url) {
          return;
        }

        if (navigationRef.current?.isReady()) {
          // console.warn(`navigation is ready, navigating to ${url}}!`);
          // if (url.replace('http://localhost:8080', '') === 'deep') {
          //   console.log('should navigate too deep!');
          // navigationRef.current.navigate('Deep');
          // }
        }
      })
      .catch(e => {
        console.error('Get initial url error', e);
      });
  }, []);

  const onStateChange = (state: any) => {
    // console.log(state);
  };

  const onNavigationReady = () => {
    console.log('navigation ready');
    // navigationRef.current?.navigate('');
  };

  React.useEffect(() => {
    setTimeout(() => {
      setCanRenderRouter(true);
    }, 1000);
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setLoggedIn(true);
    }, 3000);
  }, []);
  console.log('🍏 App render');
  console.log(JSON.stringify(navigationRef.current?.getRootState(), null, 2));

  return (
    <NavigationContainer
      onStateChange={onStateChange}
      onReady={onNavigationReady}
      linking={linking}
      ref={navigationRef}
      fallback={<Text>Loading...</Text>}>
      {canRenderRouter && <Routes loggedIn={loggedIn} />}
    </NavigationContainer>
  );
};

export default App;
