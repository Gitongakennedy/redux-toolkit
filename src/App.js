import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import Modal from './components/Modal'
import { useDispatch,useSelector } from 'react-redux';
import { calculateTotals,getCartItems } from './features/cart/cartSlice';
import { useEffect } from 'react';
function App() {
  const {cartItems,isLoading}=useSelector((state)=>state.cart);
  const {isOpen}=useSelector((store)=>store.modal)
  const dispatch=useDispatch()

  useEffect(()=>{
dispatch(calculateTotals())
  },[cartItems,dispatch])

useEffect(()=>{
dispatch(getCartItems())
},[dispatch])
if(isLoading){
  return <div className='loading'>
    <h2>Loading...</h2>
  </div>
}

  return (
  <>
  {isOpen && <Modal /> }
  <Navbar />
  <CartContainer />
  </>
  );
}

export default App;
