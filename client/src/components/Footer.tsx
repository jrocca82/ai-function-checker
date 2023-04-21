import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => (
  <Flex
    paddingY="30px"
    borderTop="solid 1px grey"
    bgColor="#FFDE59"
    width="100%"
    justifyContent="center"
    color="black"
    alignItems="center"
  >
    <Link href="https://github.com/jrocca82" target="_blank">
      <Text>Github: jrocca82</Text>
    </Link>
  </Flex>
);

export default Footer;
