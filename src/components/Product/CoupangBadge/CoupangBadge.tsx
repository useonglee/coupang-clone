import Image from "next/image";
import * as Style from "./Coupangbadge.style";

interface ICoupangBadgeProps {
  isRecommended: boolean;
  shippinFee: number;
}

const CoupangRecommended = () => {
  return (
    <Image
      src="https://image8.coupangcdn.com/image/badges/cou_pick/web/coupick@2x.png"
      alt="쿠팡 추천 뱃지"
      width={68}
      height={20}
    />
  );
};

const ShippinFee = ({ shippinFee }: Pick<ICoupangBadgeProps, "shippinFee">) => {
  return (
    <>
      {shippinFee === 0 && (
        <Style.ShippnFeeBadgeStyle>무료배송</Style.ShippnFeeBadgeStyle>
      )}
    </>
  );
};

const Recommended = ({ isRecommended, shippinFee }: ICoupangBadgeProps) => {
  return (
    <Style.CoupangBadgeContainer>
      {isRecommended ? (
        <CoupangRecommended />
      ) : (
        <ShippinFee shippinFee={shippinFee} />
      )}
    </Style.CoupangBadgeContainer>
  );
};

interface IBenefitProps {
  maxPoint: number;
}

const Benefit = ({ maxPoint }: IBenefitProps) => {
  return (
    <Style.BenefitBadgeContainer>
      <Image
        src="https://image6.coupangcdn.com/image/badges/cashback/web/list-cash-icon@2x.png"
        alt={`상품 최대 적립 포인트 ${maxPoint}원`}
        width={14}
        height={14}
      />
      <span>{`최대 ${maxPoint}원 적립`}</span>
    </Style.BenefitBadgeContainer>
  );
};

const CoupangBadge = {
  Recommended,
  Benefit,
};

export default CoupangBadge;
