import { TRY_ON } from "../type/type";

export const tryOnAction = (item) => ({
  type: TRY_ON,
  item,
});
