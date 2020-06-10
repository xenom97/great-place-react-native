import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PlaceListScreen from '../screens/PlaceListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
};

const PlaceStackNavigator = createStackNavigator();

export const PlaceNavigator = props => {
  return (
    <PlaceStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <PlaceStackNavigator.Screen
        name="Places"
        component={PlaceListScreen}
        options={({navigation}) => ({
          headerTitle: 'All Places',
          headerRight: () => (
            <HeaderButton onPress={() => navigation.navigate('NewPlace')} />
          ),
        })}
      />
      <PlaceStackNavigator.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={({route}) => ({
          headerTitle: route.params.placeTitle,
        })}
      />
      <PlaceStackNavigator.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={{headerTitle: 'Add Place'}}
      />
      <PlaceStackNavigator.Screen name="Map" component={MapScreen} />
    </PlaceStackNavigator.Navigator>
  );
};
