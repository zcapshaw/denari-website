import React from "react";
import { Flex, Container } from "@chakra-ui/react";

const App = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="50vh" bg="tomato" justify="center" align="center">
        <h1>Welcome to Denari</h1>
      </Flex>
    </Container>
  );
};

export default App;
