import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function CartItemCard({data={}}) {
  return (
    <div className='card container'>
    <div className='row'>
        <div className='col-2'>
        <img src={data.img} alt={data.pizza} width="100px" style={{margin: "20px 0 -20px"}}/>
        </div>
        <div className='col-9 cart-items text-end'>
            <h4>{data.pizza}</h4>
            <h6>Cost: {data.actualPrice}/-</h6>
        </div>
        <div className='text-start'>
        <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Select Your Breads</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Stuffed Crust" />
          <FormControlLabel value="male" control={<Radio />} label="Cracker Crust" />
          <FormControlLabel value="other" control={<Radio />} label="Flat Bread Crust" />
          <FormControlLabel value="other" control={<Radio />} label="Thin Crust" />
          </RadioGroup>
      </FormControl>
        </div>

        <div className='text-start'>
        <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Select Your Sauces</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label=" veloute sauce" />
          <FormControlLabel value="male" control={<Radio />} label="Espagnole sauce" />
          <FormControlLabel value="other" control={<Radio />} label="Hollandaise sauce" />
          <FormControlLabel value="other" control={<Radio />} label="tomato sauce" />
          </RadioGroup>
      </FormControl>
        </div>

        <div className='text-start'>
        <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Select Your Cheese</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label=" Mozzarella" />
          <FormControlLabel value="male" control={<Radio />} label="Cheddar" />
          <FormControlLabel value="other" control={<Radio />} label="Aged Havarti" />
          <FormControlLabel value="other" control={<Radio />} label="Gorgonzola" />
          
          </RadioGroup>
      </FormControl>
        </div>


    </div>
    </div>
  )
}
