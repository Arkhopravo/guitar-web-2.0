import React,{useState} from 'react'
import "./EcommerceProducts.scss"
import { useParams } from "react-router-dom";
import EcomFooter from '../../../ecommercecomponents/EcomFooter/EcomFooter'
import EcomNavbar from '../../../ecommercecomponents/EcomNavbar/EcomNavbar'
import EcomList from '../../../ecommercecomponents/EcomList/EcomList';
import useFetch from '../../../hooks/useFetch';
import { Link } from 'react-router-dom';
function EcommerceProducts() {

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  
  const { data, loading, error} = useFetch(`/subcategories?[filters][categories][id][$eq]=${catId}`)

  const handleChange = (e)=>{
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) =>item !== value))
  }
 
 console.log(selectedSubCats);
 
  return (
    <div>
        <EcomNavbar/>
        <div className="products">
          <div className="left">
            <div className="filterIten">
              <h2>Product Categories</h2>
              {data?.map((item)=>(<div className="inputItem" key={item.id}>
                <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>))}
              {/* <div className="inputItem">
                <input type="checkbox" id='2' value={2} />
                <label htmlFor="2">Bass Guitars</label>
              </div>
              <div className="inputItem">
                <input type="checkbox" id='3' value={3} />
                <label htmlFor="3">Mandoline</label>
              </div>
              <div className="inputItem">
                <input type="checkbox" id='4' value={4} />
                <label htmlFor="4">Ukulele</label>
              </div> */}
            </div>
            <div className="filterIten">
              <h2>Filter By Price </h2>
              <div className="inputItem">
                <span>100</span>
                <input type="range" min={1000} max={1000000}  onChange={(e)=>setMaxPrice(e.target.value)}/>
                <span>{maxPrice}</span>
              </div>
            </div>
            <div className="filterIten">
              <h2>Short By</h2>
              <div className="inputItem">

              <input type="radio" id='asc' value="asc" name="price" onChange={e=>setSort("asc")} />
              <label htmlFor="asc">Price (Lowest first)</label>
              </div>
              <div className="inputItem">

              <input type="radio" id='desc' value="desc" name="price" onChange={e=>setSort("desc")} />
              <label htmlFor="desc">Price (Highest first)</label>
              </div>
            </div>
          </div>
          <div className="right">
            <img className='catImg'
            src="https://lajolla.com/wp-content/uploads/2022/01/Guitar-Stores-in-San-Diego-1024x576.jpg"
             alt="" />
             <Link to="">

             <EcomList catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
             </Link>
          </div>
        </div>
        <EcomFooter/>
    </div>
  )
}

export default EcommerceProducts