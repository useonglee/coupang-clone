import deliveryDateFormatter from "@utils/deliveryDateFormatter";
import * as Style from "./DeliveryDate.style";

interface IDeliveryDate {
  date: string;
  isAssured: boolean;
}

const DeliveryDate = ({ date, isAssured }: IDeliveryDate) => {
  return (
    <Style.DeliveryDateStyle>
      {deliveryDateFormatter(date, isAssured)}
      {isAssured ? " 새벽 도착 보장" : " 도착 예정"}
    </Style.DeliveryDateStyle>
  );
};

export default DeliveryDate;
