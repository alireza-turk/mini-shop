import CartContainer from '../components/CartContainer.jsx'

function Shop() {
  return (
    <main className="flex flex-col gap-5 px-5 py-7">
      <div className="flex flex-col gap-5">
        <CartContainer />
      </div>
      <p className="text-2xl font-bold">Desserts</p>
    </main>
  )
}

export default Shop
