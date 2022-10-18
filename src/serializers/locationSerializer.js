class Location {
  constructor(locationInfo = {}) {
    this.locationText = locationInfo?.text || ' ';
  }
}

export const serializeLocation = (location) => new Location(location);

export default {
  // eslint-disable-next-line import/prefer-default-export
  serializeLocation,
};
