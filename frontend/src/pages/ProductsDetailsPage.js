import React from 'react'
import {useParams} from 'react-router-dom'

const ProductsDetailsPage = () => {
    const {id} =useParams();
  return (
    <div>{id} product details</div>
  )
}

export default ProductsDetailsPage