import { usersUrl } from '@/api/urls';
import { instanceLocalhost as inst } from '@/api/entrypoints';
import { serializeUsers } from '@/serializers/userSerializer';

// eslint-disable-next-line import/prefer-default-export
export const getUsers = () => inst.get(usersUrl.users)
  .then(
    (response) => serializeUsers(response.data),
  )
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.log('error', e);
  });

export const patchUser = (data) => inst.patch(`${usersUrl.user}${data.id}`, data);

export const postUser = (data) => inst.post(usersUrl.users, data);

export const deleteUser = (data) => inst.delete(`${usersUrl.user}${data.id}`);
