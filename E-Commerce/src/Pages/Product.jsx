import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatableProducts from '../Components/RelatableProducts/RelatableProducts';

function Product() {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams();
  const product=all_product.find((val)=>val.id===Number(productId))
  return (
    <div>
      {/* {console.log(all_product)} */}
      <BreadCrums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatableProducts category={product.category}/>
      </div>
  )
}

export default Product