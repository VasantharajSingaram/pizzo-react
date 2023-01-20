import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './cards.css';
import { useState } from 'react';


export default function ProductCard({data = {}, onAddToCart = (item) => {}, onRemoveFromCart = (item) => {}}) {

  const [count, setCount] = useState(0);
  return (
   
  

    <Card sx={{ maxWidth: 345 }} className="product-cards">
<CardMedia
  sx={{ height: 140 }}
  image={data.img}
  title={data.pizza}
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
  {data.pizza}
  </Typography>
  <Typography variant="body2" color="text.secondary">
  {data.define}
  </Typography>
</CardContent>
<CardActions className='product-btn'>
  <Button size="small" variant='contained' 
 
  onClick={() => {onAddToCart(data);setCount(count + 1)}}>{ "Add To Cart" }</Button>
  {count >= 1 ? <Button  gutterBottom onClick={()=>{onRemoveFromCart(data);setCount(count - 1)}} size="small" variant='outlined' color='error'>Remove</Button> : null}
</CardActions>
</Card>

  )
}
