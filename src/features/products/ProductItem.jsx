import BtnAddToCart from './BtnAddToCart.jsx'

function ProductItem({ product }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="relative">
        <picture>
          <source srcSet={product.image.mobile} media="(max-width: 580px)" />
          <source srcSet={product.image.tablet} media="(min-width: 580px)" />
          <img
            className="w-full rounded-lg"
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
