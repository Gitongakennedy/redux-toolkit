import React from 'react'
import {FaChevronUp,FaChevronDown} from 'react-icons/fa'
import {useDispatch} from 'react-redux'
import { removeItem,increaseAmount,decrease} from '../features/cart/cartSlice'

const CartItem = ({id,image,title,price,amount}) => {
 const dispatch=useDispatch()
  return (
    <article className='item'>
     <img src={image} alt={title} />
     <div>
      <h4>{title}</h4>
      <h4 className="price">${price}</h4>
      {/* remove button */}
      <button className="remove-btn" onClick={()=>dispatch(removeItem(id))}>remove</button>
     </div>
     <div>
      {/* increase amount */}
      <button className="amount-btn" onClick={()=>{dispatch(increaseAmount(id))}}>
       <FaChevronUp />
      </button>
      <p className="item_amount">{amount}</p>
      {/* decrease amount */}
      <button className="amount-btn" onClick=
      {
       ()=>{
        amount=== 1?dispatch(removeItem(id)):dispatch(decrease(id))
       }
      }>
       <FaChevronDown />
      </button>
     </div>
    </article>
  )
}

export default CartItem
