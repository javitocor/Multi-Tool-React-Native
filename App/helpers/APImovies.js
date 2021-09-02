/* eslint-disable consistent-return */
import 'regenerator-runtime/runtime';
import { BASE_URL_MOVIES } from '../constants/constants';

const movieCall = async (keyword)  => {
  const Url = `${BASE_URL_MOVIES}`;

  try {

    const response = await fetch(`${Url}${keyword}`, { mode: 'cors'});
    const data = await response.json();

    return data;

  } catch(error){
    console.log(error);
  };
};

export default movieCall;