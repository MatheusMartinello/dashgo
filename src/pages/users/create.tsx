import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import * as yup from "yup";
import { SubmitErrorHandler, useForm } from "react-hook-form";

type CreateUserFormData = {
  email: String;
  name: String;
  password: String;
  confirmPassword: String;
};
const createUserFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
  name: yup.string().required("Nome obrigatório"),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas devem ser iguais"),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  const handleSignIn: SubmitErrorHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };
  const { errors } = formState;
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth="1480" mx="auto" px="6">
        <SideBar />
        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Criar Usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8" as="form" onSubmit={handleSubmit(handleSignIn)}>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nome Completo"
                error={errors.name}
                {...register("name")}
              />
              <Input
                name="email"
                label="E-mail"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                error={errors.password}
                {...register("password")}
                {...register("name")}
              />
              <Input
                name="passwordConfirmation"
                type="password"
                label="Confirmar Senha"
                error={errors.confirmPassword}
                {...register("confirmPassword")}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="end">
            <HStack spacing="4">
              <Link href="/users" passHref={true}>
                <Button colorScheme={"whiteAlpha"}>Cancelar</Button>
              </Link>
              <Button colorScheme={"pink"} isLoading={formState.isSubmitting}>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
