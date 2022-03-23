import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";
import ActiveLink from "../ActiveLink";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  menu: String;
  href: string;
}
export function NavLink({ icon, menu, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref={true}>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} />
        <Text ml={4} fontSize="medium">
          {menu}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
