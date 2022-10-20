class Location {
  constructor(locationInfo = {}) {
    this.locationText = locationInfo.text || '';
  }

  get deserialize() {
    return {
      text: this.locationText,
    };
  }
}

export const location = (locationInfo) => new Location(locationInfo);

export default {
  // eslint-disable-next-line import/prefer-default-export
  location,
};
