import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon } from '@chakra-ui/icons';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, FormControl, Input, Text, Box, Flex, Icon, InputGroup, InputRightElement, Image, Spinner, Popover, PopoverTrigger, PopoverContent, PopoverBody, VStack } from '@chakra-ui/react';
import { PiShoppingCartFill } from "react-icons/pi";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);


  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
    if (searchQuery.trim()) {
      setLoading(true); 
      try {
        const response = await fetch(`${backendUrl}/product?name=${searchQuery}`);
        const data = await response.json();
        setSearchResults(data.msg); 
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false); 
      }
    }
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Set your location</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>Enter your ZIP Code to discover shipping and pickup options near you.</Text>
            <FormControl mt={4}>
              <InputGroup>
                <InputRightElement>
                  <Icon as={SearchIcon} color="gray.400" />
                </InputRightElement>
                <Input
                  type="text"
                  placeholder="Enter your Pincode"
                  borderColor="gray.300"
                />
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button margin="auto" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box bg="rgb(0,112,52)" textAlign="center" p="10px" color="white">
        Enjoy extended holiday returns. Learn More
      </Box>

      <Flex 
        direction={['column', 'row']} // Change direction for mobile
        justify="space-between" 
        align="center" 
        p="9px"
      >
        <Box w={["70%", "10%"]} height={["auto", "10%"]}>
          <Image src='/src/assets/Image/image.jpg.jpg' alt='Nordstrom Logo' />
        </Box>

        <Popover>
          <PopoverTrigger>
            <InputGroup width={["90%", "600px"]} mt={["6%","auto"]}>
              <Input
                placeholder='Search for Products'
                p="10px"
                border="1px solid"
                borderColor="gray.300"
                mb={["10px", "0"]}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update state on change
              />
              <Button onClick={handleSearch} colorScheme="teal" ml={2}>
                Search
              </Button>
            </InputGroup>
          </PopoverTrigger>

          <PopoverContent width={["90%", "600px"]}>
            <PopoverBody>
              {/* Render Search Results */}
              {loading ? (
                <Box textAlign="center" p="20px">
                  <Spinner size="lg" />
                </Box>
              ) : (
                <VStack spacing={4} align="stretch" p="10px">
                  {searchResults.length > 0 ? (
                    searchResults.map((item, index) => (
                      <Box key={index} p="10px"  borderRadius="md">
                        <Link to={`/product/${item._id}`}>
                          <Text fontWeight="bold">{item.name}</Text>
                          <Text color="gray.600">{item.description}</Text>
                        </Link>
                      </Box>
                    ))
                  ) : (
                    <Text>No results found</Text>
                  )}
                </VStack>
              )}
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Flex 
          direction={["column", "row"]} // Stack items on mobile
          gap={["10px", "60px"]} 
        >
          <Link to='/signin'>Signin</Link>
          <Text as='button' onClick={onOpen}>Set Your Store</Text>
          <Link to='/signup'>Purchase</Link>
          <Link to={'/cart'}>
            <Flex align="center">
              Cart <PiShoppingCartFill />
            </Flex>
          </Link>
        </Flex>
      </Flex>

      <Box as="hr" />

      <Flex className='navbar' justify="space-around" p="10px" flexWrap="wrap"> {/* Allow wrapping on smaller screens */}
        <Link to='/new'>New</Link>
        <Link to='/clearance'>Clearance</Link>
        <Link to='/women'>Women</Link>
        <Link to='/men'>Men</Link>
        <Link to='/kids'>Kids</Link>
        <Link to='/shoes'>Shoes</Link>
        <Link to='/bag'>Bags & Accessories</Link>
        <Link to='/'>Home</Link>
        <Link to='/beauty'>Beauty</Link>
        <Link to='/gift'>Gift Guide</Link>
        <Link to='/flash'>Flash Events</Link>
      </Flex>
    </>
  );
};

export default Navbar;
