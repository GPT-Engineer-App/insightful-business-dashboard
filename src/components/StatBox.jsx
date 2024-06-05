import React from "react";
import { Box, HStack, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";

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

export default StatBox;
