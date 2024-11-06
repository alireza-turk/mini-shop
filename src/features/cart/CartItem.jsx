import BtnDeleteItem from './BtnDeleteItem.jsx'

function CartItem({ item }) {
  return (
    <div className="flex items-center justify-between gap-2 rounded border-b-2 border-gray-200 px-2 py-3 hover:bg-gray-100">
      <div className="space-y-1">
        <p className="font-semibold text-rose-900">{item.name}</p>
        <p>
          <span className="font-semibold text-red">{item.quantity}x</span>
          <span className="ml-3 text-rose-500">@&nbsp;${item.unitPrice}</span>
          <span className="ml-2 font-semibold text-rose-800">
            ${item.quantity * item.unitPrice}
          </span>
        </p>
      </div>
      <BtnDeleteItem />
    </div>
  )
}

export default CartItem
