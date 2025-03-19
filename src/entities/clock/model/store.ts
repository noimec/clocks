import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { thunk } from 'redux-thunk';

import { rootReducer } from '../lib/reducers';
import { RootState } from '../lib/actions/types';
import { AppAction } from '../lib/reducers/types';

export const clockStore = createStore<RootState, AppAction, {}, {}>(
    rootReducer,
    applyMiddleware(thunk)
);