import {ADD_PLACE, SET_PLACE} from './places-actions';
import Place from '../models/place';

const initState = {
  places: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(
        action.placeData.id.toString(),
        action.placeData.title,
        action.placeData.image,
      );
      return {
        ...state,
        places: state.places.concat(newPlace),
      };
    case SET_PLACE:
      return {
        places: action.places.map(
          place =>
            new Place(
              place.id.toString(),
              place.title,
              place.imageUri,
              place.address,
              place.lat,
              place.lng,
            ),
        ),
      };
    default:
      return state;
  }
};
