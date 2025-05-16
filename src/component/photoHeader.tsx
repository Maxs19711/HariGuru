import { Box, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import fImage1 from "../assets/1.png"; // Import the image
import fImage2 from "../assets/2.png"; // Import the image
import fImage3 from "../assets/3.png"; // Import the image
import fImage4 from "../assets/4.png"; // Import the image
import fImage5 from "../assets/5.png"; // Import the image
import fImage6 from "../assets/6.png"; // Import the image
import fImage7 from "../assets/7.png"; // Import the image
import fImage8 from "../assets/8.png"; // Import the image
import fImage9 from "../assets/9.png"; // Import the image
import fImage10 from "../assets/10.png"; // Import the image
import fImage11 from "../assets/11.png"; // Import the image
import fImage12 from "../assets/12.png"; // Import the image
import fImage13 from "../assets/13.png"; // Import the image

const photoHeader = () => {
  return (
    <Box
      position="relative"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
      backgroundSize="cover"
      // height="100vh"
      margin={1}
    >
      <Image src={fImage1} alt="Christmas Poster" />
      <br />
      <Image src={fImage2} alt="Christmas Poster" />
      <br />
      <Image src={fImage3} alt="Christmas Poster" />
      <br />
      <Image src={fImage4} alt="Christmas Poster" />
      <br />
      <Image src={fImage5} alt="Christmas Poster" />
      <br />
      <Image src={fImage6} alt="Christmas Poster" />
      <br />
      <Image src={fImage7} alt="Christmas Poster" />
      <br />
      <Image src={fImage8} alt="Christmas Poster" />
      <br />
      <Image src={fImage9} alt="Christmas Poster" />
      <br />
      <Image src={fImage10} alt="Christmas Poster" />
      <br />
      <Image src={fImage11} alt="Christmas Poster" />
      <br />
      <Image src={fImage12} alt="Christmas Poster" />
      <br />
      <Image src={fImage13} alt="Christmas Poster" />
    </Box>
  );
};

export default photoHeader;
