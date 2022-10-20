import { getStatus } from '../helpers/timeHelper';
import { serializeCity } from './citySerializer';
import { serializePhones } from './phoneSerializer';
import { location } from './locationSerializer';
import { serializeSchedule } from './scheduleSerializer';

class RestaurantInformation {
  constructor(restaurantInfo = {}) {
    this.image = restaurantInfo?.restaurant.image || '';
    this.restaurantTitle = restaurantInfo?.restaurant.title || '';
    this.restaurantTitleMin = restaurantInfo?.restaurant.title.slice(0, 15) || '';
    this.rating = restaurantInfo?.restaurant.rating || '';
    this.status = getStatus(serializeSchedule(restaurantInfo.restaurant.schedule));
    this.city = serializeCity(restaurantInfo.restaurant.city);
    this.location = location(restaurantInfo.restaurant.location || '');
    this.phoneInfo = serializePhones(restaurantInfo.restaurant.phones || '');
  }

  get deserialize() {
    return {
      restaurant: {
        title: this.restaurantTitle,
        image: this.image,
        location: this.location.deserialize,
        rating: this.rating,
        city: this.city,
        phones: this.phones,
      },
    };
  }
}

export const serializeRestaurant = (restaurantInfo) => new RestaurantInformation(restaurantInfo);
export const serializeRestaurants = (data) => data.map(serializeRestaurant);
export const deserializeRestaurants = (data) => data.map(serializeRestaurant.deserialize);

export default {
  // eslint-disable-next-line import/prefer-default-export
  serializeRestaurants,
};
