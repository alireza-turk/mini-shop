import { useCart } from '../cart/CartContext.jsx'
import { useProducts } from './ProductsContext.jsx'

function BtnAddToCart({ productId }) {
  const {
    itemAddedToCart,
    addToCart,
    decreaseItemQuantity,
    increaseItemQuantity,
  } = useCart()
  const { getProductById } = useProducts()

  const currProduct = itemAddedToCart(productId)

  if (currProduct)
    return (
      <div className="absolute bottom-0 left-1/2 flex w-[150px] -translate-x-1/2 translate-y-1/2 items-center justify-between gap-2 rounded-full bg-red px-5 py-3 font-semibold text-rose-100 sm:text-sm">
        <button
          onClick={() => decreaseItemQuantity(productId)}
          className="rounded-full border-2 border-rose-100 p-1 transition-colors hover:bg-rose-100 [&:hover_path]:fill-red [&_path]:fill-rose-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 2"
          >
            <path d="M0 .375h10v1.25H0V.375Z" />
          </svg>
        </button>
        {currProduct.quantity}
        <button
          onClick={() => increaseItemQuantity(productId)}
          className="rounded-full border-2 border-rose-100 p-1 transition-colors hover:bg-rose-100 [&:hover_path]:fill-red [&_path]:fill-rose-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
          </svg>
        </button>
      </div>
    )

  return (
    <button
      onClick={() => addToCart(getProductById(productId))}
      className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center justify-center gap-2 rounded-full border border-rose-500 bg-rose-100 px-4 py-3 font-semibold transition-colors hover:border-red hover:text-red sm:w-[150px] sm:text-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        fill="none"
        viewBox="0 0 21 20"
      >
        <g fill="#C73B0F">
          <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
          <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M.333 0h20v20h-20z" />
          </clipPath>
        </defs>
      </svg>
      Add to Cart
    </button>
  )
}

export default BtnAddToCart
