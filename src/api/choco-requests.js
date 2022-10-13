import { serializeRestaurants } from '@/serializers/restaurantInfoSerializer';
import { chocoUrls } from '@/api/urls';
import { instance } from '@/api/entrypoints';

const params = {
  offset: 0,
  limit: 30,
  longitude: 76.914993,
  latitude: 43.237073,
};

const headers = {
  UserAgent: navigator.userAgent,
  Accept: 'application/json, text/plain, */*',
  AcceptLanguage: 'ru',
  AcceptEncoding: 'gzip, deflate, br',
  SecFetchDest: 'empty',
  SecFetchMode: 'cors',
  SecFetchSite: 'cross-site',
  secFetchSite: 'same-origin',
  secFetchMode: 'cors',
  secFetchDest: 'empty',
  referer: 'https://chocofood.kz/mobile',
  acceptLanguage: 'en-US,en;q=0.9',
  cookie: '__ddg1_=HWuTZwlp6au93QXG2AJ5',
};

// eslint-disable-next-line import/prefer-default-export
export const getDataFromEndPoint = () => instance.get(chocoUrls.restaurants, {
  params,
  headers,
})
  .then(
    (response) => {
      // eslint-disable-next-line no-console
      console.log(response.config.headers);
      return serializeRestaurants(response.data);
    },
  )
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.log(e);
  });

export const getCurl = () => instance.get(chocoUrls.restaurants, {
  params,
}).config.curl;

// export default {
//   getDataFromEndPoint,
// };
