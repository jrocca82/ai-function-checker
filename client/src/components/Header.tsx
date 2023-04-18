import { Flex, Heading, Text } from "@chakra-ui/react";

const Header = () => (
  <Flex
    flexDirection="column"
    paddingY="30px"
    borderBottom="solid 1px grey"
    width="100%"
    justifyContent="center"
    alignItems="center"
  >
    <Heading>Function Translator</Heading>
    <Text>Translate functions between different coding languages.</Text>
  </Flex>
);

export default Header;
