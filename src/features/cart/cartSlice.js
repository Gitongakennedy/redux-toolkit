
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import  CartItems from '../../data'
// import { current } from '@reduxjs/toolkit'

const url='https://course-api.com/react-useReducer-cart-project'

const initialState={
 cartItems:[],
 amount:2,
 total:0,
 isLoading:true
}

export const getCartItems=createAsyncThunk('cart/getcartItems', ()=>{
 return fetch(url).then((res)=>res.json()).catch((error)=>console.log(error))
})

// export const getCartItems=createAsyncThunk('cart/getcartitem',async()=>{
//  try {
//   const resp= await axios(url)
//   return resp.data;
//  } catch (error) {
//   console.log(error)
//  }
// })
// alternative
// install axios fetch does not respond to 404 error 
// responds to network errors only.
// export const getCartItems=createAsyncThunk('cart/getcartitems',async (_,thunkAPI)=>{
//  try {
//   console.log(thunkAPI.getState())
//   const resp= await axios(url)
//   return resp
//  } catch (error) {
//   return thunkAPI.rejectWithValue('There was an error...')
//  }
// }


const cartSlice=createSlice({
 name:'cart',
 initialState,
 reducers:{
clearCart:(state)=>{
 state.cartItems =[]
},
removeItem:(state,action)=>{
 const itemId=action.payload
 state.cartItems=state.cartItems.filter(item=>item.id !== itemId)
},
increaseAmount:(state,action)=>{
const cartItem=state.cartItems.find(item=>item.id === action.payload)
cartItem.amount = cartItem.amount + 1;
},
decrease:(state,action)=>{
 const cartItem=state.cartItems.find(item=>item.id === action.payload)
 cartItem.amount= cartItem.amount - 1;
},
calculateTotals:(state)=>{
 let amount=0;
 let total=0;
state.cartItems.forEach((item)=>{
 amount += item.amount;
 total += item.amount*item.price
})
state.amount=amount;
state.total = parseFloat(total.toFixed(2))
}
 },
 extraReducers:{
  [getCartItems.pending]:(state)=>{
   state.isLoading = true
  },
  [getCartItems.fulfilled]:(state,action)=>{
   console.log(action);
   state.isLoading = false
   state.cartItems = action.payload
  },
  [getCartItems.rejected]:(state)=>{
   state.isLoading = false;
  }
 }
})

// console.log(cartSlice)
export const {clearCart,removeItem,increaseAmount,decrease,calculateTotals}=cartSlice.actions

export default cartSlice.reducer