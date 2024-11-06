import CartContainer from '../components/CartContainer.jsx'
import { useProducts } from '../contexts/ProductsContext.jsx'
import ProductItem from '../components/ProductItem.jsx'
import Loader from '../components/Loader.jsx'

function Shop() {
  const { loading, error: errorMessage, products } = useProducts()

  return (
    <main className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-7 md:flex-row-reverse">
      <div className="flex flex-col gap-5 sm:basis-1/3">
        <CartContainer />
      </div>
      <div className="space-y-6 sm:basis-2/3">
        <p className="text-2xl font-bold">Desserts</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {loading && (
            <>
              <Loader />
              <Loader />
              <Loader />
              <Loader />
              <Loader />
              <Loader />
            </>
          )}
          {products &&
            products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
        </div>
        {errorMessage && <p className="text-xl font-bold">{errorMessage}</p>}
      </div>
    </main>
  )
}

export default Shop
