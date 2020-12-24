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
      w="13rem"
      h="16rem"
      borderRadius="7px"
      bgColor="#2d3748"
      _hover={{ transition: "0.2s", cursor: "pointer", boxShadow: "lg" }}
    >
      <Button
        _hover={{
          transition: "0.1s",
          transform: "scale(1.1)",
          bgColor: "black",
        }}
        size="sm"
        borderRadius="100rem"
        bgColor="#1a202c"
        color="#6ccacf"
        pos="absolute"
        ml="4.1rem"
        mt="0.5rem"
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
          _hover={{ transition: "0.2s", transform: "scale(1.05)" }}
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
          <Text
            fontSize="sm"
            mt="0.3rem"
            isTruncated="true"
            maxWidth="12.5rem"
            color="#a0aec0"
          >
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
            <Text color="#6ccacf">{productPrice}</Text>
          </Flex>

          <Flex width="50%" justify="flex-end">
            <Button
              mr="0.5rem"
              size="sm"
              mb="0.5rem"
              borderRadius="100rem"
              bgColor="#1a202c"
              color="#6ccacf"
              _hover={{
                transition: "0.1s",
                transform: "scale(1.1)",
                bgColor: "black",
              }}
            >
              +
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
