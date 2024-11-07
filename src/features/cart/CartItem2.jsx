function CartItem2({ item }) {
  return (
    <div className="flex items-center justify-between gap-2 rounded border-b-2 border-gray-200 px-2 py-3">
      <div className="flex items-center gap-3">
        <img
          src={item.image}
          alt={item.name}
          className="h-fit max-w-14 rounded"
        />
        <div className="space-y-1">
          <p className="font-semibold text-rose-900">{item.name}</p>
          <p>
            <span className="font-semibold text-red">{item.quantity}x</span>
            <span className="ml-3 text-rose-500">@&nbsp;${item.unitPrice}</span>
          </p>
        </div>
      </div>
      <span className="ml-2 font-semibold">
        ${item.quantity * item.unitPrice}
      </span>
    </div>
  )
}

export default CartItem2
