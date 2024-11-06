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
    case 'cart/addProductToCart':
      return { ...state, cartItems: [...state.cartItems, action.payload] }
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

    dispatch({ type: 'cart/addProductToCart', payload: newItem })
  }

  return (
    <CartContext.Provider value={{ cartItems, itemAddedToCart, addToCart }}>
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
