import * as Style from "./CartTotalPrice.style";

interface ICartTotalPriceProps {
  totalPrice: string;
}

const CartTotalPrice = ({ totalPrice }: ICartTotalPriceProps) => {
  return (
    <Style.CartTotalPriceContainer>
      <span>
        총 상품 가격 <Style.FinalTotalPrice>{totalPrice}</Style.FinalTotalPrice>
        원
      </span>
      <Style.PlusIconImage />
      <span>
        총 배송비 <Style.FinalTotalPrice>0</Style.FinalTotalPrice>
      </span>
      <Style.EqualIconImage />
      <span>
        총 주문금액
        <Style.FinalOrderTotalPrice>{totalPrice}</Style.FinalOrderTotalPrice>원
      </span>
    </Style.CartTotalPriceContainer>
  );
};

export default CartTotalPrice;
