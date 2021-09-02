/* eslint-disable consistent-return */
import 'regenerator-runtime/runtime';
import { BASE_URL_BAD } from '../constants/constants';

const badCall = async ()  => {
  const Url = `${BASE_URL_BAD}`;

  try {

    const response = await fetch(Url, { mode: 'cors'});
    const data = await response.json();

    return data;

  } catch(error){
    console.log(error);
  };
};

export default badCall;