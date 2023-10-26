import * as React from 'react';

export const Routes = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoggedIn(true);
    }, 3000);
  }, []);

  if (!loggedIn) {
    const PublicScreens = require('./PublicScreens').default;
    return <PublicScreens />;
  }

  const PrivateScreens = require('./PrivateScreens').default;

  return <PrivateScreens />;
};
