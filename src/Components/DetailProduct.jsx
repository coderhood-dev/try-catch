import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export const DetailProduct = ({ detail }) => {
  console.log(detail);
  const photos = detail.imageModule.imagePathLIst || "";
  const title = detail.titleModule.subject || "";
  const price = detail.priceModule.formatedPrice || "";

  let [productImg, setState] = useState(photos[0]);
  return (
    <Flex
      border="1px solid #ededed"
      borderRadius="10px"
      w="43.5rem"
      h="35rem"
      direction="column"
    >
      <Flex direction="row" h="75%">
        <Flex direction="row" w="70%">
          <Flex
            direction="column"
            justify="center"
            align="center"
            ml="0.5rem"
            mt="-1rem"
          >
            <Image
              onClick={() => setState((productImg = photos[0]))}
              src={photos[0].src}
              m="0.2"
              boxSize="6.3rem"
              align="center"
              _hover={{
                cursor: "pointer",
              }}
              borderRadius="0.5rem"
            />
            <Image
              onClick={() => setState((productImg = photos[1]))}
              src={photos[1].src}
              m="0.2"
              boxSize="6.3rem"
              objectFit="cover"
              _hover={{
                cursor: "pointer",
              }}
              borderRadius="0.5rem"
            />
            <Image
              onClick={() => setState((productImg = photos[2]))}
              src={photos[2].src}
              m="0.2"
              boxSize="6.3rem"
              objectFit="cover"
              _hover={{
                cursor: "pointer",
              }}
              borderRadius="0.5rem"
            />
          </Flex>
          <Flex
            h="20rem"
            w="20rem"
            border="1px solid #ededed"
            m="1.5rem"
            overflow="hidden"
            borderRadius="20px"
            justify="center"
            align="center"
          >
            <Image src={productImg.src} boxSize="25rem" objectFit="cover" />
          </Flex>
        </Flex>
        <Flex direction="column" w="30%" h="100%">
          <Heading color="black">{title}</Heading>
          <Flex direction="row" justify="space-around" align="center" w="100%">
            <Text fontSize="1.5rem" mr="1rem">
              {price}
            </Text>
            <Text ml="1rem">envio gratis</Text>
          </Flex>

          <Button
            _hover={{
              transform: "scale(1.05)",
              bgColor: "tomato",
              color: "black",
              transition: "0.1s",
              fontWeight: "bolder",
              cursor: "pointer",
            }}
            borderStyle="none"
            borderRadius="1rem"
            fontWeight="bold"
            bgColor="black"
            color="white"
            w="7rem"
            h="4rem"
          >
            comprar ahora
          </Button>
        </Flex>
      </Flex>
      <Flex direction="column" p="1rem" justify="center" align="center" h="25%">
        <Heading>Description</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus libero modi ipsa. Illum sint exercitationem enim
          repellendus officia praesentium pariatur repudiandae, doloribus eaque
          facilis, alias soluta voluptate, odit reiciendis voluptatibus.
        </Text>
      </Flex>
    </Flex>
  );
};
