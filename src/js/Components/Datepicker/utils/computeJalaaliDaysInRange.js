import { DATE_FORMATS } from "../Constants";

const computeJalaaliDaysInRange = ({ _startDate, _stopDate }) => {
  const resultDays = {};

  const { JALAALI_DATE_FORMAT } = DATE_FORMATS;

  let currDay = _startDate;
  while (currDay < _stopDate) {
    const [year, month, day] = currDay
      .format(JALAALI_DATE_FORMAT)
      .split("-")
      .map((el) => Number(el));

    resultDays[`${year}-${month}-${day}`] = {
      isIncluded: true,
      forceIncluded: false,
    };
    currDay = currDay.add(1, "day");
  }

  console.log(JSON.stringify(resultDays, null, 2));

  return resultDays;
};

export default computeJalaaliDaysInRange;
