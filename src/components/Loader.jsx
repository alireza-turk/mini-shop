function Loader({ type = 'product_archive' }) {
  if (type === 'product_archive')
    return (
      <div className="flex flex-col gap-8">
        <div className="relative">
          <div className="h-[280px] w-full animate-pulse rounded-lg bg-stone-300 sm:h-[250px]"></div>
          <div className="absolute bottom-0 left-1/2 h-[50px] w-[150px] -translate-x-1/2 translate-y-1/2 animate-pulse rounded-full border bg-stone-300 sm:h-[40px] sm:w-[100px]"></div>
        </div>
        <div className="space-y-1">
          <div className="h-[30px] w-[50px] animate-pulse rounded-lg border bg-stone-300"></div>
          <div className="h-[30px] w-[150px] animate-pulse rounded-lg border bg-stone-300"></div>
          <div className="h-[30px] w-[80px] animate-pulse rounded-lg border bg-stone-300"></div>
        </div>
      </div>
    )
}

export default Loader
