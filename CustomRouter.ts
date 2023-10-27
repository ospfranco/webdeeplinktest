import {StackRouter} from '@react-navigation/native';

const addCentralPaneNavigatorRoute = state => {
  console.log('🟣🟣🟣🟣🟣🟣🟣🟣 Adding central pane navigator! 🟣🟣🟣🟣🟣🟣🟣');
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
  console.log('🟣🟣🟣🟣🟣🟣🟣🟣 new routes! 🟣🟣🟣🟣🟣🟣🟣', state.routes);
};

function CustomRouter(options: any) {
  console.log('creating stack router with options', options);
  const stackRouter = StackRouter(options);

  return {
    ...stackRouter,
    getRehydratedState(
      partialState: any,
      {routeNames, routeParamList, routeGetIdList}: any,
    ) {
      console.log('🟠🟠🟠🟠 getting re-hydrated state');
      console.log(`URL ${window.location.href}`);
      console.log(JSON.stringify(partialState, null, 2));

      partialState.stale = true;
      addCentralPaneNavigatorRoute(partialState);

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
