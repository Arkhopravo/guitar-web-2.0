import React,{useEffect, useState} from 'react'
// import "./EcomFeaturedProducts.scss"
import EcomCard from '../EcomCard/EcomCard'
import axios from 'axios'
import useFetch from '../../hooks/useFetch'

function EcomFeaturedProducts({types}) {

const {data, loading, error} = useFetch(
  `/products?populate=*&[filters][type][$eq]=${types}`
);




  return (
    <div className='featuredProducts'>
        <div className=" m-24 flex md:flex-row flex-col items-center justify-center mb-12">
            <h1 className='text-sm p-2 font-semibold font-serif' >{types} products</h1>
            <p className='text-gray-500 p-3'>
            These are just a few examples of trending guitar models, and there are many more options available in the market. It's important to consider your playing style, genre preferences, and personal preferences when choosing a guitar model that suits you best.
        </p>
        </div>
        <div className=" mt-8 mb-14 flex flex-wrap justify-center gap-12">
            {/* <EcomCard/> */}
            {error? "Something Went wrong" :(loading?
            "loading.."
            :data.map((item) => <EcomCard item={item} key={item.id} />))}
        </div>
    </div>
  )
}

export default EcomFeaturedProducts