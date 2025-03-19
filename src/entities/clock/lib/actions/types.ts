import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { ClocksState, TimezonesState, LoadingState, AppAction } from "../reducers/types";

export interface RootState {
    clocks: ClocksState;
    timezones: TimezonesState;
    loading: LoadingState;
}

export type AppDispatch = Dispatch<Action<string>> & ((thunk: AppThunk) => void);

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AppAction
>;