import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Sign = () => {
  const [isSignIn, setIsSignIn] = useState(false); // Track whether it's sign-in or sign-up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // For account creation
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState(""); // For error messages
  const [success, setSuccess] = useState(""); // For success messages
  const navigate = useNavigate(); // Initialize useNavigate

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
      setEmailError("Please enter a valid email.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleNext = async () => {
    if (validateEmail()) {
      if (isSignIn) {
        // Sign in logic
        try {
          const response = await axios.post('http://localhost:8080/user/login', { email, password });
          console.log(response.data);
        setSuccess(response.data.msg);

          navigate('/');
        } catch (err) {
          setError(err.response.data.msg || "Login failed");
      
        }
      } else {
      
        try {
          const response = await axios.post('http://localhost:8080/user/register', { email, password, name });
          console.log(response.data);
          setSuccess(response.data.msg);
      
          toggleSignIn();
        } catch (err) {
          console.error(err);
          setError(err.response?.data.msg || "Signup failed. Please try again.");
        }
      }
    }
  };
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    // Clear email and password fields when toggling between sign-in and sign-up
    setEmail('');
    setPassword('');
    setName('')
    // setError('')
    // setSuccess('')
     // Clear any previous success messages
  };
  

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      margin="auto" 
      width="400px" 
      marginTop="3%"
      padding="4"
    >
      <Text fontSize="xl" as='b'>
        {isSignIn ? "Login your Account" : "Create an Account"}
      </Text>
      <Text fontSize="md" mt={6}>
        {isSignIn ? "Enter your email and password to sign in." : "Enter your details to sign up."}
      </Text>
      {error && <Text color="red.500">{error}</Text>}
      {success && <Text color="green.500">{success}</Text>}
      <VStack spacing={4} align="stretch" mt={4}>
        <FormControl isInvalid={!!emailError}>
          <Input 
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <FormErrorMessage>{emailError}</FormErrorMessage>
        </FormControl>
        {!isSignIn && (
          // Show name input only if the user is creating an account
          <FormControl>
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
          </FormControl>
        )}
        <Input
          type="password"
          placeholder={isSignIn ? "Enter your password" : "Create a password"}
          value={password}
          onChange={handlePasswordChange}
        />
      </VStack>
      <Button
        mt={6}
        colorScheme="blue"
        onClick={handleNext}
        width="full"
      >
        {isSignIn ? "Sign In" : "Create Account"}
      </Button>
      <Button
        mt={2}
        colorScheme="gray"
        variant="outline"
        onClick={toggleSignIn}
        width="full"
      >
        {isSignIn ? "Need an account? Sign Up" : "Already have an account? Sign In"}
      </Button>
    </Box>
  );
};

export default Sign;
