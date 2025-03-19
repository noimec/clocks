import { ACTION_TYPES } from "@shared/config";

const { REMOVE_CLOCK } = ACTION_TYPES;

export const removeClock = (index: number) => ({
    type: REMOVE_CLOCK,
    payload: index,
});