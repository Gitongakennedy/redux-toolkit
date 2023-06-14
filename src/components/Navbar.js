import {useSelector} from 'react-redux'
import {FaShoppingCart} from 'react-icons/fa'

const Navbar = () => {
 const amount=useSelector((store)=>store.cart.amount)
 // const {amount}=useSelector((store)=>store.cart)
  return (
    <nav>
      <div className="nav-center">
       <h3>Redux toolkit</h3>
       <div className="nav-container">
          <FaShoppingCart className='icon'/>
          <span className="amount">{amount}</span>
       </div>
      </div>
    </nav>
  )
}

export default Navbar
