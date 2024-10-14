import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Image, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';

const BeautyDetails = () => {
    const { id } = useParams();
    const [beautyd, setBeautyd] = useState('');
    const URL = `http://localhost:8080/product/${id}`;

    const getData = () => {
        axios.get(URL).then((res) => {
            setBeautyd(res.data.msg);
        }).catch((Err) => {
            console.log(Err);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    const addToCart = () => {
      
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
     
        const itemExists = existingCart.some(item => item._id === beautyd._id);
        
        if (!itemExists) {
           
            existingCart.push(beautyd);
         
            localStorage.setItem('cart', JSON.stringify(existingCart));
            alert(`${beautyd.name} has been added to your cart!`);
        } else {
            alert(`${beautyd.name} is already in your cart.`);
        }
    };

    return (
        <>
            <Box display={"flex"} padding={"10px"} filter={"brightness(.97)"} width={"90%"}   mt={"3%"}>
                <Box>
                    <Image src={beautyd.image} alt={beautyd.name} />
                </Box>
                <Box fontSize={"30px"} ml={"6%"} fontWeight={"700"}>
                    <Text>{beautyd.name}</Text>
                    <Text>${beautyd.price}</Text>
                    <hr />
                    <RadioGroup border='1px' padding='20px' mt={"8%"} fontWeight={"400"}>
                        <Stack direction="row">
                            <Radio>Free pickup at choose store</Radio>
                        </Stack>
                    </RadioGroup>
                    <RadioGroup border='1px' padding='20px' mt={"3%"} fontWeight={"400"}>
                        <Stack direction="row">
                            <Radio>Free shipping on orders $89+ to 312601</Radio>
                        </Stack>
                    </RadioGroup>
                    <Box display={"flex"} flexDirection={"row"} gap={"6px"} mt={"3%"}>
                        <Button bg='blue' width='100%' padding='20px' color='white'>Buy Now</Button>
                        <Button 
                            bg='blue' 
                            width='100%' 
                            padding='20px' 
                            color='white' 
                            onClick={addToCart} 
                        >
                            Add to Cart
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Text fontWeight={"800"} fontSize={"20px"} mt={"3%"}>Details and Care</Text>
            <Text fontSize={"20px"}>{beautyd.description}</Text>
        </>
    );
};

export default BeautyDetails;
