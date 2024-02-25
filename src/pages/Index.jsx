import { Box, Container, Heading, SimpleGrid, Text, Image, VStack, useColorModeValue, Icon } from "@chakra-ui/react";
import { FaBirthdayCake, FaBusinessTime, FaMusic, FaCocktail, FaUmbrellaBeach, FaRegStar } from "react-icons/fa";

const ServiceCard = ({ title, description, icon }) => {
  const bg = useColorModeValue("gray.100", "gray.700");
  return (
    <VStack p={4} bg={bg} boxShadow="md" borderRadius="lg" alignItems="flex-start" spacing={3}>
      <Icon as={icon} w={10} h={10} color="blue.500" />
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
    </VStack>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            Our Services
          </Heading>
          <Text mt={4} fontSize="lg">
            We provide end-to-end event management solutions tailored to your needs.
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <ServiceCard title="Birthday Parties" description="Celebrate your special day with a bang! We organize memorable birthday events for all ages." icon={FaBirthdayCake} />
          <ServiceCard title="Corporate Events" description="From conferences to company retreats, we ensure your corporate events are professional and engaging." icon={FaBusinessTime} />
          <ServiceCard title="Live Music" description="Experience the best live performances. We manage concerts with top-notch audio and visual quality." icon={FaMusic} />
          <ServiceCard title="Cocktail Parties" description="Elevate your evenings with our exquisite cocktail party planning services." icon={FaCocktail} />
          <ServiceCard title="Beach Events" description="Enjoy the sun, sand, and sea with our beautifully curated beach events." icon={FaUmbrellaBeach} />
          <ServiceCard title="Special Occasions" description="Anniversaries, graduations, or any milestone, we're here to make it unforgettable." icon={FaRegStar} />
        </SimpleGrid>
        <Box>
          <Image src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBsYW5uaW5nfGVufDB8fHx8MTcwODg4Nzc0MXww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" boxShadow="lg" maxH="400px" objectFit="cover" width="full" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
