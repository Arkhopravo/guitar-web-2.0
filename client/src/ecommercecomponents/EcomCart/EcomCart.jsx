import React from 'react';
import './EcomCart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import {makeRequest } from '../../makeRequest';
import {loadStripe} from "@stripe/stripe-js"


function EcomCart({onClose}) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);

  
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
    <div className="cart">
      <h1>Products in your cart</h1>
      
      {products?.map(item => (
        <div className="item" key={item.id}>
          <img src={import.meta.env.VITE_API_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <div className="price">
              {item.quantity} x ₹{item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹{totalPrice()}</span>
      </div>
      {/* <Elements stripe={stripePromise} options={options}> */}

      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      {/* <PaymentElement /> */}
      {/* <button>PROCEED TO CHECKOUT</button> */}
      {/* </Elements> */}
      <button onClick={onClose}>CLOSE</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
}

export default EcomCart;
