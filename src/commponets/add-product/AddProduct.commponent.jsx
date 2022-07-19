import { useState, useContext } from 'react'
import './AddProduct.style.scss'
import "semantic-ui-css/semantic.min.css";

import Loader from '../loader/Loader.commponent'
import Alert from '../Alert/Alert.component';
import Form from './form/Form.component';

import { ProductsContext } from '../../context/Products.context';
import {addProductAction} from '../../actions/ProductsActions.action'
import { STATUS_SUCCESS } from '../../constants/Status';

function AddProduct({closeModal}) {
  const [isLoading, setIsLoading] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const [createProductResponse, setCreateProductResponse] = useState(null)

  const { dispatchProducts } = useContext(ProductsContext);

  const createNew = (data) => {
    setIsLoading(true)
    console.log("add product:", data)


    dispatchProducts(addProductAction(data))

    setCreateProductResponse(STATUS_SUCCESS.success)
    setIsLoading(false)
    showAlert()
  }


  const showAlert = (event) => {
    setOpenAlert(!openAlert)
    if (event && [ "close_alert","ok_alert"].includes(event.target.id)) {
          console.log("show alert",event)
        closeModal()
     }
  }

  return (
    <div className="container" >
      <div className='form'>
        <button className='close-button' onClick={closeModal}>X</button>
        <h3>Add New Product</h3>

        <Form submit={createNew} />
      
        {isLoading && <Loader />} 
        {openAlert &&  <Alert statusInput={createProductResponse} CloseAlert={showAlert} />}
      </div>
    </div>
  )
}

export default AddProduct
