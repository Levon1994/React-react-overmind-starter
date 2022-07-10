import { store } from 'store';

const errorHandler = response => {
  if (response.status === 401) {
    store.state.isLoggedIn !== false && store.actions.logout();
  }
  return response;
};

export default errorHandler;
