import React, { createContext, useState, useContext, useEffect} from 'react';
import Snackbar from '@mui/material/Snackbar';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setshowCart] = useState(false);
    const [cartItems, setcartItems] = useState();
    const [totalPrice, settotalPrice] = useState();
    const [totalQuantities, settotalQuantities] = useState();
    const [qty, setqty] = useState(1);

    const incQty = () => {
        setqty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setqty((prevQty) => {
            if(prevQty - 1 < 1) return 1;
            else{return prevQty - 1;}
        });
    }

    return(
        <Context.Provider
        value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty
        }}>
            {children}
        </Context.Provider>
    )
};

export const useStateContext = () => useContext(Context);