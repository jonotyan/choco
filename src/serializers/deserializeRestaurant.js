import { deserializeLocation } from './deserialierLocation';

class RestaurantToSnakeCase {
  constructor(restaurantInfo = {}) {
    this.title = restaurantInfo.restaurantTitle;
    this.image = restaurantInfo.image;
    this.location = deserializeLocation(restaurantInfo.location);
    this.rating = restaurantInfo.rating;
    this.city = restaurantInfo.city;
    this.phones = restaurantInfo.phoneInfo;
  }
}

export const deserializeRestaurantInfo = (restaurant) => new RestaurantToSnakeCase(restaurant);
export const deserializeRestaurantInfoList = (data) => data.map(deserializeRestaurantInfo);

export default {
  // eslint-disable-next-line import/prefer-default-export
  deserializeRestaurantInfo,
  deserializeRestaurantInfoList,
};
