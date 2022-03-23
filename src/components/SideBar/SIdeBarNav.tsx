import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav() {
  return (
    <Stack spacing={8} align="flex-start">
      <NavSection title="Geral">
        <NavLink menu="Dashboard" icon={RiDashboardLine} href="/dashboard" />
        <NavLink menu="Usuários" icon={RiContactsLine} href="/users" />
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink menu="Formulários" icon={RiInputMethodLine} href="/forms" />
        <NavLink menu="Automação" icon={RiGitMergeLine} href="/auth" />
      </NavSection>
    </Stack>
  );
}
