// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from "./ToggleButton";
import { Box, Flex, Text, Link as ChakraLink } from '@chakra-ui/react';

const Nav = () => {
  return (

    <Box as="nav" bg="#65737e" color="white" py={4} borderRadius="8px" margin='10px 20px 20px 0px' >
      <Flex align="center" justify="center" p={4}>
        <Text mx="2">
          <ChakraLink as={Link} to="/">
            Home
          </ChakraLink>
        </Text>
        <Text mx="2">
          <ChakraLink as={Link} to="/about">
            About
          </ChakraLink>
        </Text>
        <Text mx="2">
          <ChakraLink as={Link} to="/listatodo">
            Lista Todo
          </ChakraLink>
        </Text>
        <ToggleButton/>
      </Flex>
    </Box>
  );
};

export default Nav;