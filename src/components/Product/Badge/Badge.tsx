import { memo } from "react";
import Image from "next/image";
import * as Style from "./Badge.style";

interface IBadgeProps {
  maxPoint: string;
}

const Badge = ({ maxPoint }: IBadgeProps) => {
  return (
    <Style.BadgeContainer>
      <Image
        src="https://image6.coupangcdn.com/image/badges/cashback/web/list-cash-icon@2x.png"
        alt={`상품 최대 적립 포인트 ${maxPoint}원`}
        width={14}
        height={14}
      />
      <span>{`최대 ${maxPoint}원 적립`}</span>
    </Style.BadgeContainer>
  );
};

export default memo(Badge);
