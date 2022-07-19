import { useState } from 'react'
import './Form.style.scss'

import "semantic-ui-css/semantic.min.css";
import {Button,  Popup } from "semantic-ui-react";

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputImg from '../inputImg/InputImg.component';


function Form({submit}) {
    const [inputImg, setInputImg] = useState("")
    const [inputDesc, setInputDesc] = useState("")
    const [inputBenefits, setInputBenefits] = useState("")
    const [inputRating, setInputRating] = useState("")
    const [inputReviews, setInputReviews] = useState("")
    const [inputSite, setInputSite] = useState("")
    const [isEditorChoice, setIisEditorChoice] = useState(false)
    const [comp, setComp] = useState([])

    const [isInvalid, setIsInvalid] = useState(true)

    
    const setImageUrl = (url) => {
        setInputImg(url)
        checkValidation()
    }

    const setCompInput = (event) => {
        setComp(event.target.value)
        checkValidation()
    }

    const setDescription = (event) => {
        setInputDesc(event.target.value)
        checkValidation()
    }

    const setBenefits = (event) => {
        setInputBenefits(event.target.value)
        checkValidation()
    }

    const setRate = (event) => {
        setInputRating(event.target.value)
        checkValidation()
    }

    const setReviews = (event) => {
        setInputReviews(event.target.value)
        checkValidation()
    }

    const setWebsite = (event) => {
        setInputSite(event.target.value)
        checkValidation()
    }

    const setEditorChoice = (event) => {
        setIisEditorChoice(event.target.value)

    }

    const checkValidation = () => {
        console.log(inputDesc , inputBenefits , comp , inputSite , inputImg)
        if (inputDesc != "" && inputBenefits != ""  && comp  != "" && inputSite != ""  && inputImg != "" ) {
            setIsInvalid(false)
        }
    }

    const getProductData = (event) => {
        event.preventDefault();
        const data = {
            img: inputImg,
            description: inputDesc,
            benefits: inputBenefits.split(/\r?\n/),
            rate: inputRating,
            reviews: inputReviews,
            compatibility: comp,
            website: inputSite,
            isRecommended: isEditorChoice
        }
        submit(data)
    }

    return (
        <form className='form-add-product' onSubmit={getProductData}>
        
            <InputImg setImg={setImageUrl} />
              
            <label> Add description for your product: <br></br>
                <textarea id="txtArea"rows="3" cols="70" onChange={setDescription}/>
            </label>
            <label> Add the benefits of your product: <br></br>
                <textarea id="txtArea"  rows="5" cols="70" onChange={setBenefits}/>
            </label>
                    
            <FormControl sx={{ m: 0, width: 500 }}>
                <InputLabel id="demo-multiple-name-label">Compatibility</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={comp}
                    onChange={setCompInput}
                    input={<OutlinedInput label="Compatibility" />}
                >
                    <MenuItem key={"apple"} value={"apple"}>  apple  </MenuItem>
                    <MenuItem key={"android"} value={"android"}>  android  </MenuItem>
                    <MenuItem key={"ios"} value={"ios"}>  ios  </MenuItem>
                    <MenuItem key={"windows"} value={"windows"}>  windows  </MenuItem>
                </Select>
            </FormControl>

            <label> Visit site : <input type="url" onChange={setWebsite}/></label>
            <label>  Add ratting for this product:
                <input type="number" max={10} min={0} placeholder="10" onChange={setRate} />(
                reviews:
                <input type="number" min={0} placeholder="1000000" onChange={setReviews} /> )
            </label>
            <label><input type="checkbox" onChange={setEditorChoice}/> Editor Choice </label>
            <button  className='button-submit' type='submit' disabled={isInvalid}>ADD</button>

      </form>
  )
}

export default Form
