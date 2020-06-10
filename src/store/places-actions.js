import RNFS from 'react-native-fs';
import {insertPlace, fetchPlaces} from '../helpers/db';

export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACE = 'SET_PLACE';

export const addPlace = (title, image) => {
  return async dispatch => {
    const imagePath = `${RNFS.ExternalDirectoryPath}/${image.fileName}`;
    const newImagePath = `file://${imagePath}`;

    try {
      await RNFS.copyFile(image.uri, imagePath);
      const dbResult = await insertPlace(
        title,
        newImagePath,
        'Dummy Address',
        -6.4,
        106.8,
      );
      dispatch({
        type: ADD_PLACE,
        placeData: {
          title,
          image: newImagePath,
          id: dbResult.insertId,
        },
      });
    } catch (err) {
      console.log('Error: ', err);
      throw err;
    }

    // # Different way to create and save image to file system
    // const imageBase64 = image.data
    // RNFS.writeFile(imagePath, imageBase64, 'base64')
    //   .then(success => console.log('success'))
    //   .catch(error => console.log(error));
  };
};

export const loadPlaces = () => {
  return async dispatch => {
    try {
      const dbResult = await fetchPlaces();
      const dataResults = dbResult.rows.raw();
      dispatch({type: SET_PLACE, places: dataResults});
    } catch (error) {
      console.log('Error: ', err);
      throw err;
    }
  };
};
