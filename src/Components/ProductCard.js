import { Flex, Text, Image, Box, Button } from "@chakra-ui/react";
import { Search2Icon, AddIcon } from "@chakra-ui/icons";

export const ProductCard = ({ product }) => {
  const { productImage, productTitle, productPrice } = product;

  return (
    <Box
      overflow="hidden"
      justifyContent="center"
      align="center"
      direction="column"
      m="1rem"
      w="14rem"
      h="16rem"
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
        <Flex h="50%">
          <Text fontSize="xl" isTruncated="true">
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
            <Text color="#ad172b">{productPrice}</Text>
          </Flex>

          <Flex width="50%" justify="flex-end">
            <Button
              mr="0.9rem"
              size="sm"
              mb="0.5rem"
              borderRadius="100rem"
              bgColor="black"
              color="white"
              _hover={{ transform: "scale(1.1)" }}
            >
              <AddIcon />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
