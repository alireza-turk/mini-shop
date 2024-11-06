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
        <button className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center justify-center gap-2 rounded-full border border-rose-500 bg-rose-100 px-4 py-2 font-semibold transition-colors hover:border-red hover:text-red sm:text-sm">
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
      </div>
      <div>
        <p className="text-rose-500">{product.category}</p>
        <p className="text-lg font-semibold text-stone-800">{product.name}</p>
        <p className="font-bold text-red">${product.price}</p>
      </div>
    </div>
  )
}

export default ProductItem
