// SubscriptionPanel.js
import React,{useContext, useState} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './components/CheckoutForm';
import { useNavigate } from 'react-router-dom';
import HomeNavbar from '../../homecomponents/HomeNavbar/HomeNavbar';
import { useDispatch } from 'react-redux';
import { DarkModeContext } from '../../context/darkModeContext';
// import { useHistory } from 'react-router-dom'; 

const stripePromise = loadStripe('pk_test_51LVV9TSIAChIdT5G7nkdCufEaKmMTx6EdtMAboKOyKVOAnjDCTaomMH2YoqRFdmbf6raFNvtUHl79B2Qc1kYXDlj00CU9tEJaP'); // Replace with your Stripe publishable key

const plans = [
    {
      id: 'weekly',
      name: 'Weekly Plan',
      price: '₹9.99',
      description: 'Access our services for 7 days.',
    },
    {
      id: 'monthly',
      name: 'Monthly Plan',
      price: '₹29.99',
      description: 'Access our services for a month.',
    },
    {
      id: 'yearly',
      name: 'Yearly Plan',
      price: '₹199.99',
      description: 'Access our services for a year and save!',
    },
  ];


  const handlePlanChange = (planId) => {
    setSelectedPlan(planId);
  };


function SubscriptionPanel() {
    const [selectedPlan, setSelectedPlan] = useState('monthly');
    // const history = useHistory();
    const navigate = useNavigate()

    const handlePlanChange = (plan) => {
        setSelectedPlan(plan);
      };

     
      
      const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <>
    <HomeNavbar/>
    <div className={`${darkMode? "bg-gray-500" : 'bg-gray-200'}`}>

    
     <div className=" max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4">Subscription Plans</h2>
      <div className="flex space-x-4 mb-4">
        {plans.map((plan) => (
          <button
            key={plan.id}
            className={`flex-1 bg-slate-800 text-white font-semibold py-2 px-4 rounded ${
              selectedPlan === plan.id ? 'bg-slate-100 text-slate-700' : ''
            }`}
            onClick={() => handlePlanChange(plan.id)}
          >
            {plan.name}
          </button>
        ))}
      </div>
      <div className="bg-slate-800 shadow-lg p-6 rounded-lg">
        <h3 className="text-xl font-semibold">{plans.find((plan) => plan.id === selectedPlan).name}</h3>
          
        <p className="text-gray-100 mt-2">{plans.find((plan) => plan.id === selectedPlan).description}</p>
        <p className="text-2xl font-semibold text-blue-100 mt-4">
          {plans.find((plan) => plan.id === selectedPlan).price}
        </p>
      

      </div>
      <div className="mt-12 bg-gray-800"></div>
      <Elements stripe={stripePromise}>
        <CheckoutForm selectedPlan={selectedPlan} />
      </Elements>
      
    </div>
    <div className="h-1/2 w-full">
      <img src="src/assets/banner04.svg" alt=""   />
    </div>
    </div>
    </>
  );
}

export default SubscriptionPanel;




