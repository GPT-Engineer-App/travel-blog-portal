import { useState } from "react";
import { Container, VStack, HStack, Text, Box, Button, Image, IconButton } from "@chakra-ui/react";
import { FaHome, FaMapMarkerAlt, FaGlobe, FaBook } from "react-icons/fa";

const Home = () => (
  <VStack spacing={4}>
    <Text fontSize="2xl">Welcome to the Travel Blog</Text>
    <Text>Explore the world with us!</Text>
    <Image src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHx0cmF2ZWx8ZW58MHx8fHwxNzE3NDk2MTgyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Travel" />
  </VStack>
);

const Destinations = () => (
  <VStack spacing={4}>
    <Text fontSize="2xl">Top Destinations</Text>
    <Text>Discover the best places to visit.</Text>
    <Image src="https://images.unsplash.com/photo-1605153322277-dd0d7f608b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXN0aW5hdGlvbnN8ZW58MHx8fHwxNzE3NDk2MTgzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Destinations" />
  </VStack>
);

const USAStates = () => (
  <VStack spacing={4}>
    <Text fontSize="2xl">States of USA</Text>
    <Text>Learn about the different states in the USA.</Text>
    <Image src="https://images.unsplash.com/photo-1616260150624-575739d6facb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxVU0ElMjBzdGF0ZXN8ZW58MHx8fHwxNzE3NDk2MTgzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="USA States" />
  </VStack>
);

const WorldEncyclopedia = () => (
  <VStack spacing={4}>
    <Text fontSize="2xl">World Encyclopedia</Text>
    <Text>Get information about countries around the world.</Text>
    <Image src="https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMGVuY3ljbG9wZWRpYXxlbnwwfHx8fDE3MTc0OTYxODR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="World Encyclopedia" />
  </VStack>
);

const Index = () => {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "destinations":
        return <Destinations />;
      case "usa":
        return <USAStates />;
      case "world":
        return <WorldEncyclopedia />;
      default:
        return <Home />;
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <HStack spacing={4}>
          <IconButton aria-label="Home" icon={<FaHome />} onClick={() => setActivePage("home")} />
          <IconButton aria-label="Destinations" icon={<FaMapMarkerAlt />} onClick={() => setActivePage("destinations")} />
          <IconButton aria-label="USA States" icon={<FaGlobe />} onClick={() => setActivePage("usa")} />
          <IconButton aria-label="World Encyclopedia" icon={<FaBook />} onClick={() => setActivePage("world")} />
        </HStack>
        <Box width="100%">{renderPage()}</Box>
      </VStack>
    </Container>
  );
};

export default Index;
