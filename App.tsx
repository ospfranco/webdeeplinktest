import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {Routes} from './Routes';
import {Linking, Text} from 'react-native';

const linking = {
  // prefixes: ['http://localhost:8080'],
  config: {
    screens: {
      Home: 'home',
      Deep: 'deep',
      NotFound: '*',
    },
  },
};

const App = () => {
  const navigationRef = useRef<NavigationContainerRef<typeof linking>>(null);

  useEffect(() => {
    Linking.getInitialURL()
      .then(url => {
        console.log('initial url ran');
        if (!url) {
          return;
        }

        console.warn(`initial_url ${url}}`);

        if (navigationRef.current?.isReady()) {
          console.warn(`navigation is ready, navigating to ${url}}!`);
          if (url.replace('http://localhost:8080', '') === 'deep') {
            console.log('should navigate too deep!');
            navigationRef.current.navigate('Deep');
          }
        }
      })
      .catch(e => {
        console.error('Get initial url error', e);
      });
  }, []);

  return (
    <NavigationContainer
      linking={linking}
      ref={navigationRef}
      fallback={<Text>Loading...</Text>}>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
