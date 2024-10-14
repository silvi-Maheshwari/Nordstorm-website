import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Grid, Heading, Image, Text, Select } from '@chakra-ui/react';
import { PiStarFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Beauty = () => {
  const [beauty, setBeauty] = useState([]);
  const [sortorder, setsortorder] = useState('');

  
  const getData = (url) => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.msg);
        setBeauty(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Handle sorting change
  const handlesortchange = (e) => {
    const value = e.target.value;
    setsortorder(value);
    getData(`http://localhost:8080/product?sort=price&order=${value}&category=Beauty`); 
  };

  useEffect(() => {
    getData('http://localhost:8080/product?category=Beauty');
  }, []);

  return (
    <>
  
  
 
      <Box display="flex" justifyContent="flex-end" mb={4} mt={"3%"} mr={"2%"} >
        <Select
          placeholder="Sort by price"
          width="20%"
          value={sortorder}
          onChange={handlesortchange}
        >
          <option value="asc">Sort: Low to High</option>
          <option value="desc">Sort: High to Low</option>
        </Select>
      </Box>

      <Grid templateColumns="repeat(5, 2fr)" gap={6} justifyItems="center" mt={4}>
        {beauty.map((el) => (
          <Link to={`/beauty/${el._id}`}>
          <Box
            textAlign="left"
            key={el.id}
            padding="10px"
            filter="brightness(.97)"
            width="100%"
            height="60%"
            gap="10px"
          >
            <Text>{el._id}</Text>
            <Image src={el.image} />
            <Text textAlign="left" fontWeight="700">
              {el.name}
            </Text>
            <Text>${el.price}</Text>
            <Text display="flex" alignItems="center">
              {el.rating}
              <Box color="yellow">
                <PiStarFill />
              </Box>
              <Box color="yellow">
                <PiStarFill />
              </Box>
            </Text>
          </Box>
          </Link>
        ))}
      </Grid>
    </>
  );
};

export default Beauty;
