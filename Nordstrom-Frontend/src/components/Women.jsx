import React from 'react'
import { Box,Image,Text } from '@chakra-ui/react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const Women = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const[women,setwomen]=useState([])

  const getData=()=>{
      axios.get(`${backendUrl}/product?category=women`).then((res)=>{
          console.log(res.data.msg)
          setwomen(res.data.msg)
      }).catch((err)=>{
          console.log(err)
      })
  }
  useEffect(()=>{
      getData()
  },[])
  return (
    <Box display={"grid"} gridTemplateColumns={"repeat(5,1fr)"} width={"100%"} height={"100%"} mt={"3%"}  >
      {women.map((el)=>
      <Box  padding="10px"
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

export default Women
