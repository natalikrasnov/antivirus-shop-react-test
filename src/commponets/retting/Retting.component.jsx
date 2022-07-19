
import { getRattingDescription } from '../../constants/Status'
import './Retting.style.scss'

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Retting({rate, reviews}) {

  return (
    <div className="retting">


      <CircularProgressbarWithChildren className='rate_number' value={rate*10}>
        
              <label className='rate_desc'>{getRattingDescription(rate)}</label>
              <label className='rate'>{rate}</label>
      </CircularProgressbarWithChildren>
      <Stack spacing={1}>
          <Rating name="half-rating-read" defaultValue={rate / 2} precision={0.1} readOnly />
      </Stack>
      <span className='reviews'>Reviews: ({reviews})</span>

    </div>
  )
}

export default Retting
