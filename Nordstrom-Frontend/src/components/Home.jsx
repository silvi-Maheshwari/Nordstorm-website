import React, { useState } from 'react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Box,
  AbsoluteCenter,
  Image,
  Flex,
  Spacer,
} from '@chakra-ui/react'

const Home = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
      <Box position='relative' h='100px'>
  <AbsoluteCenter  axis='both'>
  <Button onClick={onOpen} style={{textAlign:"center"}}>Sign In and Create an Acoount</Button>
  </AbsoluteCenter>
</Box>
       
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign in</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>email</FormLabel>
                <Input ref={initialRef} placeholder='Enter your email' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>password</FormLabel>
                <Input placeholder='Enter your password' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>


        <Box
        bgImage="url('/src/assets/Image/background.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        backgroundSize="cover" 
        paddingBottom={"12%"}
        width={"95%"} 
        margin={"auto"}
       
      />
      
      <Box
        bgImage="url('/src/assets/Image/background2.jpg') "
        bgPosition="center"
        bgRepeat="no-repeat"
        backgroundSize="cover" 
        paddingBottom={"12%"}
        width={"95%"} 
        margin={"auto"}
        marginTop={"3%"}
       
      />
    

<Flex  width={"95%"} margin={"auto"}  marginTop={"3%"}>
<Image src='/src/assets/Image/image1.jpg' alt='Dan Abramov' width={"30%"} height={"10%"} />
    <Spacer />
    <Image src='/src/assets/Image/image1.jpg' alt='Dan Abramov' width={"30%"} height={"10%"}/>
    <Spacer />
    <Image src='/src/assets/Image/image1.jpg' alt='Dan Abramov' width={"30%"} height={"10%"}/>
  </Flex>
  <Box
        bgImage="url('/src/assets/Image/image2.jpg') "
        bgPosition="center"
        bgRepeat="no-repeat"
        backgroundSize="cover" 
        paddingBottom={"12%"}
        width={"95%"} 
        margin={"auto"}
        marginTop={"3%"}
       
      />
        {/* <Box
        bgImage="url('/src/assets/Image/image2.jpg') "
        bgPosition="center"
        bgRepeat="no-repeat"
        backgroundSize="cover" 
        paddingBottom={"12%"}
        width={"95%"} 
        margin={"auto"}
        marginTop={"3%"}
       
      /> */}
         <Box
        bgImage="url('/src/assets/Image/image3.jpg') "
        bgPosition="center"
        bgRepeat="no-repeat"
        backgroundSize="cover" 
        paddingBottom={"44%"}
        width={"95%"} 
        margin={"auto"}
        marginTop={"3%"}
       
      />

<Flex  width={"95%"} margin={"auto"}  marginTop={"3%"}>
<Image src='/src/assets/Image/image1.jpg' alt='Dan Abramov' width={"350px"} height={"300px"} />
    <Spacer />
    <Image src='/src/assets/Image/image1.jpg' alt='Dan Abramov' width={"350px"} height={"300px"} />
    <Spacer />
    <Image src='/src/assets/Image/image1.jpg' alt='Dan Abramov' width={"350px"} height={"300px"} />
    <Spacer />
    <Image src='/src/assets/Image/image1.jpg' alt='Dan Abramov' width={"350px"} height={"300px"} />
  </Flex>
      </>
    

    )
  
  
  
  
  
}


export default Home
