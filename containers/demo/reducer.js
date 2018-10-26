import constants from './constants'

export default (state = 0, action) => {
  switch (action.type){
    case constants.BUTTTON_CLICKED:
      return state + 1;
    default:
      return state;
  }
}