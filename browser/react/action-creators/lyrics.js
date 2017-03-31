import {SET_LYRICS} from '../constants';

export default setLyrics = function (text) {

  return {
    type: SET_LYRICS,
    lyric: text
  };
  
};



