import { HStack, Box, Text, IconButton } from "@chakra-ui/react";
import { FaHome, FaMapMarkerAlt, FaGlobe, FaBook } from "react-icons/fa";

const Header = ({ setActivePage }) => (
  <HStack width="100%" padding={4} justifyContent="space-between" alignItems="center" bg="gray.100">
    <Box>
      <Text fontSize="2xl" fontWeight="bold">
        Isolated Traveller
      </Text>
    </Box>
    <HStack spacing={4}>
      <IconButton aria-label="Home" icon={<FaHome />} onClick={() => setActivePage("home")} />
      <IconButton aria-label="Destinations" icon={<FaMapMarkerAlt />} onClick={() => setActivePage("destinations")} />
      <IconButton aria-label="USA States" icon={<FaGlobe />} onClick={() => setActivePage("usa")} />
      <IconButton aria-label="World Encyclopedia" icon={<FaBook />} onClick={() => setActivePage("world")} />
    </HStack>
  </HStack>
);

export default Header;
