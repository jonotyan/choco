import { serializeRestaurants } from '@/serializers/restaurantInfoSerializer';
import { chocoUrls } from '@/api/urls';
import { instanceChocofood } from '@/api/entrypoints';

// eslint-disable-next-line import/prefer-default-export
export const getRestaurants = () => instanceChocofood.get(chocoUrls.restaurants, {
  params: {
    offset: 0,
    limit: 30,
    longitude: 76.914993,
    latitude: 43.237073,
  },
})
  .then(
    (response) => serializeRestaurants(response.data),
  )
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.log(e);
  });
