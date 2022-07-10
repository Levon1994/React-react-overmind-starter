import { createOvermind } from 'overmind';
import { createHook } from 'overmind-react';

import initialState from './state';
import actions from './actions';
import onInitialize from './onInitialize';

export const store = createOvermind({
  state: initialState,
  actions,
  onInitialize,
});

export const useStore = createHook();
