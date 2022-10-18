import { getPhoneInfo } from '../api/helpers';

class Phone {
  constructor(phoneInfo = {}) {
    const info = phoneInfo === {} ? { name: ' ', number: ' ' } : getPhoneInfo(phoneInfo);
    this.name = info.name;
    this.number = info.number;
  }
}

export const serializePhone = (phonesInfo) => new Phone(phonesInfo);
export const serializePhones = (phonesInfo) => phonesInfo.map(serializePhone);

export default {
  // eslint-disable-next-line import/prefer-default-export
  serializePhones,
};
