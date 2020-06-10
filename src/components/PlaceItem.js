import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View, Text} from 'react-native';
import Colors from '../constants/Colors';

const PlaceItem = props => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: props.image}} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.address}>{props.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 8,
    elevation: 5,
  },
  imageContainer: {
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
  },
  address: {
    color: '#666',
    fontSize: 16,
  },
});

export default PlaceItem;
