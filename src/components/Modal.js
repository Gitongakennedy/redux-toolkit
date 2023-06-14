import React from 'react'
import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/modal/ModalSlice'
import { useDispatch } from 'react-redux'
const Modal = () => {
 const dispatch=useDispatch()
  return (
    <div className='modal-container'>
      <div className="modal">
       <h4 className='modal-h4'>Remove all items from your shopping cart?</h4>
      <div className="btn-container">
       <button type='button' className='modal-btn' onClick={()=>{
        dispatch(clearCart())
        dispatch(closeModal())
       }}>confirm</button>
       <button typ='button' className='modal-btn cancel' onClick={()=>dispatch(closeModal())}>cancel</button>
      </div>
      </div>
    </div>
  )
}

export default Modal
