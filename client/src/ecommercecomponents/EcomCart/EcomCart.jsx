import React, { useContext } from 'react';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import {makeRequest } from '../../makeRequest';
import {loadStripe} from "@stripe/stripe-js"
import { DarkModeContext } from '../../context/darkModeContext';


function EcomCart({onClose}) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);
  const { toggle, darkMode } = useContext(DarkModeContext);
  
  const totalPrice = () => {
    let total = 0;
    products.forEach(item => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
  'pk_test_51LVV9TSIAChIdT5G7nkdCufEaKmMTx6EdtMAboKOyKVOAnjDCTaomMH2YoqRFdmbf6raFNvtUHl79B2Qc1kYXDlj00CU9tEJaP'
  );

    const handlePayment = async() => {
      try{
        const stripe = await stripePromise;
        const res = await makeRequest.post('/orders',{
          products,
        });
        await stripe.redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        })
      } 
      catch(e){
        console.log(e + " errorMe")
      }
    }
  
 
  



  return (
    <div class={` absolute right-20  top-24 z-40 bg-white p-5 shadow-2xl ${darkMode  ? 'bg-slate-500 ' : ' border-slate-500 '}`}>
    <h1 class="text-slate-600 text-lg text-left font-medium mb-5">Products in your cart</h1>
  
    {products?.map(item => (
      <div class="item flex items-center gap-5 mb-5" key={item.id}>
        <img src={import.meta.env.VITE_API_UPLOAD_URL + item.img} alt="" class="w-20 h-24 object-cover" />
        <div class="details">
          <h1 class="text-black font-medium text-lg">{item.title}</h1>
          <p class="text-gray-600 mb-2 text-sm">{item.desc}</p>
          <div class="price text-blue-500">{item.quantity} x ₹{item.price}</div>
        </div>
        <DeleteOutlinedIcon
          className="delete text-red-500 text-lg cursor-pointer"
          onClick={() => dispatch(removeItem(item.id))}
        />
      </div>
    ))}
    <div class={`total flex justify-between font-medium text-lg mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
      <span>SUBTOTAL</span>
      <span>₹{totalPrice()}</span>
    </div>
  <div className=" m-1">

  
    <button class={`bg-blue-500 text-white py-2 m-2 px-5 rounded flex items-center justify-center gap-2 cursor-pointer`} onClick={handlePayment}>PROCEED TO CHECKOUT</button>
    <button onClick={onClose} class={`bg-gray-200 m-2 text-black py-2 px-5 rounded cursor-pointer`}>CLOSE</button>
    <span class={`reset text-red-500 text-sm cursor-pointer`} onClick={() => dispatch(resetCart())}>
      Reset Cart
    </span>
  </div>
  </div>
  
  );
}

export default EcomCart;
