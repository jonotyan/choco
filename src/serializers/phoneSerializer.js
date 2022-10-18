class Phone {
  constructor(phoneInfo = {}) {
    this.name = phoneInfo.title.length < 1 ? 'нет имени' : phoneInfo.title;
    this.number = phoneInfo.number;
  }
}

export const serializePhone = (phonesInfo) => new Phone(phonesInfo);
export const serializePhones = (phonesInfo) => phonesInfo.map(serializePhone);

export default {
  // eslint-disable-next-line import/prefer-default-export
  serializePhones,
};
