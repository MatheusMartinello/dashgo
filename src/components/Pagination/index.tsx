import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export default function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing={6}
    >
      <Box>
        <strong>0 </strong> - <strong> 10 </strong> de <strong> 100 </strong>
      </Box>
      <Stack spacing="2" direction="row">
        <PaginationItem pageNumber={1} isCurrent={true} />
        <PaginationItem pageNumber={2} isCurrent={false} />
        <PaginationItem pageNumber={3} isCurrent={false} />
        <PaginationItem pageNumber={4} isCurrent={false} />
        <PaginationItem pageNumber={5} isCurrent={false} />
      </Stack>
    </Stack>
  );
}
