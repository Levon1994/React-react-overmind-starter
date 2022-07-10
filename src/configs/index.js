import dayjs from 'dayjs';

import isDev from './isDev';
import menu from './menu';

const appKey = 'react-overmind-starter';

const {
  REACT_APP_BASE_URL,
} = process.env;

const defaultLanguage = 'en';
const baseURL = `${REACT_APP_BASE_URL}${defaultLanguage}`;

const persistKeys = [
  'user',
];

const timeFormat = 'HH:mm:ss';
const dateFormat = 'DD-MM-YYYY';

const dayjsYesterday = dayjs().add(-1, 'd').format();
const dayjsToday = dayjs().format();
const dayjsTomorrow = dayjs().add(1, 'd').format();

export {
  isDev,
  menu,
  appKey,
  baseURL,
  dateFormat,
  dayjsToday,
  timeFormat,
  persistKeys,
  dayjsTomorrow,
  dayjsYesterday,
  defaultLanguage,
};
