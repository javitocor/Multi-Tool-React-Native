import { colors, bad, got, chuck } from "../constants/colors";

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
  return colors[color];
};

export default getColor;