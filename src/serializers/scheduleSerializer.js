import { serializeTime } from './timeSerializer';

class Day {
  constructor(dayInfo = {}) {
    this.day = dayInfo?.started_week_day || ' ';
    this.startedTime = serializeTime(dayInfo.started_at);
    this.endedTime = serializeTime(dayInfo.ended_at);
  }
}

export const serializeDay = (day) => new Day(day);
export const serializeWeek = (week) => week.map(serializeDay);

export default {
  // eslint-disable-next-line import/prefer-default-export
  serializeWeek,
};
