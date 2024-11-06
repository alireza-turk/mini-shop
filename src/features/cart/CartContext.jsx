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
    default:
      return state
  }
}

const CartContext = createContext()

function CartProvider({ children }) {
  const [{ cartItems }, dispatch] = useReducer(reducer, initialState)

  return (
    <CartContext.Provider value={{ cartItems }}>
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
