import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Colors from '../constants/Colors';

const HeaderButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Icon name="plus" size={30} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default HeaderButton;
