import * as actionType from "../constants/cartConstant";

const cartReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItem.find(
        (product) => product.id === item.id
      );
      if (existItem) {
        return {
          ...state,
          cartItem: state.cartItem.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItem: [...state.cartItem, item],
        };
      }

    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (product) => product.id != action.payload
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
