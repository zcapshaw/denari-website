import * as React from "react";
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  Image,
  VStack,
  HStack,
  Text,
  Input,
} from "@chakra-ui/react";
import App from "../components/app";
import theme from "../theme";
import "@fontsource/manrope";
// import illustration from "../images/illustration.png";

const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" p={0}>
        <Flex
          h="50vh"
          bg={theme.colors.blueGrey[400]}
          justify="center"
          align="center"
          p={4}
        >
          <VStack>
            <Text fontSize="5xl" fontWeight="bold">
              Budgeting. Simplified.
            </Text>
            <Text fontSize="xl">
              Introducing Denari. A finance app so simple, you might actually
              use it.
            </Text>
            <Text fontSize="xl"></Text>
            <HStack>
              <Input placeholder="Email address" bgColor="white" w="100%" />
              <Button
                bgColor={theme.colors.blueGrey[900]}
                textColor="white"
                px={12}
              >
                Get Early Access
              </Button>
            </HStack>
            <Box boxSize="sm">
              <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
            </Box>
          </VStack>
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default IndexPage;
