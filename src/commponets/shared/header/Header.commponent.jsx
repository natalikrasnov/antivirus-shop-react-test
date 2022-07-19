import { useState, useContext } from 'react'

import "semantic-ui-css/semantic.min.css";
import {Button,  Popup } from "semantic-ui-react";

import Search from '../../search/Search.commponent'
import AddProduct from '../../add-product/AddProduct.commponent'
import { ProductsContext } from '../../../context/Products.context';
import {searchProductsAction } from '../../../actions/ProductsActions.action'

import './Header.style.scss'

function Header() {
  const [isAddProductOpen, setIsAddProductOpen] = useState(false)
  const {  dispatchProducts } = useContext(ProductsContext);

  const getSearchData = (event) => {
    event.preventDefault()
    console.log("search", event.target.children[0].value)
    dispatchProducts(searchProductsAction(event.target.children[0].value))

  }
 
    const closeModal = () => {
      setIsAddProductOpen(!isAddProductOpen)
  }
    
  return (
    <div className="header">
        <Search className="search" getSearchData={getSearchData} />
      <h3>- Antivirus Store -</h3>
      <div className='popup-add'>
          <Popup 
              trigger={<Button className='button' icon='add' onClick={closeModal} />}
              position='top center'
              content="Add new product"
          />
      </div>  
          {isAddProductOpen && <AddProduct closeModal={closeModal} />}
    </div>
  )
}

export default Header
