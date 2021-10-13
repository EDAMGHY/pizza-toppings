import React, { useContext, useReducer, useEffect } from 'react';
import data from './data/toppings.json';
import reducer from './reducer';
const AppContext = React.createContext();
const initialState = {
  show: false,
  cart: data,
  total: 3,
  alert: true,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClose = () => dispatch({ type: 'CLOSE_MODAL' });
  const handleShow = () => dispatch({ type: 'OPEN_MODAL' });
  const increase = (id) => dispatch({ type: 'INCREASE', payload: id });
  const decrease = (id) => dispatch({ type: 'DECREASE', payload: id });
  const reset = () => dispatch({ type: 'RESET' });
  useEffect(() => {
    dispatch({ type: 'GET_DATA' });
  }, []);
  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleClose,
        handleShow,
        increase,
        decrease,
        reset,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
