import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";
interface PaginationProps {
  totalCounterOfRegisters: number;
  totalItensPerPage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}
const siblingsCount = 1;
function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}
export default function Pagination({
  totalCounterOfRegisters,
  currentPage = 1,
  onPageChange,
  totalItensPerPage = 10,
}: PaginationProps) {
  const lastPage = Math.floor(totalCounterOfRegisters / totalItensPerPage);

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];
  const nextPage =
    currentPage < lastPage
      ? generatePagesArray(Math.min(currentPage + siblingsCount), lastPage)
      : [];
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
        {previousPage.length > 0 &&
          previousPage.map((page) => {
            return (
              <PaginationItem
                key={page}
                pageNumber={currentPage - 1}
                isCurrent={false}
              />
            );
          })}
        <PaginationItem pageNumber={currentPage} isCurrent={true} />
        {nextPage.length > 0 &&
          nextPage.map((page) => {
            return (
              <PaginationItem
                key={page}
                pageNumber={currentPage + 1}
                isCurrent={false}
              />
            );
          })}
      </Stack>
    </Stack>
  );
}
