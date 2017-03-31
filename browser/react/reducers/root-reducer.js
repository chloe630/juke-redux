import {SET_LYRICS} from '../constants';
const initialState = { text: ''};

export default function reducer (state = initialState, action) {

  switch (action.type) {
    case 'SET_LYRICS':
      console.log(newState);
      return Object.assign({}, state, { text:action.lyric });

    default:
      return state;

  }
};