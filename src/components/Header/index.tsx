import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSideBarDrawer } from "../../context/SideBarDrawerContext";

import Logo from "./Logo";
import NotificationNav from "./NotificationNav";
import Profile from "./Profile";
import SearchBox from "./SearchBox";
export default function Header() {
  const { onOpen } = useSideBarDrawer();
  const isLargeVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx={"auto"}
      mt="4"
      align="center"
      px="6"
    >
      {!isLargeVersion && (
        <IconButton
          arial-label="Open navigation"
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr={8}
          icon={<Icon as={RiMenuLine} />}
        />
      )}
      <Logo />

      {isLargeVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isLargeVersion} />
      </Flex>
    </Flex>
  );
}
