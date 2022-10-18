import { getTime } from '../api/helpers';
import { serializeCity } from './citySerializer';
import { serializePhones } from './phoneSerializer';
import { serializeLocation } from './locationSerializer';

class RestaurantInformation {
  constructor(restaurantInfo = {}) {
    this.image = restaurantInfo?.restaurant.image || ' ';
    this.restaurantTitle = restaurantInfo?.restaurant.title || ' ';
    this.restaurantTitleMin = restaurantInfo?.restaurant.title.slice(0, 15) || ' ';
    this.rating = restaurantInfo?.restaurant.rating || ' ';
    this.status = restaurantInfo === {} ? ' ' : getTime(restaurantInfo.restaurant.schedule);
    this.city = serializeCity(restaurantInfo.restaurant.city);
    this.location = serializeLocation(restaurantInfo.restaurant.location);
    this.phoneInfo = serializePhones(restaurantInfo.restaurant.phones);
  }
}

export const serializeRestaurant = (restaurantInfo) => new RestaurantInformation(restaurantInfo);
export const serializeRestaurants = (data) => data.map(serializeRestaurant);

export default {
  // eslint-disable-next-line import/prefer-default-export
  serializeRestaurants,
};
