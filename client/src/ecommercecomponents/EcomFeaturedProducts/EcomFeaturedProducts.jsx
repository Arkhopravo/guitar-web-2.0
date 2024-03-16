import React,{useEffect, useState} from 'react'
import "./EcomFeaturedProducts.scss"
import EcomCard from '../EcomCard/EcomCard'
import axios from 'axios'
import useFetch from '../../hooks/useFetch'

function EcomFeaturedProducts({types}) {
    // https://static.wixstatic.com/media/1ad96d_b77622cbb6b2423aab077e5b5ab03553~mv2_d_1500_2250_s_2.jpg/v1/fill/w_1500,h_2250,al_c,q_85/1ad96d_b77622cbb6b2423aab077e5b5ab03553~mv2_d_1500_2250_s_2.jpg
    // https://images.squarespace-cdn.com/content/v1/5fd192ef3046c36afe54ca4b/1671566850877-DX90AEL072OFMN5DWBH4/image-asset.jpeg
//https://www.guitarstorage.com/wp-content/uploads/carousel-rotating-six-guitar-stand.jpg

//     const data = [
//         {
//         id: 1, 
//         img:"https://cdn.shoplightspeed.com/shops/643917/files/53137691/1652x2313x2/fender-fender-american-professional-ii-stratocaste.jpg",
//         img2: "https://i.imgur.com/sDkNnvF.jpeg",
//         title:"Fender American Professional II Stratocaster",
//         isNew: true,
//         oldPrice: 19,
//         price: 12,
//     },
//     {
//         id: 2, 
//         img:"https://cdn.shopify.com/s/files/1/0657/6821/products/GIB-LPS5P00GTNH1.jpg?v=1679052764",
//         img2: "https://eddiesguitars.com/wp-content/uploads/2022/04/gibson_f11-006_6.jpg",
//         title:"Gibson Les Paul Standard '50s",
//         isNew: true,
//         oldPrice: 19,
//         price: 12,
//     },
//     {
//         id: 3, 
//         img:"https://www.euphonycart.com/static-file/uploads/2020/11/prs-se-custom-24-charcoal-burst-2020.jpg",
//         img2: "https://sirclocdn.com/nafiriguitar/products/_220909163648_DHL%205_zoom.jpg",
//         title:"PRS SE Custom 24",
//         isNew: true,
//         oldPrice: 19,
//         price: 12,
        
//     },
//     {
//         id: 4, 
//         img:"https://cdn.shopify.com/s/files/1/0216/7118/2436/products/image_dee89be1-f702-47af-bf8c-61f7d217898e_1800x1800.jpg?v=1642204724",
//         img2: "https://m.media-amazon.com/images/I/71B160VTf1L._SL1440_.jpg",
//         title:"Yamaha FG800",
//         isNew: true,
//         oldPrice: 19,
//         price: 12,
//     },
// ]

// const [data, setData] = useState([])
// const [products, setProducts]     = useState([])

// useEffect(() => {
//   const fetchData = async () => {
//     try{
//         const data = await axios.get(process.env.REACT_APP_API_URL + "/products",
//         {
//             headers:{
//                 Authorization:"bearer" + process.env.REACT_APP_API_TOKEN,
//             },
//         },
//         )
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
//   }
//   fetchData();
// }, [])

// const [products, setProducts] = useState([]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_API_URL}/ecommerceproducts`,
//         {
//           headers: {
//             Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
//           },
//         }
//       );
//       console.log(data);
//       setData(res.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   fetchData();
// }, []);


const {data, loading, error} = useFetch(
  `/products?populate=*&[filters][type][$eq]=${types}`
);
// const [data, setData] = useState([]);

// useEffect(() => {
//     const fetchData = async ()=>{
//       try{
//         const res = await axios.get(`${import.meta.env.VITE_API_URL}/products?populate=*&[filters][type][$eq]=${types}`
//         ,{
//           headers:{
//             Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
//           }
//         })
//         setData(res.data.data);
//       }catch(err){
//         console.log(err);
//       }
//     };
//     fetchData(); 
// },[])


  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{types} products</h1>
            <p>
            These are just a few examples of trending guitar models, and there are many more options available in the market. It's important to consider your playing style, genre preferences, and personal preferences when choosing a guitar model that suits you best.
        </p>
        </div>
        <div className="bottom">
            {/* <EcomCard/> */}
            {error? "Something Went wrong" :(loading?
            "loading.."
            :data.map((item) => <EcomCard item={item} key={item.id} />))}
        </div>
    </div>
  )
}

export default EcomFeaturedProducts