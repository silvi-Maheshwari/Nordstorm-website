import { Box,Image,Text } from '@chakra-ui/react';
import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'

const Shoes = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [shoes, setshoes] = useState([]);

  
  const getData = (url) => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.msg);
        setshoes(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData(`${backendUrl}/product?category=shoes`);
  }, []);
  return (
    <div>
          <Box display={"grid"} gridTemplateColumns={"repeat(5,1fr)"} width={"100%"} height={"100%"} mt={"3%"}  >
    {shoes.map((el)=>
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
    </div>
  )
}

export default Shoes
