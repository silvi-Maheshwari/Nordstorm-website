import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Image, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';

const Product = () => {
    const { id } = useParams();
    const [p, setp] = useState('');
    const URL = `http://localhost:8080/product/${id}`;

    const getData = () => {
        axios.get(URL).then((res) => {
            setp(res.data.msg);
        }).catch((Err) => {
            console.log(Err);
        });
    };

    useEffect(() => {
        getData();
    }, [id]);



    return (
        <>
            <Box display={"flex"} padding={"10px"} filter={"brightness(.97)"} width={"90%"}   mt={"3%"}>
                <Box>
                    <Image src={p.image} alt={p.name} />
                </Box>
                <Box fontSize={"30px"} ml={"6%"} fontWeight={"700"}>
                    <Text>{p.name}</Text>
                    <Text>${p.price}</Text>
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
                          
                        >
                            Add to Cart
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Text fontWeight={"800"} fontSize={"20px"} mt={"3%"}>Details and Care</Text>
            <Text fontSize={"20px"}>{p.description}</Text>
        </>
    );
};

export default Product;

