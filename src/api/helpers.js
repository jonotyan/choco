export function getPhonesInfo(phones) {
  const checkName = (name) => {
    if (name.length > 2) {
      return name;
    }
    return 'нет имени';
  };
  return {
    name: checkName(phones[0].title),
    number: phones[0].number,
  };
}

function getStatus(restaurantTime, todayTime) {
  const hoursToOpen = restaurantTime.openHour - todayTime.hour;
  const minuteToOpen = restaurantTime.openMinute - todayTime.minute;
  if (hoursToOpen >= 0) {
    if (minuteToOpen >= 0) {
      return `откроется через ${hoursToOpen}ч ${minuteToOpen}мин`;
    }
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

export const getTime = (week) => {
  const today = getCurrentDateTime();
  let restaurantTime = null;
  for (let i = 0; i < week.length; i += 1) {
    // eslint-disable-next-line no-console
    if (i === today.date.day) {
      restaurantTime = {
        openHour: week[i].started_at.hour,
        openMinute: week[i].started_at.minute,
        closeHour: week[i].ended_at.hour,
        closeMinute: week[i].ended_at.minute,
      };
      break;
    }
  }
  return getStatus(restaurantTime, today.time);
};

function getOneRestaurantInfo(restaurantData) {
  console.log(restaurantData);
}

export default {
  getPhonesInfo,
  getOneRestaurantInfo,
  getTime,
  getCurrentDateTime,
};
