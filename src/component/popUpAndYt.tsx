import {
  Box,
  Button,
  Center,
  GridItem,
  SimpleGrid,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const popUpAndYt: React.FC = () => {
  const playerRef = useRef<HTMLIFrameElement | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Add event listener for the "message" event
    const handleMessage = (event: MessageEvent) => {
      if (event.data === "playVideo") {
        playUTube();
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const playUTube = () => {
    const youtubeVideo = playerRef.current;
    if (youtubeVideo) {
      // Post a message to the YouTube video iframe to play the video
      youtubeVideo.contentWindow?.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );

      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
        const popupOverlay = document.getElementById("popup-overlay");
        if (popupOverlay) {
          popupOverlay.style.display = "none";
        }
      }, 1000);
    }
  };

  return (
    <>
      <Box id="popup-overlay" className="popup-overlay">
        <SimpleGrid
          className={`popup-content animate__animated animate__backInDown ${
            isClicked ? "animate__animated animate__backOutUp" : ""
          }`}
        >
          <Text
            fontFamily="Montserrat"
            fontSize={20}
            textTransform="capitalize"
          >
            Program Khalifah Chilik
          </Text>
          <Center>
            <Button
              id="close-button"
              onClick={playUTube}
              colorScheme="blue"
              h={"50px"}
              w={"100px"}
              bg={"#89CFF0"}
            >
              Buka
            </Button>
          </Center>
        </SimpleGrid>
      </Box>

      <Box marginBottom={10} marginTop={55}>
        <Center>
          <iframe
            id="player"
            ref={playerRef}
            width="80%"
            height="auto"
            src="https://www.youtube.com/embed/EcEuFt9WTo4?enablejsapi=1&version=3&playerapiid=ytplayer"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Center>
      </Box>
    </>
  );
};

export default popUpAndYt;
