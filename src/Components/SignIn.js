import { CloseIcon } from "@chakra-ui/icons";
import { Button, Flex, Input, IconButton } from "@chakra-ui/react";

export const SignUp = () => {
  return (
    <Flex
      align="center"
      justify="center"
      bgColor="rgba(0, 0, 0, 0.5)"
      h="100vh"
      w="100%"
      position="absolute"
      zIndex="2"
      display="none"
    >
      <Flex
        direction="column"
        w="17rem"
        h="20rem"
        bgColor="white"
        border="1px solid #ededed"
        borderRadius="1rem"
        justify="space-evenly"
        align="center"
      >
        <IconButton
          color="white"
          bgColor="black"
          h="1.5rem"
          w="1.5rem"
          borderRadius="100rem"
          borderStyle="none"
          zIndex="3"
          position="absolute"
          marginBottom="17rem"
          marginLeft="14rem"
          _hover={{
            transform: "scale(1.1)",
            cursor: "pointer",
            bgColor: "tomato",
          }}
        >
          <CloseIcon w={6} h={6} />
        </IconButton>
        <Input
          placeholder="first name"
          h="1.5rem"
          borderRadius="0.7rem"
          border="1px solid #ededed"
        />
        <Input
          placeholder="last name"
          h="1.5rem"
          borderRadius="0.7rem"
          border="1px solid #ededed"
        />
        <Input
          placeholder="email"
          h="1.5rem"
          borderRadius="0.7rem"
          border="1px solid #ededed"
        />
        <Input
          placeholder="password"
          h="1.5rem"
          borderRadius="0.7rem"
          border="1px solid #ededed"
        />
        <Button
          borderStyle="none"
          bgColor="black"
          color="white"
          h="2rem"
          w="4rem"
          borderRadius="0.5rem"
          _hover={{
            transform: "scale(1.1)",
            cursor: "pointer",
            bgColor: "tomato",
          }}
        >
          submit
        </Button>
        <Button
          color="tomato"
          bgColor="rgba(0,0,0,0.1)"
          _hover={{ cursor: "pointer" }}
          borderStyle="none"
          mt="-1rem"
          borderRadius="1rem"
        >
          Already have an account? sign in
        </Button>
      </Flex>
    </Flex>
  );
};
export const SignIn = () => {
  return (
    <Flex
      align="center"
      justify="center"
      bgColor="rgba(0, 0, 0, 0.5)"
      h="100vh"
      w="100%"
      position="absolute"
      zIndex="2"
    >
      <Flex
        direction="column"
        w="17rem"
        h="13rem"
        bgColor="white"
        border="1px solid #ededed"
        borderRadius="1rem"
        justify="space-evenly"
        align="center"
      >
        <IconButton
          color="white"
          bgColor="black"
          h="1.5rem"
          w="1.5rem"
          borderRadius="100rem"
          borderStyle="none"
          zIndex="3"
          position="absolute"
          marginBottom="10.5rem"
          marginLeft="14rem"
          _hover={{
            transform: "scale(1.1)",
            cursor: "pointer",
            bgColor: "tomato",
          }}
        >
          <CloseIcon w={6} h={6} />
        </IconButton>
        <Input
          placeholder="email"
          h="1.5rem"
          borderRadius="0.7rem"
          border="1px solid #ededed"
        />
        <Input
          placeholder="password"
          h="1.5rem"
          borderRadius="0.7rem"
          border="1px solid #ededed"
        />
        <Button
          borderStyle="none"
          bgColor="black"
          color="white"
          h="2rem"
          w="4rem"
          borderRadius="0.5rem"
          _hover={{
            transform: "scale(1.1)",
            cursor: "pointer",
            bgColor: "tomato",
          }}
        >
          Sign In
        </Button>
        <Button
          color="tomato"
          bgColor="rgba(0,0,0,0.1)"
          _hover={{ cursor: "pointer" }}
          borderStyle="none"
          mt="-1rem"
          borderRadius="1rem"
        >
          Don´t have an account? sign up
        </Button>
      </Flex>
    </Flex>
  );
};
