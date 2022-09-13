import { DeliveryDate } from "@components/Product";
import Badge from "@components/Product/Badge/Badge";
import Image from "next/image";
import * as Style from "./CartItem.style";

interface ICartItemProps {
  deliveryDate: string;
  isAssured: boolean;
  imageUrl: string;
  title: string;
  price: number;
  rocketType: string | null;
  maxPoint: number;
  isFirstItem: boolean;
}

const CartItem = ({
  deliveryDate,
  isAssured,
  imageUrl,
  title,
  price,
  rocketType,
  maxPoint,
  isFirstItem,
}: ICartItemProps) => {
  return (
    <Style.CartItemContainer>
      <td>체크박스</td>
      <td>
        <Style.CartItemImageWrapper>
          <Image src={imageUrl} alt="" width={78} height={78} />
        </Style.CartItemImageWrapper>
      </td>
      <Style.CartItemInfoWrapper>
        <Style.CartItemTitle>
          <p>{title}</p>
        </Style.CartItemTitle>
        <Style.CartItemOptionInfoWrapper>
          <div>
            <DeliveryDate date={deliveryDate} isAssured={isAssured} />
            <Style.OptionPricePart>
              <span>{price}원</span>
              <span>{price}원</span>
            </Style.OptionPricePart>
          </div>
          <Badge maxPoint={maxPoint} />
        </Style.CartItemOptionInfoWrapper>
      </Style.CartItemInfoWrapper>
      <Style.CartItemTotalPrice>
        <p>{price}원</p>
        <Image
          src="https://img1a.coupangcdn.com/image/cmg/icon/ios/logo_rocket_large@3x.png"
          alt="로켓배송 상품"
          width={56}
          height={14}
        />
      </Style.CartItemTotalPrice>
      {isFirstItem && (
        <Style.CartItemDeliveryFree rowSpan={5}>
          <p>무료</p>
        </Style.CartItemDeliveryFree>
      )}
    </Style.CartItemContainer>
  );
};

export default CartItem;
