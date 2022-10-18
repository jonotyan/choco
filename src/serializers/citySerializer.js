class City {
  constructor(cityInfo = {}) {
    this.name = cityInfo?.title || ' ';
  }
}

export const serializeCity = (cityInfo) => new City(cityInfo);

export default {
  // eslint-disable-next-line import/prefer-default-export
  serializeCity,
};
