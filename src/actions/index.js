// TODO: add and export your own actions
import cities from '../../cities';

export function setCities() {
  // console.log(cities)
  // here we should call an API
  return{
    type: 'SET_CITIES',
    payload: cities
  }
};

export function selectCity(city) {
  // here we should call an API
  return{
    type: 'SELECT_CITY',
    payload: city
  }
};

