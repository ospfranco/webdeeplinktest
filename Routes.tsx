import * as React from 'react';

export const Routes = ({loggedIn}: {loggedIn: boolean}) => {
  if (loggedIn) {
    const PrivateScreens = require('./PrivateScreens').default;

    return <PrivateScreens />;
  }
  const PublicScreens = require('./PublicScreens').default;
  return <PublicScreens />;
};
