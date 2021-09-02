/* eslint-disable consistent-return */
import 'regenerator-runtime/runtime';
import { BASE_URL_MUSIC } from '../constants/constants';

const musicCall = async (keyword)  => {
  const Url = `${BASE_URL_MUSIC}`;

  try {

    const response = await fetch(`${Url}${keyword}&limit=25&entity=album`, { mode: 'cors'});
    const data = await response.json();

    return data;

  } catch(error){
    console.log(error);
  };
};

export default musicCall;