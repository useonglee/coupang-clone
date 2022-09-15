import Image from "next/image";
import { DeliveryDate, Badge } from "@components/Product";
import QuantityModifier from "../QuantityModifier/QuantityModifier";
import useDeleteCartItem from "../hooks/useDeleteCartItem";
import * as Style from "./CartItem.style";
import { VscChromeClose } from "react-icons/vsc";

interface ICartItemProps {
  cartId: number;
  deliveryDate: string;
  isAssured: boolean;
  imageUrl: string;
  title: string;
  price: string;
  rocketType: string | null;
  maxPoint: string;
  quantity: number;
  count: number;
  isFirstItem: boolean;
}

const CartItem = ({
  cartId,
  deliveryDate,
  isAssured,
  imageUrl,
  title,
  price,
  rocketType,
  maxPoint,
  quantity,
  count,
  isFirstItem,
}: ICartItemProps) => {
  const deleteCartItem = useDeleteCartItem();

  const handleDeleteCartItemClick = (cartId: number) => {
    deleteCartItem(cartId);
  };

  return (
    <Style.CartItemContainer>
      <td>체크박스</td>
      <td>
        <Style.CartItemImageWrapper>
          <Image
            src={imageUrl}
            alt={`${title} 상품 이미지`}
            width={78}
            height={78}
          />
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
              <QuantityModifier cartId={cartId} cartQuantity={quantity} />
              <span>{price}원</span>
              <Style.CartItemDeleteButton
                type="button"
                onClick={() => handleDeleteCartItemClick(cartId)}
              >
                <VscChromeClose />
              </Style.CartItemDeleteButton>
            </Style.OptionPricePart>
          </div>
          <Badge maxPoint={maxPoint} />
        </Style.CartItemOptionInfoWrapper>
      </Style.CartItemInfoWrapper>
      <Style.CartItemTotalPrice>
        <p>{price}원</p>
        {rocketType === "fresh" && (
          <Image
            src="https://img1a.coupangcdn.com/image/cmg/icon/ios/logo_rocket_large@3x.png"
            alt="로켓배송 상품"
            width={56}
            height={14}
          />
        )}
      </Style.CartItemTotalPrice>
      {isFirstItem && (
        <Style.CartItemDeliveryFree rowSpan={count}>
          <p>무료</p>
        </Style.CartItemDeliveryFree>
      )}
    </Style.CartItemContainer>
  );
};

export default CartItem;
