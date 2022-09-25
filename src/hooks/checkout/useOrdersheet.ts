import { useQuery } from "react-query";
import queryKey from "@react-query/queryKey";
import checkoutService from "@services/checkout.service";
import { IOrdersheetData } from "@/types/checkout";

const useOrdersheet = (userId: string): IOrdersheetData => {
  const { data: orderSheet } = useQuery(
    [queryKey.orderSheet, userId],
    () => checkoutService.getOrderSheet(userId),
    {
      enabled: !!userId,
    }
  );

  return orderSheet;
};

export default useOrdersheet;
