import React, { useState } from 'react';
import './EcommerceProduct.scss';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useParams } from "react-router-dom";
import EcomFooter from '../../../ecommercecomponents/EcomFooter/EcomFooter';
import EcomNavbar from '../../../ecommercecomponents/EcomNavbar/EcomNavbar';
import useFetch from '../../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartReducer';

function EcommerceProduct() {
  const id = useParams().id;
  const dispatch = useDispatch();

  const [selectedImg, setSelectedImg] = useState("img"); // Use useState instead of useTransition
  const [quantity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div style={{padding:"20px"}}>
      <EcomNavbar/>
      
      <div className='product'>
        {loading ? (
          "loading"
        ) : (
          <>
            <div className="left">
              <div className="images" style={{ flexDirection: "column", gap: "20px", justifyContent: "space-between" }}>
                <img
                  src={import.meta.env.VITE_API_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
                  alt=""
                  onClick={() => setSelectedImg("img")}
                />
                <img
                  src={import.meta.env.VITE_API_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url}
                  alt=""
                  onClick={() => setSelectedImg("img2")}
                />
              </div>
            </div>
            <div className="mainimg">
              <img
                src={import.meta.env.VITE_API_UPLOAD_URL + data?.attributes?.[selectedImg]?.data?.attributes?.url}
                alt=""
                // style={{ height: "450px", width: "450px", marginLeft: "-500px" }}
              />
            </div>
            {/* ... rest of your component */}
            <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className='price'>MRP : ₹{data?.attributes?.price}</span>
            
            <div class="rating">
              <input value="5" name="rate" id="star5" type="radio"/>
              <label title="text" for="star5"></label>
              <input value="4" name="rate" id="star4" type="radio"/>
              <label title="text" for="star4"></label>
              <input value="3" name="rate" id="star3" type="radio" checked=""/>
              <label title="text" for="star3"></label>
              <input value="2" name="rate" id="star2" type="radio"/>
              <label title="text" for="star2"></label>
              <input value="1" name="rate" id="star1" type="radio"/>
              <label title="text" for="star1"></label>
            </div>

            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button className='buttonPlus' onClick={()=> setQuantity((prev)=> (prev === 1? 1 : prev-1))}>-</button>
                {quantity}
              <button className='buttonPlus'   onClick={()=> setQuantity(prev=> prev+1)}>+</button>
            </div>
            <button className="add" onClick={()=>dispatch(addToCart({
              id:data.id,
              title:data.attributes.title,
              // desc:data.attributes.desc,
              price:data.attributes.price,
              img:data.attributes.img.data.attributes.url,
              quantity,
            }))}>
              <span></span>
              <span></span>
              <span></span>
              <span></span> 
              <AddShoppingCartIcon/>
              

               ADD TO CART
              
            </button>
            <div className="link">
              <div className="item">
                <span>
                ADD TO WISH LIST
                </span>
                </div>
              <div className="item">
                <span>
                ADD TO COMPARE
                </span>
                </div>
            </div>
            <div className="info">
              <span>Fender American Professional II Stratocaster</span>
              <span>Product Type: Guitar</span>
            </div>
            <hr />
            <div className="info">
              <span>The American Professional II Stratocaster® HSS draws from more than sixty years of innovation, inspiration and evolution to meet the demands of today’s working player.</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
          </>
        )}
      </div>
      <EcomFooter/>
    </div>
  )
}

export default EcommerceProduct;

