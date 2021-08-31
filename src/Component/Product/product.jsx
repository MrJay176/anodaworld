import {Grid} from '@material-ui/core';
import React from 'react';
import ProductCom from './ProductCom';
import './product.css';
import {Link} from 'react-router-dom';

const productBags = [
   {id:1,name:'Shoes',description:'Running Shoes' , price:"$10", image:"image/bags/bag1.jpg"},
   {id:1,name:'Shoes',description:'Running Shoes' , price:"$10", image:"image/bags/bag2.jpg"},
   {id:1,name:'Shoes',description:'Running Shoes' , price:"$10", image:"image/bags/bag3.jpg"},
   {id:2,name:'MacBook',description:'Apple MacBook',price:"$50", image:"image/bags/bag4.jpg"},
];

const productClothes = [
  {id:1,name:'Shoes',description:'Running Shoes' , price:"$10",image:"image/Clothes/cloth1.jpg"},
  {id:1,name:'Shoes',description:'Running Shoes' , price:"$10",image:"image/Clothes/cloth2.jpg"},
  {id:1,name:'Shoes',description:'Running Shoes' , price:"$10",image:"image/Clothes/cloth3.jpg"},
  {id:2,name:'MacBook',description:'Apple MacBook',price:"$50",image:"image/Clothes/cloth4.jpg"},
];

const Products = ({section})=>{

    return(
        <main>
        <Grid container  spacing={1} className = "container grid m-auto justify-content-center"> 
          {section==1?productBags.map((e)=>(
             <Grid item key={e.id} xs={6} sm ={6} md ={6} lg={6} className ="myGrid m-auto justify-content-center">
                  <Link to = {{
                     pathname:"/display",
                     state:{
                        product:e
                     }
                  }}>
                   <ProductCom product={e}/>
                  </Link>
             </Grid> 
          )):productClothes.map((e)=>(
            <Grid item key={e.id}className ="myGrid">
                 <ProductCom product={e}/>
            </Grid> 
         ))}
        </Grid>
    </main>    
    )
}

export default Products;
