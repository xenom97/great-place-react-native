import 'react-native-gesture-handler';

import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import placeReducer from './src/store/places-reducer';
import {init} from './src/helpers/db';
import {StatusBar} from 'react-native';
import Colors from './src/constants/Colors';

init()
  .then(() => {
    console.log('Initialized database..');
  })
  .catch(err => {
    console.log('Initializing database failed..');
    console.log(err);
  });

const rootReducer = combineReducers({
  places: placeReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={Colors.primary} />
      <AppNavigator />
    </Provider>
  );
};

export default App;
