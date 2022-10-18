import { placeHolder } from '@/api/urls';
import { placeHolderInstance as inst } from '@/api/entrypoints';
import { serializeUsers } from '@/serializers/userSerializer';
// import { deSerializeUser } from '@/serializers/userDeserialize';

// eslint-disable-next-line import/prefer-default-export
export const getDataFromPlaceHolder = () => inst.get(placeHolder.users)
  .then(
    (response) => serializeUsers(response.data),
  )
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.log('error', e);
  });

export const patchRequestUser = (data) => inst.patch(`${placeHolder.oneUser}${data.id}`, data);

export const postRequestUser = (data) => inst.post(placeHolder.users, data);

export const deleteRequestUser = (data) => inst.delete(`${placeHolder.oneUser}${data.id}`, data);
