const RNFS = require('react-native-fs');

export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (title, image) => {
  return async dispatch => {
    const imagePath = `${RNFS.ExternalDirectoryPath}/${image.fileName}`;

    try {
      await RNFS.copyFile(image.uri, imagePath);
      dispatch({
        type: ADD_PLACE,
        placeData: {
          title,
          image: 'file://' + imagePath,
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }

    // # Different way to create and save image to file system
    // const imageBase64 = image.data
    // RNFS.writeFile(imagePath, imageBase64, 'base64')
    //   .then(success => console.log('success'))
    //   .catch(error => console.log(error));
  };
};
