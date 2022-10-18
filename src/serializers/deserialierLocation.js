class LocationSnakeCase {
  constructor(locationInfo = {}) {
    this.text = locationInfo?.locationText || ' ';
  }
}
export const deserializeLocation = (location) => new LocationSnakeCase(location);

export default {
  // eslint-disable-next-line import/prefer-default-export
  deserializeLocation,
};
