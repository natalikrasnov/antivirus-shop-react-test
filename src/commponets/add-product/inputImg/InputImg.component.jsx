import { useState } from 'react'
import './InputImg.style.scss'

import "semantic-ui-css/semantic.min.css";
import {Button,  Popup } from "semantic-ui-react";

function InputImg({setImg}) {
  const [inputImg, setInputImg] = useState("")

  const readURL = (event) => {
    console.log("get img", event.target.files)
      setInputImg(URL.createObjectURL(event.target.files[0]))
      setImg(URL.createObjectURL(event.target.files[0]))
  }

  return (
        <Popup
          trigger={<input type='file' onChange={readURL} accept=".jpg, .png"/>}
          position='top center'
          content={inputImg ? <img className='img-prev' src={inputImg} /> : "select an image for the product"}
        /> 
  )
}

export default InputImg
