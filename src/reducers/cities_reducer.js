// a reducer carries the curretn state of the redux state tree and action that will update it
const citiesReducer =  (state,action) => {
  if (state === undefined){
    return [];
  }

  switch (action.type) {
    case 'SET_CITIES':
      return action.payload;
    default:
      return state;
  }
}

export default citiesReducer
