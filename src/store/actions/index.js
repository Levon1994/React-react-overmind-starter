import {
  SOME_DATA,
} from 'constants/api';
import { Fetch } from 'utils';
import { sortAlphabetical } from 'utils/helpers';

const login = ({ state }) => {
  state.isLoggedIn = true;
};

const logout = ({ state, actions }) => {
  state.isLoggedIn = false;
};

//action example

const getSomeData = async ({ state }) => {
  if (state.someData) return state.someData;

  const { Data } = await Fetch.get(SOME_DATA);
  return state.someData = Data && sortAlphabetical(Data);
};

const actions = {
  login,
  logout,
  getSomeData,
};

export default actions;
