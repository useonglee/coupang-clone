import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import useAuth from "@hooks/useAuth";
import useResetCartItem from "../hooks/useResetCartItem";
import * as Style from "./CartNoItem.style";

interface ICartNoItemProps {
  isUserLogin: boolean;
  setIsUserLogin: Dispatch<SetStateAction<boolean>>;
}

const CartNoItem = ({ isUserLogin, setIsUserLogin }: ICartNoItemProps) => {
  const getAuthTokens = useAuth();
  const resetCartItem = useResetCartItem();

  const handleResetCartItemClick = () => {
    resetCartItem();
  };

  const handleLoginClick = () => {
    getAuthTokens({ email: "useong0830@naver.com", password: "1234" });
    setIsUserLogin(true);
  };

  return (
    <>
      <Style.CartNoItemContainer>
        <p>장바구니에 담은 상품이 없습니다.</p>

        {isUserLogin ? (
          <Style.CartItemResetButton
            type="button"
            onClick={handleResetCartItemClick}
          >
            장바구니 초기화
          </Style.CartItemResetButton>
        ) : (
          <Style.CartLoginArea>
            <p>
              로그인을 하시면 장바구니에 보관된 상품을 확인하실 수 있습니다.
            </p>
            <Style.CartPageLoginButton
              type="button"
              onClick={handleLoginClick}
            />
          </Style.CartLoginArea>
        )}
      </Style.CartNoItemContainer>
      <Style.TodayProduct>
        <Link href="https://www.coupang.com/">
          <a />
        </Link>
      </Style.TodayProduct>
    </>
  );
};

export default CartNoItem;
