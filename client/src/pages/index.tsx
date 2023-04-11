import { Header, Footer } from "../components";
import { Button, Flex, Input, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

const Home = () => {
  const [userInput, setUserInput] = useState<string>();

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      minH="100vh"
      bgColor="black"
      color="white"
    >
      <Head>
        <title>Solidity Function Optimizer</title>
      </Head>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        minH="100vh"
        width="100%"
      >
        <Header />
        <Flex width="100%" justifyContent="space-evenly">
          <Flex flexDirection="column">
            <Input
              placeholder="Enter your solidity function here"
              height="200px"
              width="500px"
              _placeholder={{ alignSelf: "flex-start" }}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <Button marginY="20px" bgColor="red">
              Optimize
            </Button>
          </Flex>
          <Flex
            flexDirection="column"
            alignContent="center"
            justifyContent="flex-start"
            maxWidth="30vw"
          >
            <Heading textDecor="underline" marginBottom="10px">
              Optimized Function:
            </Heading>
            <Text textAlign="left">
              No input received... Write a solidity function and hit
              &rdquo;Optimize&ldquo; to see your gas-efficient your function.
            </Text>
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Home;
