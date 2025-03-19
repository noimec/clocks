import { ACTION_TYPES } from "@shared/config";

const { ADD_CLOCK } = ACTION_TYPES;

export const addClock = () => ({
    type: ADD_CLOCK,
    payload: { timezone: null },
});