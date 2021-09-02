/* eslint-disable consistent-return */
import 'regenerator-runtime/runtime';
import { BASE_URL_CHUCK } from '../constants/constants';

const chuckCall = async ()  => {
  const Url = `${BASE_URL_CHUCK}`;

  try {

    const response = await fetch(Url, { mode: 'cors'});
    const data = await response.json();

    return data;

  } catch(error){
    console.log(error);
  };
};

export default chuckCall;