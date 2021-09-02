/* eslint-disable consistent-return */
import 'regenerator-runtime/runtime';
import { BASE_URL_GOT } from '../constants/constants';

const gotCall = async ()  => {
  const Url = `${BASE_URL_GOT}`;

  try {

    const response = await fetch(Url, { mode: 'cors'});
    const data = await response.json();

    return data;

  } catch(error){
    console.log(error);
  };
};

export default gotCall;