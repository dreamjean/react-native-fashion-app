import * as React from 'react';

export const navigationRef = React.createRef();

export const navigate = (name, params) => navigationRef.current?.navigate(name, params);

export const resetRoot = (index, name) =>
  navigationRef.current?.resetRoot({
    index: index,
    routes: [{ name: name }],
  });

export const state = navigationRef.current?.getRootState();

export default {
  navigate,
  resetRoot,
  state,
};
