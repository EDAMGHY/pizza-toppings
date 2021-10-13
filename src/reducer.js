const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        cart: state.cart.map((item) => {
          return { ...item, quantity: 0 };
        }),
      };
    case 'OPEN_MODAL':
      return { ...state, show: true };
    case 'CLOSE_MODAL':
      return { ...state, show: false };
    case 'RESET':
      return {
        ...state,
        cart: state.cart.map((item) => {
          return { ...item, quantity: 0 };
        }),
      };
    case 'GET_TOTALS':
      let { total } = state.cart.reduce(
        (acc, item) => {
          const { quantity, price } = item;
          const itemTotal = quantity * price;
          acc.total += itemTotal;
          return acc;
        },
        {
          total: 3,
        }
      );
      total = parseFloat(total.toFixed(2));

      return {
        ...state,
        total,
      };
    case 'INCREASE':
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return {
        ...state,
        cart: tempCart,
        alert: false,
      };
    case 'DECREASE':
      let tempCart1 = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return {
        ...state,
        alert: false,
        cart: tempCart1,
      };

    default:
      return state;
  }
};
export default reducer;
