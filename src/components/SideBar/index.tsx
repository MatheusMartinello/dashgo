import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSideBarDrawer } from "../../context/SideBarDrawerContext";
import { SideBarNav } from "./SIdeBarNav";

export default function SideBar() {
  const { isOpen, onClose } = useSideBarDrawer();
  const isDrawerSideBar = useBreakpointValue({ base: true, lg: false });
  if (isDrawerSideBar)
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent backgroundColor="gray.800" padding="4">
            <DrawerCloseButton marginTop="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  return (
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>
  );
}
