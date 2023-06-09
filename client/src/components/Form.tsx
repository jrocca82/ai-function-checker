import {
  Flex,
  Input,
  Button,
  Heading,
  Text,
  Box,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Form = () => {
  const [userInput, setUserInput] = useState<string>();
  const [primaryLanguage, setPrimaryLanguage] = useState<string>();
  const [secondaryLanguage, setSecondaryLanguage] = useState<string>();
  const [apiOutput, setApiOutput] = useState<string>();
  const [isDetecting, setIsDetecting] = useState<boolean>(false);
  const [isChoosingRandom, setIsChoosingRandom] = useState<boolean>(false);
  const [isConverting, setIsConverting] = useState<boolean>(false);

  const detectLanguage = async () => {
    setIsDetecting(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/detect-language", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    });

    console.log(response);

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setPrimaryLanguage(`${output.text}`);
    setIsDetecting(false);
  };

  const randomLanguage = async () => {
    setIsChoosingRandom(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/random-language", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ primaryLanguage }),
    });

    console.log(response);

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setSecondaryLanguage(`${output.text}`);
    setIsChoosingRandom(false);
  };

  const convertFunction = async () => {
    setIsConverting(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/convert-function", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput, primaryLanguage, secondaryLanguage }),
    });

    console.log(response);

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsConverting(false);
  };

  return (
    <Flex
      width="100%"
      paddingX="20px"
      justifyContent="space-evenly"
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Flex flexDirection="column" alignItems="center" textAlign="left">
        <Heading size="sm" width={{ base: "80%", lg: "500px" }} marginY="10px">
          Enter code snippet:
        </Heading>
        <Textarea
          placeholder="Enter your function here"
          height="200px"
          justifyContent="flex-start"
          alignItems="flex-start"
          width={{ base: "80%", lg: "500px" }}
          _placeholder={{ alignSelf: "flex-start" }}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Flex
          width="100%"
          alignItems="center"
          justifyContent="center"
          flexDirection={{ base: "column", lg: "row" }}
          marginY="15px"
        >
          <Flex flexDirection="column" width="45%">
            <Text>Input language:</Text>
            <Input
              placeholder="Enter language"
              value={primaryLanguage}
              onChange={(e) => setPrimaryLanguage(e.target.value)}
            />
            <Button
              size="sm"
              bgColor="#FFDE59"
              isLoading={isDetecting}
              color="black"
              my="5px"
              onClick={() => detectLanguage()}
            >
              {isDetecting ? <Spinner /> : "Detect Language"}
            </Button>
          </Flex>
          <Box width="10%">
            <ChevronRightIcon
              boxSize={50}
              color="#00BF63"
              transform={{ base: "rotate(90deg)", lg: "auto" }}
            />
          </Box>

          <Flex width="45%" flexDirection="column">
            <Text>Output language:</Text>
            <Input
              placeholder="Enter language"
              value={secondaryLanguage}
              onChange={(e) => setSecondaryLanguage(e.target.value)}
            />
            <Button
              size="sm"
              bgColor="#FFDE59"
              color="black"
              isLoading={isChoosingRandom}
              my="5px"
              onClick={() => randomLanguage()}
            >
              {isChoosingRandom ? <Spinner /> : "Choose Random"}
            </Button>
          </Flex>
        </Flex>
        <Button
          marginY="20px"
          isLoading={isConverting}
          bgColor="#00BF63"
          onClick={() => convertFunction()}
        >
          Convert
        </Button>
      </Flex>
      <Flex
        flexDirection="column"
        alignContent="center"
        justifyContent="flex-start"
        bgColor="#00BF63"
        padding="10px"
        borderRadius="20px"
        color="black"
        width={{base: "100%", lg: "30vw"}}
      >
        <Heading textDecor="underline" marginBottom="10px">
          Results:
        </Heading>
        {apiOutput ? (
          <Text>{apiOutput}</Text>
        ) : (
          <Text>No input received...</Text>
        )}
      </Flex>
    </Flex>
  );
};

export default Form;
