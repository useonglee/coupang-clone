import deliveryDateFormatter from "@utils/deliveryDateFormatter";
import * as Style from "./DeliveryDate.style";

interface IDeliveryDate {
  date: string;
  isAssured: boolean;
}

const DeliveryDate = ({ date, isAssured }: IDeliveryDate) => {
  return (
    <Style.DeliveryDateStyle isAssured={isAssured}>
      {deliveryDateFormatter(date)}
      {isAssured ? " 도착 보장" : " 도착 예정"}
      {isAssured && (
        <Style.DeliveryAssuredText>(서울경기 기준)</Style.DeliveryAssuredText>
      )}
    </Style.DeliveryDateStyle>
  );
};

export default DeliveryDate;
