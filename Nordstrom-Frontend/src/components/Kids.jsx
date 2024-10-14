import { Box,Text,Image} from '@chakra-ui/react'
import React, { useState,useEffect } from 'react'
import axios from 'axios'


const Kids = () => {

  const[kids,setkids]=useState([])

  const getData=()=>{
      axios.get('http://localhost:8080/product?category=kids').then((res)=>{
          console.log(res.data.msg)
          setkids(res.data.msg)
      }).catch((err)=>{
          console.log(err)
      })
  }
  useEffect(()=>{
      getData()
  },[])
  return (
    <Box display={"grid"} gridTemplateColumns={"repeat(5,1fr)"} width={"100%"} height={"100%"} mt={"3%"}  >
    {kids.map((el)=>
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

export default Kids
