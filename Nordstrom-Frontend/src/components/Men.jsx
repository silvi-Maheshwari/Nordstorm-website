import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Box,Text,Image } from '@chakra-ui/react'
const Men = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const[men,setmen]=useState([])

  const getData=()=>{
      axios.get(`${backendUrl}/product?category=men`).then((res)=>{
          console.log(res.data.msg)
          setmen(res.data.msg)
      }).catch((err)=>{
          console.log(err)
      })
  }
  useEffect(()=>{
      getData()
  },[])

  return (
    <Box display={"grid"} gridTemplateColumns={"repeat(5,1fr)"} width={"100%"} height={"100%"} mt={"3%"}  >
    {men.map((el)=>
    <Box padding="10px"
    filter="brightness(.97)"
    width="100%"
    height="60%"
    gap="10px">
    <Image src={el.image}></Image>
    <Text fontWeight={"700"} fontSize={"15px"}>{el.name}</Text>
    <Text>${el.price}</Text>
    <Text>{el.rating}</Text>
    
    </Box>
    )}
  </Box>
  )
}

export default Men
