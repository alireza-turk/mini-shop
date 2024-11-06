import { createContext, useContext, useEffect, useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'products/startLoading':
      return { ...state, loading: true }
    case 'products/setDataAfterFetch':
      return { ...state, products: action.payload }
    case 'products/error':
      return { ...state, error: action.payload }
    case 'products/finishLoading':
      return { ...state, loading: false }
    default:
      return state
  }
}

const initialState = {
  products: [],
  loading: false,
  error: '',
}

const ProductsContext = createContext()

function ProductsProvider({ children }) {
  const [{ products, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  )

  useEffect(() => {
    async function loadProducts() {
      dispatch({ type: 'products/startLoading' })
      try {
        const res = await fetch('http://localhost:3000/products')
        if (!res.ok) throw new Error('Products was not found')
        const data = await res.json()
        dispatch({ type: 'products/setDataAfterFetch', payload: data })
      } catch (err) {
        dispatch({ type: 'products/error', payload: err.message })
      } finally {
        dispatch({ type: 'products/finishLoading' })
      }
    }

    loadProducts()
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductsContext)
  if (!context)
    throw new Error('useProducts was used outside of ProductsProvider')
  return context
}

export default ProductsProvider
