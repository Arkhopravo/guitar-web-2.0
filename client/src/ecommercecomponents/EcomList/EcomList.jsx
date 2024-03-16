import React from 'react'
import './EcomList.scss'
import EcomCard from '../EcomCard/EcomCard'
import useFetch from '../../hooks/useFetch'
import { Link } from 'react-router-dom'


// const data = [
//     {
//     id: 1, 
//     img:"https://static.wixstatic.com/media/1ad96d_b77622cbb6b2423aab077e5b5ab03553~mv2_d_1500_2250_s_2.jpg/v1/fill/w_1500,h_2250,al_c,q_85/1ad96d_b77622cbb6b2423aab077e5b5ab03553~mv2_d_1500_2250_s_2.jpg",
//     // img2: "https://i.imgur.com/sDkNnvF.jpeg",
//     title:"Fender American Professional II Stratocaster",
//     isNew: true,
//     oldPrice: 19,
//     price: 12,
// },
// {
//     id: 2, 
//     img:"https://images.squarespace-cdn.com/content/v1/5fd192ef3046c36afe54ca4b/1671566850877-DX90AEL072OFMN5DWBH4/image-asset.jpeg",
//     // img2: "https://eddiesguitars.com/wp-content/uploads/2022/04/gibson_f11-006_6.jpg",
//     title:"Gibson Les Paul Standard '50s",
//     isNew: true,
//     oldPrice: 19,
//     price: 12,
// },
// {
//     id: 3, 
//     img:"https://www.guitarstorage.com/wp-content/uploads/carousel-rotating-six-guitar-stand.jpg",
//     // img2: "https://sirclocdn.com/nafiriguitar/products/_220909163648_DHL%205_zoom.jpg",
//     title:"PRS SE Custom 24",
//     isNew: true,
//     oldPrice: 19,
//     price: 12,
    
// },
// {
//     id: 4, 
//     img:"https://www.superprof.co.in/blog/wp-content/uploads/2019/03/bass-on-stage.jpg",
//     // img2: "https://m.media-amazon.com/images/I/71B160VTf1L._SL1440_.jpg",
//     title:"Yamaha FG800",
//     isNew: true,
//     oldPrice: 19,
//     price: 12,
// },]


function EcomList({subCats, maxPrice, catId, sort}) {
  
    const { data, loading, error} = useFetch(
        `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
            (item) => `&[filters][subcategories][id][$eq]=${item}`
        )}`
        )
  return (
    <Link to="">

    <div className='list'>
    {loading ?"loading" : data?.map(item => (<EcomCard item={item} key={item.id}/>))}
    </div>
    </Link>
  )
}

export default EcomList