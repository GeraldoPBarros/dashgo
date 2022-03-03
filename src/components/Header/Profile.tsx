import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Geraldo Barros</Text>
        <Text color="gray.300" fontSize="small">
          geraldo.barros20@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Geraldo Barros"
        src="https://github.com/GeraldoPBarros.png"
      />
    </Flex>
  );
}
