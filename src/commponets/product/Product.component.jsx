import Retting from '../retting/Retting.component'
import './Product.style.scss'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Compatibility from '../compatibility/Compatibility.component';

function Product({product, index}) {

  return (
    <div>
      {product.isRecommended &&
              <div className='recommended'>
                  <span >Editor choice</span>
                  <span>&#9733;</span>
              </div>
          }
      <div className="product">
        <span className='number-product'>{index+1}</span>
        <img src={product.img} />
        <div className='description'>
            <span className='describe'>{product.description}</span>
            <ul className='benefits'>
              {product.benefits.map((element, i) => (
                  <li key={i}>{element}</li>
              ))}
          </ul>
        </div>
        <Retting className="ratting" rate={product.rate} reviews={product.reviews} />
        <div className='right'>
          {product.isRecommended && <ThumbUpOffAltIcon  className='icon-recommended'/>}
          <a href={product.website}><button className='visit' >Visit Site</button></a>
          <Compatibility data={ product.compatibility} />
        </div>
      </div>   
    </div>
  )
}

export default Product
