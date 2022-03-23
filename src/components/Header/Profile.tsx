import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
interface ProfileProps {
  showProfileData?: boolean;
}
export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>Matheus Martinello</Text>
          <Text color="gray.300">matheusmartinello@email.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Matheus Martinello" src="#" />
    </Flex>
  );
}
