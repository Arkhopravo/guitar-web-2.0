import React from 'react'
import './EcomCard.scss'
import { Link,useNavigate } from "react-router-dom";


function EcomCard({item}) {
  const navigate = useNavigate();

  return (
    <div className='cardpage'>
    
    <Link className="link" to={`/ecommerceproducts/${item.id}`}>
    <div className='card1'>
        <div className="image">
        {item?.attributes.isNew && <span>New Season</span>}
        {/* {item.isNew && <span>New Season</span>} */}
            <img src={
              import.meta.env.VITE_API_UPLOAD_URL+ item.attributes?.img?.data?.attributes?.url
            } alt="" className='mainImg' />
            <img src={
              import.meta.env.VITE_API_UPLOAD_URL+ item.attributes?.img2?.data?.attributes?.url
              } alt="" className='secondImg' />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
            <h3>₹{item.oldPrice || item?.attributes.price + 2000}</h3>
            <h3>{item?.attributes.price}</h3>
            {/* <Link to={{`/ecommerceproduct/${item.id}`}}> */}
            {/* </Link> */}
        </div>
    </div>
    </Link>
        <button onClick={()=>navigate(`/ecommerceproduct/${item.id}`)} className='btn' >Buy Now</button>
    </div>
  )
}

export default EcomCard