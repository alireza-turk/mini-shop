import BtnAddToCart from './BtnAddToCart.jsx'
import { useCart } from '../cart/CartContext.jsx'
import { useState } from 'react'

function ProductItem({ product }) {
  const { itemAddedToCart } = useCart()
  const isItemAdded = Boolean(itemAddedToCart(product.id))
  const [loadingImg, setLoadingImg] = useState(true)

  return (
    <div className="flex flex-col gap-8">
      <div className="relative">
        {loadingImg && (
          <div className="h-[280px] w-full animate-pulse rounded-lg bg-stone-300 sm:h-[250px]"></div>
        )}
        <picture
          className={loadingImg ? 'hidden' : ''}
          onLoad={() => setLoadingImg(false)}
        >
          <source srcSet={product.image.mobile} media="(max-width: 580px)" />
          <source srcSet={product.image.tablet} media="(min-width: 580px)" />
          <img
            className={`w-full rounded-lg ${isItemAdded ? 'border-2 border-red' : ''}`}
            src={product.image.mobile}
            alt={product.name}
          />
        </picture>
        <BtnAddToCart productId={product.id} />
      </div>
      <div>
        <p className="text-rose-500">{product.category}</p>
        <p className="font-semibold text-stone-800">{product.name}</p>
        <p className="font-bold text-red">${product.price}</p>
      </div>
    </div>
  )
}

export default ProductItem
