import React, {useState} from 'react';
import {
  Text,
  ScrollView,
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors';
import {useDispatch} from 'react-redux';
import * as placeActions from '../store/places-actions';
import ImageSelector from '../components/ImageSelector';

const NewPlaceScreen = props => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();

  const dispatch = useDispatch();

  const titleChangeHandler = text => {
    setTitle(text);
  };

  const savePlaceHandler = () => {
    dispatch(placeActions.addPlace(title, image));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={titleChangeHandler}
          value={title}
          placeholder="Minimum 6 characters"
        />
        <ImageSelector
          onImageTaken={selectedImage => setImage(selectedImage)}
        />
        <Button
          title="Save Place"
          color={Colors.primary}
          disabled={!(title.length > 5 && image)}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewPlaceScreen;
