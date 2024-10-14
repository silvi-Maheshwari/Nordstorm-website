import React from 'react'
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
      {/* Sign In Button */}
      <Box position="relative" h="100px">
        <AbsoluteCenter axis="both">
          <Button onClick={onOpen} style={{ textAlign: 'center' }}>
            Sign In and Create an Account
          </Button>
        </AbsoluteCenter>
      </Box>

      {/* Modal for Sign In */}
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
              <FormLabel>Email</FormLabel>
              <Input ref={initialRef} placeholder="Enter your email" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder="Enter your password" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Background Images */}
      <Box
        bgImage="url('/src/assets/Image/background.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        backgroundSize="cover"
        paddingBottom="12%"
        width={{ base: '100%', md: '95%' }} // Mobile responsive width
        margin="auto"
      />

      <Box
        bgImage="url('/src/assets/Image/background2.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        backgroundSize="cover"
        paddingBottom="12%"
        width={{ base: '100%', md: '95%' }} // Mobile responsive width
        margin="auto"
        marginTop="3%"
      />

      {/* Image Flex Section */}
      <Flex
        width={{ base: '100%', md: '95%' }} // Responsive width
        margin="auto"
        marginTop="3%"
        flexDirection={{ base: 'column', md: 'row' }} // Column for mobile, row for desktop
      >
        <Image
          src="/src/assets/Image/image1.jpg"
          alt="Dan Abramov"
          width={{ base: '100%', md: '30%' }} // Full width for mobile, 30% for desktop
          height="auto"
        />
        <Spacer display={{ base: 'none', md: 'block' }} /> {/* Hide spacer on mobile */}
        <Image
          src="/src/assets/Image/image1.jpg"
          alt="Dan Abramov"
          width={{ base: '100%', md: '30%' }}
          height="auto"
        />
        <Spacer display={{ base: 'none', md: 'block' }} />
        <Image
          src="/src/assets/Image/image1.jpg"
          alt="Dan Abramov"
          width={{ base: '100%', md: '30%' }}
          height="auto"
        />
      </Flex>

      {/* More Background Images */}
      <Box
        bgImage="url('/src/assets/Image/image2.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        backgroundSize="cover"
        paddingBottom="12%"
        width={{ base: '100%', md: '95%' }}
        margin="auto"
        marginTop="3%"
      />

      <Box
        bgImage="url('/src/assets/Image/image3.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        backgroundSize="cover"
        paddingBottom="44%"
        width={{ base: '100%', md: '95%' }}
        margin="auto"
        marginTop="3%"
      />

      {/* Flex Section with More Images */}
      <Flex
        width={{ base: '100%', md: '95%' }}
        margin="auto"
        marginTop={["3%","3%"]}
        flexDirection={{ base: 'column', md: 'row' }} 
      >
        <Image
          src="/src/assets/Image/image1.jpg"
          alt="Dan Abramov" 
          width={{ base: '100%', md: '350px' }} 
          height={{ base: 'auto', md: '300px' }}
        />
        <Spacer display={{ base: 'none', md: 'block' }} />
        <Image
          src="/src/assets/Image/image1.jpg"
          alt="Dan Abramov"
          width={{ base: '100%', md: '350px' }}
          height={{ base: 'auto', md: '300px' }}
        />
        <Spacer display={{ base: 'none', md: 'block' }} />
        <Image
          src="/src/assets/Image/image1.jpg"
          alt="Dan Abramov"
          width={{ base: '100%', md: '350px' }}
          height={{ base: 'auto', md: '300px' }}
        />
        <Spacer display={{ base: 'none', md: 'block' }} />
        <Image
          src="/src/assets/Image/image1.jpg"
          alt="Dan Abramov"
          width={{ base: '100%', md: '350px' }}
          height={{ base: 'auto', md: '300px' }}
        />
      </Flex>
    </>
  )
}

export default Home
