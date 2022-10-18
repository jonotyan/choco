function getTime(restaurantTime, todayTime) {
  const currentMinutes = restaurantTime.openHour * 60 + restaurantTime.openMinute;
  const restaurantMinutes = todayTime.hour * 60 + todayTime.minute;
  const minutesToOpen = currentMinutes - restaurantMinutes;
  if (minutesToOpen >= 0) {
    return `откроется через ${Math.trunc(minutesToOpen / 60)}ч ${minutesToOpen % 60}мин`;
  }
  return `закроется в ${restaurantTime.closeHour}:${restaurantTime.closeMinute}`;
}

const getCurrentDateTime = () => {
  const date = new Date();
  return {
    time: {
      hour: date.getHours(),
      minute: date.getUTCMinutes(),
    },
    date: {
      day: date.getDay() - 1,
      month: date.getMonth(),
      year: date.getFullYear(),
    },
  };
};

export const getStatus = (days) => {
  const today = getCurrentDateTime();
  let restaurantTime = null;
  for (let i = 0; i < days.length; i += 1) {
    // eslint-disable-next-line no-console
    if (i === today.date.day) {
      restaurantTime = {
        openHour: days[i].startedTime.hour,
        openMinute: days[i].startedTime.minute,
        closeHour: days[i].endedTime.hour,
        closeMinute: days[i].endedTime.minute,
      };
      break;
    }
  }
  return getTime(restaurantTime, today.time);
};

function getOneRestaurantInfo(restaurantData) {
  console.log(restaurantData);
}

export default {
  getOneRestaurantInfo,
  getTime,
  getCurrentDateTime,
};
