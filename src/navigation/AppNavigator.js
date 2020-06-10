import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PlaceNavigator} from './PlaceNavigator';

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <PlaceNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
