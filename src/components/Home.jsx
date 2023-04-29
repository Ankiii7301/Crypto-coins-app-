import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import crypto_image from "../assets/crypto_img.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box>
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"} >
      <motion.div
        style={{
          height: "60vh",
          width: "100%",
          display: "flex", 
          justifyContent: "center", 
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          style={{width: "100%", height: "65vh", backgroundPosition: "center"}}
          objectFit={"cover"}
          src={crypto_image}
          filter={"grayscale(1)"}
        />
      </motion.div>
    </Box>
    <Box>
        <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        Crypto App
      </Text>
    </Box>
    </Box>
  );
};

export default Home;