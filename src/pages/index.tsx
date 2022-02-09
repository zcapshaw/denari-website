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
import img from "../images/illustration.png";

const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" p={0}>
        <Flex
          px={4}
          py={16}
          direction={{ base: "column-reverse", lg: "row" }}
          align="center"
        >
          <VStack p={[4, 8]} align="start" justify="center">
            <Text fontSize="5xl" fontWeight="bold">
              Budgeting. Simplified.
            </Text>
            <Text fontSize="xl">
              A finance app so simple, you might actually use it.
            </Text>
            <Text fontSize="xl">Join the Denari waitlist.</Text>
            <Flex direction="column" w="sm">
              <Input
                placeholder="Email address"
                bgColor="white"
                w="100%"
                my={4}
              />
              <Button
                bgColor={theme.colors.blueGrey[900]}
                textColor="white"
                px={12}
                w="100%"
              >
                Get Early Access
              </Button>
            </Flex>
          </VStack>
          <Box m={8}>
            <Image
              w={["xs", "md", "lg", "4xl"]}
              src={img}
              alt="Illustration of a person using a mobile phone"
            />
          </Box>
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default IndexPage;
