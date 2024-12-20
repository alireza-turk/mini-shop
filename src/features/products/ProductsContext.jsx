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
        const res = await fetch('data.json')
        if (!res.ok) throw new Error('Products was not found')
        const data = await res.json()
        dispatch({ type: 'products/setDataAfterFetch', payload: data.products })
      } catch (err) {
        dispatch({ type: 'products/error', payload: err.message })
      } finally {
        dispatch({ type: 'products/finishLoading' })
      }
    }

    loadProducts()
  }, [])

  const getProductById = function (productId) {
    return products.find((item) => item.id === productId)
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
        getProductById,
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
