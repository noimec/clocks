import { ACTION_TYPES } from "../config";

const { REMOVE_CLOCK } = ACTION_TYPES;

export const removeClock = (index: number) => ({
    type: REMOVE_CLOCK,
    payload: index,
});