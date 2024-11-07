import CartContainer from '../features/cart/CartContainer.jsx'
import { useProducts } from '../features/products/ProductsContext.jsx'
import ProductItem from '../features/products/ProductItem.jsx'
import Loader from '../ui/Loader.jsx'

function Shop({ setStatePopupConfirm }) {
  const { loading, error: errorMessage, products } = useProducts()

  return (
    <main className="mx-auto flex min-h-screen max-w-[1440px] flex-col gap-5 px-5 py-7 md:flex-row-reverse">
      <div className="flex flex-col gap-5 sm:basis-1/3">
        <CartContainer setStatePopupConfirm={setStatePopupConfirm} />
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
            </>
          )}
          {products &&
            products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
        </div>
        {errorMessage && (
          <p className="animate-pulse rounded-lg bg-red/50 px-4 py-6 text-center text-xl font-bold text-rose-100">
            {errorMessage} 😪
          </p>
        )}
      </div>
    </main>
  )
}

export default Shop
