import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import CartItem from './CartItem'
import {openModal} from '../features/modal/ModalSlice'

const CartContainer = () => {
  const dispatch=useDispatch();

 const {cartItems,total,amount}=useSelector((state)=>state.cart)
// if(cartItems.length<1){
//  return <div className='cart-container'>
//   <h2>Your cart</h2>
//   <p>is currently empty</p>
//  </div>
// }
if(amount<1){
 return <div className='cart-container'>
  <h2>Your cart</h2>
<p className='empty'>is currently empty</p>
  </div>
}
  return (
    <div className='cart-container'>
      <h2>Your cart</h2>
      {cartItems.map((item)=>{
       return <CartItem key={item.id} {...item} />
      })}
      {/* cart footer */}
      <hr />
      <header>
       <h3>Total</h3>
       <h3>${total }</h3>
      </header>
      <button type='button' className="clear-btn" onClick={()=>dispatch(openModal())}>clear cart</button>
    </div>
  )
}

export default CartContainer
