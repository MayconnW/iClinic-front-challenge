import { DARK_SIDE, LIGHT_SIDE } from 'config/constants';
import api from './api';

const lightSide = async (): Promise<typeof LIGHT_SIDE> => {
  await api.get(`people/${LIGHT_SIDE}`);
  return LIGHT_SIDE;
};

const darkSide = async (): Promise<typeof DARK_SIDE> => {
  await api.get(`people/${DARK_SIDE}`);
  return DARK_SIDE;
};

export default async (): Promise<typeof DARK_SIDE | typeof LIGHT_SIDE> => {
  const response = await Promise.race([lightSide(), darkSide()]);
  return response;
};
