import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import Colors from '../constants/Colors';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/EvilIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ImageSelector = props => {
  const [image, setImage] = useState();
  const [error, setError] = useState('No image picked yet.');

  const options = {
    title: 'Select Place Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const takeImageHandler = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.error) {
        setError(response.error);
        setImage();
      } else {
        setImage(response.uri);
        props.onImageTaken(response.uri);
      }
    });
  };

  const resetImageHandler = () => {
    setImage();
    setError('No image picked yet.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagePreview}>
        {!image ? (
          <Text>{error}</Text>
        ) : (
          <Image style={styles.image} source={{uri: image}} />
        )}
      </View>
      {!image ? (
        <TouchableOpacity
          onPress={takeImageHandler}
          style={{
            backgroundColor: Colors.primary,
            borderRadius: 10,
            padding: 10,
            elevation: 3,
          }}>
          <Icon name="camera" color="#fff" size={32} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={resetImageHandler}
          style={{
            backgroundColor: 'red',
            borderRadius: 10,
            padding: 10,
            elevation: 3,
          }}>
          <Icon name="close-o" color="#fff" size={32} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default ImageSelector;
