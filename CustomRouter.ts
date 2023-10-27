import {StackRouter} from '@react-navigation/native';

const addCentralPaneNavigatorRoute = state => {
  const centralPaneNavigatorRoute = {
    name: 'CentralNavigator',
    state: {
      routes: [
        {
          name: 'B',
          params: {},
        },
      ],
    },
  };
  state.routes.splice(1, 0, centralPaneNavigatorRoute);

  state.index = state.routes.length - 1;
  console.log('🍏 new routes with central pane!', state.routes);
};

function CustomRouter(options: any) {
  console.log('🟠 Custom router called', options);
  const stackRouter = StackRouter(options);

  return {
    ...stackRouter,
    getInitialState(...args: any[]) {
      console.log(`🟣 Get initial state ${args}`);
      return stackRouter.getInitialState(...args);
    },
    getRehydratedState(
      partialState: any,
      {routeNames, routeParamList, routeGetIdList}: any,
    ) {
      console.log('🟠🟠 getting re-hydrated state');
      console.log(`URL ${window.location.href}`);
      console.log(JSON.stringify(partialState, null, 2));

      partialState.stale = true;
      // addCentralPaneNavigatorRoute(partialState);

      const state = stackRouter.getRehydratedState(partialState, {
        routeNames,
        routeParamList,
        routeGetIdList,
      });

      return state;
    },
  };
}

export default CustomRouter;
