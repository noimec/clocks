import axios from "axios";

import { ACTION_TYPES } from "../config";
import { AppThunk, AppDispatch, RootState } from "./types";

const { FETCH_TIMEZONES } = ACTION_TYPES;

export const fetchTimezones = (): AppThunk =>
    async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch({ type: FETCH_TIMEZONES, payload: true });

        try {
            const response = await axios.get('/timezones.json');
            dispatch({ type: FETCH_TIMEZONES, payload: response.data });
        } catch (error) {
            console.error('Error fetching timezones', error);
        } finally {
            dispatch({ type: FETCH_TIMEZONES, payload: false });
        }
    };