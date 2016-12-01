import Immutable from 'immutable';

const initialState = Immutable.Map({
  primaryMenuActiveItem: "overviewPrimary",
  secondaryMenuActiveItem: 'home'
});

export default (state = initialState, type, payload) => {
  if(type === "CHANGE_MENU") {
    if (payload.menuType='PRIMARY') {
      return {primaryMenuActiveItem: payload.activeItem}
    }
    else {
      return {secondaryMenuActiveItem: payload.activeItem}
    }
  }
  return state;
};