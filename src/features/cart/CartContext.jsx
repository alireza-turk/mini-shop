import { createContext, useContext, useReducer } from 'react'

const initialState = {
  cartItems: [
    {
      id: 'p1',
      name: 'Waffle with Berries',
      unitPrice: 6.5,
      quantity: 2,
    },
  ],
}

function reducer(state, action) {
  switch (action.type) {
    case 'cart/addProduct':
      return { ...state, cartItems: [...state.cartItems, action.payload] }
    case 'cart/decreaseItemQuantity':
      if (
        state.cartItems.find((item) => item.id === action.payload)?.quantity <=
        1
      )
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload
          ),
        }

      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? {
                id: item.id,
                name: item.name,
                unitPrice: item.unitPrice,
                quantity: item.quantity - 1,
              }
            : item
        ),
      }
    case 'cart/increaseItemQuantity':
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? {
                id: item.id,
                name: item.name,
                unitPrice: item.unitPrice,
                quantity: item.quantity + 1,
              }
            : item
        ),
      }
    case 'cart/removeItem':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      }
    default:
      return state
  }
}

const CartContext = createContext()

function CartProvider({ children }) {
  const [{ cartItems }, dispatch] = useReducer(reducer, initialState)

  const itemAddedToCart = function (itemId) {
    return cartItems.find((item) => item.id === itemId)
  }
  const addToCart = function (product) {
    const newItem = {
      id: product.id,
      name: product.name,
      unitPrice: product.price,
      quantity: 1,
    }
    dispatch({ type: 'cart/addProduct', payload: newItem })
  }
  const decreaseItemQuantity = function (productId) {
    dispatch({ type: 'cart/decreaseItemQuantity', payload: productId })
  }
  const increaseItemQuantity = function (productId) {
    dispatch({ type: 'cart/increaseItemQuantity', payload: productId })
  }
  const removeItemCart = function (itemId) {
    dispatch({ type: 'cart/removeItem', payload: itemId })
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        itemAddedToCart,
        addToCart,
        decreaseItemQuantity,
        increaseItemQuantity,
        removeItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart was used outside of CartProvider')
  return context
}

export default CartProvider
