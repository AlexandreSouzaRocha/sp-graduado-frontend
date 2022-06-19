import { DateTime as Luxon } from 'luxon';

import CONSTANTS from './Constants';

export default class DateTime {
  static toFormat(date: string, currentFormat: string, format = CONSTANTS.DATE.ISO8601): string {
    return Luxon.fromFormat(date, currentFormat).toFormat(format);
  }

  static fromJsToFormat(date: string, format = CONSTANTS.DATE.ISO8601): string {
    return Luxon.fromJSDate(new Date(date)).toFormat(format);
  }
}
