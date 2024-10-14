import React from 'react';
import { Box, Text, Button ,Image} from '@chakra-ui/react';

const CartPage = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const clearCart = () => {
        localStorage.removeItem('cart');
        window.location.reload(); // Reload to see changes
    };

    return (
        <Box padding="20px">
            <Text fontSize="24px" fontWeight="bold">Your Cart</Text>
            {cartItems.length === 0 ? (
                <Text>Your cart is empty</Text>
            ) : (
                cartItems.map((item, index) => (
                    <Box key={index} border="1px" borderColor="gray.200" borderRadius="md" padding="10px" marginBottom="10px">
                        {/* <Image src={item.image}></Image> */}
                        <Text fontSize="20px">{item.name}</Text>
                        <Text fontSize="18px">${item.price}</Text>
                    </Box>
                ))
            )}
            <Button mt="20px" colorScheme="blue" onClick={clearCart}>Clear Cart</Button>
        </Box>
    );
};

export default CartPage;
