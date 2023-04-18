import { Header, Form, Footer } from "../components";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";

const Home = () => (
  <Flex
    flexDirection="column"
    justifyContent="space-between"
    alignItems="center"
    minH="100vh"
    bgColor="black"
    color="white"
  >
    <Head>
      <title>CodeAI</title>
    </Head>
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      minH="100vh"
      width="100%"
    >
      <Header />
      <Form />
      <Footer />
    </Flex>
  </Flex>
);

export default Home;
