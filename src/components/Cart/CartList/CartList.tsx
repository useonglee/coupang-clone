import useCartList from "@components/Cart/hooks/useCartList";
import cartService from "@services/cart.service";

const CartList = () => {
  const cartListData = useCartList();
  console.log(cartListData);

  return <div>카트 리스트</div>;
};

export default CartList;
