class Time {
  constructor(timeInfo = {}) {
    this.hour = timeInfo.hour || 0;
    this.minute = timeInfo.minute || 0;
  }
}

export const serializeTime = (timeInfo) => new Time(timeInfo);

export default {
  // eslint-disable-next-line import/prefer-default-export
  serializeTime,
};
