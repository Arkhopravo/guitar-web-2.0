import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from '../../context/darkModeContext';

function EcomCard({ item }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div className={`shadow-10 items-center p-2 rounded-sm w-60 ${darkMode ? 'bg-slate-900 text-zinc-200 border border-gray-700' : 'light border border-gray-300'}`}>
      <Link className={`no underline ${darkMode ? 'text-blue-400' : 'text-yellow-400'}`} to={`/ecommerceproducts/${item.id}`}>
        <div className='flex flex-col gap-10  mb-4'>
          <div className="w-full h-64 relative ">
            {item?.attributes.isNew && <span className={`absolute top-4 left-4 ${darkMode ? 'bg-gray-800 text-blue-600' : 'bg-slate-50 text-teal-600'} p-1 font-semibold`}>New Season</span>}
            <img
              src={hovered ? import.meta.env.VITE_API_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url : import.meta.env.VITE_API_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url}
              alt=""
              className='p-3'
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          </div>
          <h2 className={` items-center pl-3  ${darkMode ? 'text-white' : 'text-black'}`}>{item?.attributes.title}</h2>
          <div className={`flex gap-10 pl-1 items-center`}>
            <h3 className={`font-semibold text-xl ${darkMode ? 'text-white' : 'text-black'}`}>₹{item.oldPrice || item?.attributes.price + 2000}</h3>
            <h3 className={`font-semibold text-xl ${darkMode ? 'text-white' : 'text-black'}`}>{item?.attributes.price}</h3>
          </div>
        </div>
      </Link>
      <button
        onClick={() => navigate(`/ecommerceproduct/${item.id}`)}
        className={`p-4 font-semibold items-center rounded-md hover:bg-slate-500 ${darkMode ? 'bg-teal-500 text-white' : 'bg-gray-200 text-black'}`}>
        Buy Now
      </button>
    </div>
  );
}

export default EcomCard;
