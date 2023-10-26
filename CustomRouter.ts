import {StackRouter} from '@react-navigation/native';

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
      console.log(JSON.stringify(partialState, null, 2));

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
