import { Header, Form, Footer } from "../components";
import { Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

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
      <Text>
        Translate functions directly in your web browser with the{" "}
        <Text as="span" textDecor="underline">
          <Link href="" target="_blank">Chrome Extension!</Link>
        </Text>
      </Text>
      <Footer />
    </Flex>
  </Flex>
);

export default Home;
