import { Box, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import fImage1 from "../assets/1.png"; // Import the image
import fImage2 from "../assets/2.png"; // Import the image
import fImage3 from "../assets/3.png"; // Import the image
import fImage4 from "../assets/4.png"; // Import the image

const photoHeader = () => {
  return (
    <Box
      position="relative"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
      backgroundSize="cover"
      // height="100vh"
    >
      <Image src={fImage1} alt="Christmas Poster" />
      <br />
      <Image src={fImage2} alt="Christmas Poster" />
      <br />
      <Image src={fImage3} alt="Christmas Poster" />
      <br />
      <Image src={fImage4} alt="Christmas Poster" />
    </Box>
  );
};

export default photoHeader;
