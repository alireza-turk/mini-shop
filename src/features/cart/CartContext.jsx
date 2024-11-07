import { createContext, useContext, useEffect, useReducer } from 'react'

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cart')) || [],
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
                ...item,
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
                ...item,
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
    case 'cart/clear':
      return { ...state, cartItems: [] }
    default:
      return state
  }
}

const CartContext = createContext()

function CartProvider({ children }) {
  const [{ cartItems }, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const itemAddedToCart = function (itemId) {
    return cartItems.find((item) => item.id === itemId)
  }
  const addToCart = function (product) {
    const newItem = {
      id: product.id,
      name: product.name,
      unitPrice: product.price,
      quantity: 1,
      image: product.image.thumbnail,
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
  const clearCart = function () {
    dispatch({ type: 'cart/clear' })
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
        clearCart,
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
