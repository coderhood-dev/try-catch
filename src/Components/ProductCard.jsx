import { Flex, Text, Image, Box, Button } from "@chakra-ui/react";
import { Search2Icon, AddIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";

export const ProductCard = ({ product }) => {
  let history = useHistory();
  const { productImage, productTitle, productPrice, productId } = product;
  const handleGetDetailsProduct = () => {
    console.log(productId);
    history.push(`/details/${productId}`);
  };
  return (
    <Box
      overflow="hidden"
      justifyContent="center"
      align="center"
      direction="column"
      m="1rem"
      w="15rem"
      h="20rem"
      borderRadius="7px"
      bgColor="white"
      border="1px solid #ededed"
      _hover={{ transition: "1s", cursor: "pointer", boxShadow: "lg" }}
    >
      <Button
        _hover={{ transform: "scale(1.1)", bgColor: "black" }}
        size="sm"
        borderRadius="100rem"
        bgColor="black"
        color="white"
        pos="absolute"
        ml="5rem"
        mt="0.7rem"
        zIndex={10}
        onClick={handleGetDetailsProduct}
      >
        <Search2Icon w={2} h={2} />
      </Button>

      <Flex h="75%" justify="center" align="center" overflow="hidden">
        <Image
          src={productImage}
          alt="imagen no disponible"
          w="100%"
          h="100%"
          _hover={{ transition: "0.7s", transform: "scale(1.1)" }}
        />
      </Flex>

      <Flex
        paddingLeft="0.5rem"
        direction="column"
        h="25%"
        w="100%"
        justifyContent="flex-start"
        alignItems="flex-start"
        borderTop="1px solid #ededed"
      >
        <Flex h="50%" mt="0.6rem">
          <Text isTruncated="true" maxW="13rem" fontSize="1rem">
            {productTitle}
          </Text>
        </Flex>

        <Flex
          direction="row"
          align="center"
          justify="space-evenly"
          width="100%"
          height="50%"
        >
          <Flex justify="flex-start" width="50%">
            <Text color="tomato" fontSize="1.2rem" fontWeight="bold">
              $ 354.00
            </Text>
          </Flex>

          <Flex width="50%" justify="flex-end">
            <Button
              mr="0.9rem"
              size="sm"
              mb="0.5rem"
              borderRadius="100rem"
              bgColor="black"
              color="white"
              _hover={{
                transform: "scale(1.1)",
                background: "tomato",
                color: "#000",
              }}
            >
              <AddIcon />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
