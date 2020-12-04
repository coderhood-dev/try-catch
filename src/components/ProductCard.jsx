import { Flex, Text, Image, Box, Button } from "@chakra-ui/react"

export const ProductCard = () =>{
    return(
        <Box overflow='hidden' justifyContent='center' align='center' direction='column'  m='1rem' w='16rem' h='16rem'
        _hover={{cursor:'pointer'}}>
            <Flex h='75%' justify='center' align='center' overflow='hidden'>
                <Image src="/PlaceHolder.jpg" alt="imagen no disponible" w='100%' h='100%' _hover={{transition:'1s', transform: 'scale(1.1)' }} />
            </Flex>
            <Flex paddingLeft='0.5rem' direction='column' h='25%' w='100%' justifyContent='flex-start' alignItems='flex-start'>
                    <Text>Ps5 digital edition</Text>
                <Flex direction='row' align='center' width='100%' marginTop='-0.5rem' justify='space-between'>
                    <Text fontSize="xl" color='#ad172b'>$200.000</Text>
                    <Flex as='button' justify='center' align='center' mr='1rem' w='1.5rem' h='1.5rem' borderRadius='50%' bgColor='black' color='white' _hover={{transform:'scale(1.1)'}}> 
                    +
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}