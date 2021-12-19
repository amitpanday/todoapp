import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store/'
import AppContainer from './src/route/route';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppContainer />
      </SafeAreaView>
    </Provider>
  )
}

export default App;