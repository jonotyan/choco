import { getTime, getPhonesInfo } from './helpers';

class RestaurantInforamation {
  constructor(restarauntInfo) {
    this.restaurantTitle = restarauntInfo.restaurant.title;
    this.city = restarauntInfo.restaurant.city.title;
    this.location = restarauntInfo.restaurant.location.text;
    this.rating = restarauntInfo.restaurant.rating;
    this.phone = getPhonesInfo(restarauntInfo.restaurant.phones);
    this.status = getTime(restarauntInfo.restaurant.schedule);
  }
}

const restaurant = (restaurantInfo) => new RestaurantInforamation(restaurantInfo);

function getAllRestorauntInfo(restaurants) {
  // console.log(restaurants);
  const allRestaurants = {};
  let index = 0;
  if (!(restaurants === undefined)) {
    for (let i = 0; i < restaurants.length; i += 1) {
      allRestaurants[index] = restaurant(restaurants[i]);
      index += 1;
    }
  }
  return allRestaurants;
}

export const serializeRestaurantsInfo = (data) => getAllRestorauntInfo(data);

export default {
  // eslint-disable-next-line import/prefer-default-export
  getAllRestorauntInfo,
};
