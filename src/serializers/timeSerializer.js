class Time {
  constructor(timeInfo = {}) {
    this.hour = timeInfo.hour;
    this.minute = timeInfo.minute;
  }
}

export const serializeTime = (timeInfo) => new Time(timeInfo);

export default {
  // eslint-disable-next-line import/prefer-default-export
  serializeTime,
};
