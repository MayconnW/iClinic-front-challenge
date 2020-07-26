import { DARK_SIDE, LIGHT_SIDE, Side } from 'config/constants';
import api from './api';

const lightSide = async (): Promise<Side> => {
  await api.get(`people/${LIGHT_SIDE}`);
  return LIGHT_SIDE;
};

const darkSide = async (): Promise<Side> => {
  await api.get(`people/${DARK_SIDE}`);
  return DARK_SIDE;
};

export default async (): Promise<Side> => {
  const response = await Promise.race([lightSide(), darkSide()]);
  return response;
};
