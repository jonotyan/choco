import { serializeRestaurants } from '@/serializers/restaurantInfoSerializer';
import { chocoUrls } from '@/api/urls';
import { instance } from '@/api/entrypoints';

const params = {
  offset: 0,
  limit: 30,
  longitude: 76.914993,
  latitude: 43.237073,
};

// eslint-disable-next-line import/prefer-default-export
export const getDataFromEndPoint = () => instance.get(chocoUrls.restaurants, {
  params,
})
  .then(
    (response) => serializeRestaurants(response.data),
  )
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.log(e);
  });

// export default {
//   getDataFromEndPoint,
// };
