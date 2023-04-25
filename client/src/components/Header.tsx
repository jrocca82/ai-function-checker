import { Flex, Heading, Image, Text } from "@chakra-ui/react";

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
    {" "}
    <Image
      src="FT.png"
      position="absolute"
      left={50}
      height={50}
      width={50}
      alt="icon"
      border="solid 1px black"
      boxShadow="3px 3px grey"
      display={{ base: "none", lg: "flex" }}
    />
    <Heading color="#00BF63">Function Translator</Heading>
    <Text color="black">
      Translate functions between different coding languages.
    </Text>
  </Flex>
);

export default Header;
