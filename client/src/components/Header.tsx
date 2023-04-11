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
    <Heading>Solidity Function Optimizer</Heading>
    <Text>Optimize the gas in your solidity functions with this tool.</Text>
  </Flex>
);

export default Header;
