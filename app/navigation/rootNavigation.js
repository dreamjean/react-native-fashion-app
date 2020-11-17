import * as React from 'react';

export const navigationRef = React.createRef();

const navigate = (name, params) => navigationRef.current?.navigate(name, params);

const resetRoot = (index, name) =>
  navigationRef.current?.resetRoot({
    index: index,
    routes: [{ name: name }],
  });

export default {
  navigate,
  resetRoot,
};
