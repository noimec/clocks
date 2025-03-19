import { combineReducers, Reducer } from 'redux';

import { clocksReducer } from './clocks';
import { timezonesReducer } from './timezones';
import { loadingReducer } from './loading';
import { RootState } from '../actions/types';
import { AppAction } from './types';

export const rootReducer: Reducer<RootState, AppAction> = combineReducers({
    clocks: clocksReducer,
    timezones: timezonesReducer,
    loading: loadingReducer,
});
