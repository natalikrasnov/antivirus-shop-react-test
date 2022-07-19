import { useState, useEffect } from 'react'

import { STATUS_SUCCESS , getTextByStatus} from '../../constants/Status'

import './Alert.style.scss'

function Alert({statusInput, textInput, CloseAlert}) {
  const [status, setStatus] = useState(STATUS_SUCCESS.success)
  const [text, setText] = useState("")

  useEffect(() => {
      setStatus(statusInput)
      setText(textInput? textInput : getTextByStatus(statusInput))
  }, [])

  return (
    <div className="container">
          <div className='alert' >
            <button className='close-button' onClick={CloseAlert} id="close_alert">X</button>
            {status == STATUS_SUCCESS.failed ? <h2>failed...</h2> : <h2>Success!!</h2>}
            
            <span>{text}</span>
            <br></br>
            <button onClick={CloseAlert}  id="ok_alert">OK</button>
      </div>
    </div>
  )
}

export default Alert
