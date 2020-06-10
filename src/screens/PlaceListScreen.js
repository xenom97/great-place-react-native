import React, {useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PlaceItem from '../components/PlaceItem';
import * as placeActions from '../store/places-actions';

const PlaceListScreen = props => {
  const places = useSelector(state => state.places.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(placeActions.loadPlaces());
  }, [dispatch]);

  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <PlaceItem
          title={itemData.item.title}
          image={itemData.item.imageUri}
          address={null}
          onSelect={() => {
            props.navigation.navigate('PlaceDetail', {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id,
            });
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  //
});

export default PlaceListScreen;
