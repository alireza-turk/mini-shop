import CartContainer from '../components/CartContainer.jsx'
import { useProducts } from '../contexts/ProductsContext.jsx'
import ProductItem from '../components/ProductItem.jsx'

function Shop() {
  const { loading, error: errorMessage, products } = useProducts()

  return (
    <main className="flex flex-col gap-5 px-5 py-7">
      <div className="flex flex-col gap-5">
        <CartContainer />
      </div>
      <p className="text-2xl font-bold">Desserts</p>
      {loading && <p className="text-xl font-bold">Loading...</p>}
      {errorMessage && <p className="text-xl font-bold">{errorMessage}</p>}
      {products && (
        <div className="grid grid-cols-1 gap-5">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Shop
