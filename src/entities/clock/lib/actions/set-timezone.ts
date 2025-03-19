import { ACTION_TYPES } from "@shared/config";

const { SET_TIMEZONE } = ACTION_TYPES;

export const setTimezone = (index: number, timezone: string) => ({
    type: SET_TIMEZONE,
    payload: { index, timezone },
});