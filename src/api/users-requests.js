import { placeHolder } from '@/api/urls';
import { placeHolderInstance } from '@/api/entrypoints';
import { serializeUsers } from '@/serializers/userSerializer';

// eslint-disable-next-line import/prefer-default-export
export const getDataFromPlaceHolder = () => placeHolderInstance.get(placeHolder.users)
  .then(
    (response) => serializeUsers(response.data),
  )
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.log(e);
  });

// export default {
//   getDataFromEndPoint,
// };
