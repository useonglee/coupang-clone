import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");

const diffChecker = (date: string, day: number) => {
  const today = dayjs().get("D");
  const formattedDate = dayjs(date).format("dd");

  const dayDiff = day - today;

  if (dayDiff === 1) {
    return `내일(${formattedDate})`;
  }

  if (dayDiff === 2) {
    return `모레(${formattedDate})`;
  }

  return `${formattedDate}요일`;
};

const deliveryDateFormatter = (date: string) => {
  const deliveryMonth = dayjs(date).get("M") + 1;
  const deliveryDay = dayjs(date).get("D");
  const dateResult = diffChecker(date, deliveryDay);

  return `${dateResult} ${deliveryMonth}/${deliveryDay}`;
};

export default deliveryDateFormatter;
