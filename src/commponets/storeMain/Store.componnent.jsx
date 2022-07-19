import { useContext , useEffect} from 'react'
import { ProductsContext } from '../../context/Products.context';
import Product from '../product/Product.component';
import './Store.style.scss'

function Store() {
  const { products } = useContext(ProductsContext);

  const getProductData = (data) => (
    data.map((element, index)=>(
        <Product key={index}  product={element} index={index } />
      ))
  )

  return (
    <div className="main">
      {products && (products.filtered ? getProductData(products.filtered) : getProductData(products))}
    </div>
  )
}

export default Store
