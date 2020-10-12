import React from 'react';
import {Provider} from 'react-redux';
import EditProfile from './src/screens/EditProfile';

import store from './src/redux/store';

const App: () => React.Node = () => {
  return (
    <Provider store={store}>
      <EditProfile />
    </Provider>
  );
};

export default App;
