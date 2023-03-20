import { createSlice } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { serverRoutes } from "../../Utils/const";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`Increased ${action.payload.title} cart quantity`, {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.title} added to cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      const cartItems = JSON.parse(localStorage.getItem("cartItems"));

      fetch(serverRoutes.saveItem, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cartItems }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to save items to the database");
          }
          console.log("Items saved to the database");
        })
        .catch((error) => {
          console.error(error);
        });
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      toast.error(`${action.payload.title} removed from cart`, {
        position: "bottom-left",
      });
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.error(`Decreased ${action.payload.title} cart quantity`, {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

        toast.error(`${action.payload.title} removed from cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state) {
      state.cartItems = [];
      toast.error(`Cart cleared`, {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      return {
        ...state,
        cartTotalQuantity: quantity,
        cartTotalAmount: total,
      };
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotals,
  cartTotalItems,
} = cartSlice.actions;

export default cartSlice.reducer;

export const useCartTotals = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const { cartTotalAmount, cartTotalQuantity } = useMemo(() => {
    const { total, quantity } = cartItems.reduce(
      (cartTotal, cartItem) => {
        const { price, cartQuantity } = cartItem;
        const itemTotal = price * cartQuantity;

        cartTotal.total += itemTotal;
        cartTotal.quantity += cartQuantity;

        return cartTotal;
      },
      {
        total: 0,
        quantity: 0,
      }
    );
    return {
      cartTotalQuantity: quantity,
      cartTotalAmount: total,
    };
  }, [cartItems]);

  return { cartTotalAmount, cartTotalQuantity };
};
