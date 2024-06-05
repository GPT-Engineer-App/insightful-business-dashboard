import React from "react";
import { Container, VStack, HStack, Box, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, IconButton, Image } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaUsers, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} width="100%">
        <Text fontSize="4xl" fontWeight="bold">
          Business Dashboard
        </Text>

        <HStack spacing={8} width="100%" justifyContent="space-around">
          <StatBox icon={FaDollarSign} label="Revenue" value="$50,000" change="+5%" />
          <StatBox icon={FaShoppingCart} label="Sales" value="1,200" change="-2%" />
          <StatBox icon={FaUsers} label="Customers" value="300" change="+8%" />
          <StatBox icon={FaChartLine} label="Growth" value="15%" change="+3%" />
        </HStack>

        <Box width="100%" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
          <Text fontSize="2xl" mb={4}>
            Sales Overview
          </Text>
          <Image src="https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMGNoYXJ0fGVufDB8fHx8MTcxNzYwNjAyNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Sales Chart" />
        </Box>
      </VStack>
    </Container>
  );
};

const StatBox = ({ icon, label, value, change }) => {
  const isPositive = change.startsWith("+");
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} width="250px">
      <HStack spacing={4}>
        <Box as={icon} size="24px" />
        <Stat>
          <StatLabel>{label}</StatLabel>
          <StatNumber>{value}</StatNumber>
          <StatHelpText>
            <StatArrow type={isPositive ? "increase" : "decrease"} />
            {change}
          </StatHelpText>
        </Stat>
      </HStack>
    </Box>
  );
};

export default Index;
