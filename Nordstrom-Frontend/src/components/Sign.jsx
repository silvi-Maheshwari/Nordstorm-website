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

const Sign = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
      setEmailError("Please enter a valid email.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleNext = () => {
    if (step === 1 && validateEmail()) {
      setStep(2);
    } else if (step === 2 && password) {
      // Handle form submission logic here
      console.log("Form Submitted", { email, password });
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEdit = () => {
    setStep(1);
  };

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      margin="auto" 
      width="400px" 
      marginTop="10%"
      padding="4"
    //   boxShadow="md"
    //   borderRadius="md"
    >
      <Text fontSize="xl" as='b' >
        {step === 1 ? "Sign In | Create Account" : "Welcome back"}
      </Text>
      <Text fontSize="md" mt={6}  >
      Enter your email to get started.
      </Text>
      <VStack spacing={4} align="stretch" mt={4}>
        {step === 1 ? (
          <>
            <FormControl isInvalid={!!emailError} >
              <Input 
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              <FormErrorMessage>{emailError}</FormErrorMessage>
            </FormControl>
            <Text fontSize="sm" color="gray.500">
              By tapping Next, you agree to our Privacy Policy and Terms & Conditions.
            </Text>
          </>
        ) : (
          <>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Box display="flex" justifyContent="space-between">
                <Text>{email}</Text>
                <Button variant="link" onClick={handleEdit}>
                  Edit
                </Button>
              </Box>
            </FormControl>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </>
        )}
      </VStack>

      <Button
        mt={6}
        colorScheme="blue"
        onClick={handleNext}
        width="full"
      >
        {step === 1 ? "Next" : "Submit"}
      </Button>
    </Box>
  );
};

export default Sign;
