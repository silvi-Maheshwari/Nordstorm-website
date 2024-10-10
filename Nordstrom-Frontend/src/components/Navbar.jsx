import React from 'react'
import { Link } from 'react-router-dom'
import { Search2Icon, SearchIcon } from '@chakra-ui/icons'; 
import { Modal,ModalOverlay,ModalContent, ModalHeader,ModalFooter,ModalBody,ModalCloseButton, useDisclosure,Button, FormControl,FormLabel,Input,Text,Box,AbsoluteCenter,Image,Flex,Spacer, Icon,InputGroup,InputRightElement,} from '@chakra-ui/react'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
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
          <Icon  as={SearchIcon} color="gray.400" />
        </InputRightElement>
        <Input
          type="text"
          placeholder="Enter your Pincode"
          // variant="outline"
          borderColor="gray.300"
        />
      </InputGroup>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
       
              <Button  margin={"auto"} onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    <div>
        <p style={{textAlign:"center",backgroundColor:"rgb(0,112,52)",padding:"10px",color:"white"}}>Enjoy extended holiday returns. Learn More</p>
    </div>
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",padding:"9px"}}>
        <div>
            <img src='https://www.nordstromrack.com/?origin=tab-logo'/>
        </div>
        <div >
           <input style={{width:"600px",padding:"10px"}} type='text' placeholder='Search for Products'/> 
           </div>
           <div style={{display:"flex",gap:"60px"}} className='signup'>
           <Link to={'/signin'}>Signin</Link>
           <Link onClick={onOpen} >Set Your Store</Link>
           <Link to={'/signup'}>Purchase</Link>
           </div>
       
    </div><hr/>
    <div className='navbar'>
      <Link to={'/new'}>New</Link>
      <Link to={'/clearance'}>Clearance</Link>
      <Link to={'/women'}>Women</Link>
      <Link to={'/men'}>Men</Link>
      <Link to={'/shoes'}>Shoes</Link>
      <Link to={'/bag'}>Bags & Accessories</Link>
      <Link to={'/'}>Home</Link>
      <Link to={'/beauty'}>Beauty</Link>
      <Link to={'/gift'}>Gift Guide</Link>
      <Link to={'/flash'}>Flash Events</Link>
    </div>
  
    </>
  )
}

export default Navbar
