function getTime(restaurantTime, todayTime) {
  const restarauntCloseHour = restaurantTime.openHour + 12;
  console.log(restarauntCloseHour);
  const restaurantOpenMinutes = restaurantTime.openHour * 60 + restaurantTime.openMinute;
  const restaurantCloseMinutes = restarauntCloseHour * 60 + restaurantTime.closeMinute;
  const currentMinutes = todayTime.hour * 60 + todayTime.minute;
  let minutesToOpen = 0;
  let minuteToClose = 0;
  if (minutesToOpen < 0) {
    minutesToOpen = restaurantOpenMinutes - currentMinutes;
    const hourToOpen = (restaurantOpenMinutes - currentMinutes) / 60;
    if (minutesToOpen % 60 === 0) {
      minutesToOpen = '00';
    } else {
      minutesToOpen %= 60;
    }
    return `откроется через ${Math.trunc(hourToOpen)} ч ${minutesToOpen} мин`;
  }
  minuteToClose = restaurantCloseMinutes - currentMinutes;
  const hourToClose = (restaurantCloseMinutes - currentMinutes) / 60;
  if (minuteToClose % 60 === 0) {
    minuteToClose = '00';
  } else {
    minuteToClose %= 60;
  }
  return `закроется через ${Math.trunc(hourToClose)} ч ${minuteToClose} мин`;
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
  const day = days[today.date.day];
  return getTime(
    {
      openHour: day.startedTime.hour,
      openMinute: day.startedTime.minute,
      closeHour: day.endedTime.hour,
      closeMinute: day.endedTime.minute,
    },
    today.time,
  );
};

export default {
  getTime,
  getCurrentDateTime,
};
