import { appKey, persistKeys } from 'configs';

const persist = (key, data) => {
  if (persistKeys.includes(key)) {
    const persistKey = `${appKey}-${key}`;
    localStorage.setItem(persistKey, JSON.stringify(data));
  }
};

const getPersisted = key => {
  const data = localStorage.getItem(`${appKey}-${key}`);
  return data && JSON.parse(data);
};

const onInitialize = async ({
  state,
  actions,
}, overmind) => {
  overmind.addMutationListener(({ path, args: [data] }) => {
    persist(path, data);
  });

  persistKeys.forEach(key => {
    const value = getPersisted(key);
    value && (state[key] = value);
  });

};

export default onInitialize;
