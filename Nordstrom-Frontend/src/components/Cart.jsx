import React, { useState } from 'react';
import { Box, Text, Button ,Image} from '@chakra-ui/react';

const CartPage = () => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  

    // const clearCart = () => {
    //     localStorage.removeItem('cart');
    //     window.location.reload(); // Reload to see changes
    // };
    const handleremove=(index)=>{
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    return (
        <Box padding="20px">
            <Text fontSize="24px" fontWeight="bold">Your Cart</Text>
            {cartItems.length === 0 ? (
                <Text>Your cart is empty</Text>
            ) : (
                cartItems.map((item, index) => (
                    <Box key={index} border="1px" borderColor="gray.200" borderRadius="md" padding="10px" marginBottom="10px" display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                      
                   <Box>     
                    
                    <Text fontSize="20px">{item.name}</Text>
                        <Text fontSize="18px">${item.price}</Text> </Box>
                 <Box>   <Button colorScheme="blue" onClick={() => handleremove(index)}>Remove</Button> </Box>
                    </Box>
                ))
            )}
            {/* <Button mt="20px" colorScheme="blue" onClick={clearCart}>Clear Cart</Button> */}
        </Box>
    );
};

export default CartPage;
