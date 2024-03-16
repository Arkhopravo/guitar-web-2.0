import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import {useNavigate  } from 'react-router-dom'; // Import useHistory from React Router

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const history = useNavigate (); // Initialize useHistory

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      setError(error.message);
    } else {
      // Handle the token (e.g., send it to your server for subscription creation)
      console.log(token);

      // Simulate payment success (replace this with actual logic)
      const paymentSuccess = true; // Change this based on your payment result

      if (paymentSuccess) {
        // Payment successful, navigate to the home page
        toast.success('Payment successful!', {
            position: 'top-right', // Adjust the position as needed
            autoClose: 3000, // Close the toast after 3 seconds (adjust as needed)
          });
        history('/'); // Replace '/' with the actual URL of your home page
      } else {
        // Payment failed, show an alert
        toast.error('Payment failed. Please try again.'); // Use your preferred alert library
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 border bg-gray-700 rounded-lg shadow-lg">
      <div className="mb-4">
        <label htmlFor="card-element" className="block font-medium mt-2 text-white">
          Card Details
        </label>
        <div id="card-element" className="mt-2 p-2 border bg-white rounded-lg">
          <CardElement className='mt-2 mb-12 p-1 '/>
        </div>
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Subscribe
      </button>
      {error && (
        <p className="mt-4 text-red-600 font-medium">
          {error}
        </p>
      )}
    </form>
  );
}

export default CheckoutForm;
