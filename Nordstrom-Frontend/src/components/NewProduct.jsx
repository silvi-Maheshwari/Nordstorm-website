import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box,Image,Text } from '@chakra-ui/react'

const NewProduct = () => {
    const[data,setdata]=useState([])

    const getData=()=>{
        axios.get('http://localhost:8080/product').then((res)=>{
            console.log(res.data.msg)
            setdata(res.data.msg)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getData()
    },[])
  return (
<Box display={"grid"} gridTemplateColumns={"repeat(4,1fr)"}>
      {data.map((el)=>
 
      <Image src={el.image} max/>

    )}
</Box>
  )
}

export default NewProduct
