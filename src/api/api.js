import axios from 'axios';

const baseURL = `http://deliveryapp-vmua.onrender.com`;

export const requestProducts = async data => {
  try {
    const { data } = await axios.get(baseURL);
    return data;
  } catch (error) {
    console.log(error);
  }
};
