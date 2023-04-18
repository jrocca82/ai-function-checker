import {
  Flex,
  Input,
  Button,
  Heading,
  Text,
  Box,
  Spinner,
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
    setIsDetecting(true);

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
    setIsDetecting(false);
  };

  return (
    <Flex width="100%" justifyContent="space-evenly">
      <Flex flexDirection="column">
        <Heading size="sm">Enter code snippet:</Heading>
        <Input
          placeholder="Enter your function here"
          height="200px"
          width="500px"
          _placeholder={{ alignSelf: "flex-start" }}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Flex
          width="100%"
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
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
              bgColor="darkGrey"
              my="5px"
              onClick={() => detectLanguage()}
            >
              {isDetecting ? <Spinner /> : "Detect Language"}
            </Button>
          </Flex>
          <Box width="10%">
            <ChevronRightIcon boxSize={50} />
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
              bgColor="darkGrey"
              my="5px"
              onClick={() => randomLanguage()}
            >
              {isChoosingRandom ? <Spinner /> : "Choose Random"}
            </Button>
          </Flex>
        </Flex>
        <Button marginY="20px" bgColor="red" onClick={() => convertFunction()}>
          Convert
        </Button>
      </Flex>
      <Flex
        flexDirection="column"
        alignContent="center"
        justifyContent="flex-start"
        width="30vw"
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
