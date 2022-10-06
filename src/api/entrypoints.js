import { restaurantsUlr } from './urls';

function setParams(longitude, latitude) {
  // console.log(restaurantsUlr);
  return `${restaurantsUlr}?offset=0&limit=30&longitude=${longitude}&latitude=${latitude}`;
}

export const getUrl = (longitude, latitude) => setParams(longitude, latitude);

export default {
  getUrl,
};

// console.log(getUrl(123, 222));
