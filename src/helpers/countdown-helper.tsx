import { DateTime } from "luxon";

export const getTeamOfTheSeasonReleaseDate = () => {
  return DateTime.utc(2021, 4, 23, 17, 0, 0);
}