import Footer from './ui/Footer.jsx'
import Shop from './pages/Shop.jsx'
import PopupConfirmOrder from './features/cart/PopupConfirmOrder.jsx'
import { useState } from 'react'

function App() {
  const [statePopupConfirm, setStatePopupConfirm] = useState(false)

  return (
    <>
      <Shop setStatePopupConfirm={setStatePopupConfirm} />
      <Footer />
      {statePopupConfirm && (
        <PopupConfirmOrder setState={setStatePopupConfirm} />
      )}
    </>
  )
}

export default App
