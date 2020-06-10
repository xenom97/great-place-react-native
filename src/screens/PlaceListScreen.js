import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import PlaceItem from '../components/PlaceItem';

const PlaceListScreen = props => {
  const places = useSelector(state => state.places.places);

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
