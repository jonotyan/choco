import { getTime, getPhonesInfo } from '../api/helpers';

class RestaurantInformation {
  constructor(restaurantInfo = {}) {
    this.image = restaurantInfo?.restaurant.image || ' ';
    this.restaurantTitle = restaurantInfo?.restaurant.title || ' ';
    this.restaurantTitleMin = restaurantInfo?.restaurant.title.slice(0, 15) || ' ';
    this.city = restaurantInfo?.restaurant.city.title || ' ';
    this.location = restaurantInfo?.restaurant.location.text || ' ';
    this.rating = restaurantInfo?.restaurant.rating || ' ';
    this.phone = restaurantInfo === {} ? { name: ' ', number: ' ' } : getPhonesInfo(restaurantInfo.restaurant.phones);
    this.status = restaurantInfo === {} ? ' ' : getTime(restaurantInfo.restaurant.schedule);
  }
}

export const serializeRestaurant = (restaurantInfo) => new RestaurantInformation(restaurantInfo);
export const serializeRestaurants = (data) => data.map(serializeRestaurant);

export default {
  // eslint-disable-next-line import/prefer-default-export
  serializeRestaurants,
};
