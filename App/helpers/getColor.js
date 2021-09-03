import { colors, bad, got, chuck, music, shows } from "../constants/colors";

function getColor(palette, color) {
  if(palette === 'bad') {
    return bad[color];
  }
  if(palette === 'got') {
    return got[color];
  }
  if(palette === 'chuck') {
    return chuck[color];
  }
  if(palette === 'music') {
    return music[color];
  }
  if(palette === 'shows') {
    return shows[color];
  }
  return colors[color];
};

export default getColor;