import axios from 'axios';
import { serializeRestaurantsInfo } from '@/api/serializer';
import { getUrl } from './entrypoints';
import { longitude, latitude } from './urls';

// eslint-disable-next-line import/prefer-default-export
export const getDataFromEndPoint = () => axios.get(getUrl(longitude, latitude))
  .then(
    (response) => serializeRestaurantsInfo(response.data),
  )
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.log(e);
  });

// export default {
//   getDataFromEndPoint,
// };
