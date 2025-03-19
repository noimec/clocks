import { ACTION_TYPES } from "../config";

const { ADD_CLOCK } = ACTION_TYPES;

export const addClock = (clock) => ({
    type: ADD_CLOCK,
    payload: clock,
});