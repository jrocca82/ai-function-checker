import { Flex, Heading, Text } from "@chakra-ui/react";

const Header = () => (
  <Flex
    flexDirection="column"
    paddingY="30px"
    borderBottom="solid 1px grey"
    width="100%"
    justifyContent="center"
    alignItems="center"
    bgColor="#FFDE59"
  >
    <Heading color="#00BF63">Function Translator</Heading>
    <Text color="black">
      Translate functions between different coding languages.
    </Text>
  </Flex>
);

export default Header;
