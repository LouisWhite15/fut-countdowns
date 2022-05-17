import { DateTime } from "luxon";
import parser from "cron-parser";

export const getNextDivisionRivalsDate = () => {
  
  var options = {
    utc: true,
    tz: 'utc'
  };

  var interval = parser.parseExpression('0 7 * * Thu', options);

  return DateTime.fromJSDate(interval.next().toDate());
}