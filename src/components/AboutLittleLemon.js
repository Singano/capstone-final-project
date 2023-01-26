import React from "react";
import {
  Heading,
  Box,
  Text,
  Button,
  Image
} from "@chakra-ui/react";
import Hero1 from "./assets/Hero1.png";

const AboutLittleLemom = () => {
  return (
    <Box maxW="90rem" backgroundColor={"#495E57"} mb={20} display="flex">
      <Box>
      <Heading mb={5} mt={3} ml={20} fontSize="6xl" pt={10}>
        Little Lemon
      </Heading>
      <Text fontSize="xl" ml={20}>
        We are a family owned <br /> Mediteranean restaurant.
        <br />
        focused on traditional recipes
        <br />
      </Text>
      <Text fontSize="xl" ml={20}>
        served with a modern <br />
        twist.
      </Text>
      <Button
        size="lg"
        backgroundColor={"#F4CE14"}
        mt="24px"
        ml={20}
        color={"#333333"}
        mb={10}
      >
        Reserve a Table
      </Button>
      </Box>
      <Box ml={500} py={10} >
        <Image width={'350px'} height={'350px'} src={Hero1} alt="hero1" display={'flex'} borderRadius={32}/>
      </Box>
    </Box>
  );
};

export default AboutLittleLemom;
