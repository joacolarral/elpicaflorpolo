import { SEASON } from "../constants";

export type SeasonType = (typeof SEASON)[keyof typeof SEASON];
