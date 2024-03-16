import React, { useState } from 'react';
import Beginners from './components/Beginners';
import Intermediate from './components/Intermediate';
import Advanced from './components/Advanced';
import { Link } from 'react-router-dom';

const Music = () => {
  const [showBeginners, setShowBeginners] = useState(false);
  const [showIntermediate, setShowIntermediate] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleButton1 = () => {
    setShowBeginners(!showBeginners);
    setShowIntermediate(false);
    setShowAdvanced(false);
  };

  const handleButton2 = () => {
    setShowBeginners(false);
    setShowIntermediate(!showIntermediate);
    setShowAdvanced(false);
  };

  const handleButton3 = () => {
    setShowBeginners(false);
    setShowIntermediate(false);
    setShowAdvanced(!showAdvanced);
  };

  return (
    <>
   

    <div className="bg-black-900 pt-24 flex  items-center justify-center">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-extrabold text-white bg-gray-900 py-4 px-8 rounded-lg shadow-lg">
          Weekly Practice Schedule
        </h1>
        
        <div className="mt-6 flex flex-col items-center ">
          <div>
            <button
              onClick={handleButton1}
              className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition duration-300 ease-in-out"
              >
              Beginners Button
            </button>
            {showBeginners && <Beginners />}
          </div>
          

          <div>
            <button
              onClick={handleButton2}
              className="mt-6 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition duration-300 ease-in-out"
              >
              Intermediate Button
            </button>
            {showIntermediate && <Intermediate />}
          </div>
          

          <div>
            <button
              onClick={handleButton3}
              className="mt-6 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition duration-300 ease-in-out"
            >
              Advanced Button
            </button>
            {showAdvanced && <Advanced />}
          </div>

          
        </div>
        <Link to="/quize" className='mt-6 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition duration-300 ease-in-out'>Take Quize</Link>
      </div>
    </div>
      </>
  );
};

export default Music;
