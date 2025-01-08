import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { ColumnsType } from '~/types';
import { styled } from '@mui/material';

export const StyledTableRow = styled(TableRow)`
  &:last-child td,
  &:last-child th {
    border: 0;
  }
  & .MuiTableCell-root {
    &:not(:last-child) {
      border-right: 1px solid #00000026;
    }
  }
`;

interface DataTableBodyProps<T> {
  data: T[];
  columns: ColumnsType[];
}

export const DataTableBody = <T,>({ data, columns }: DataTableBodyProps<T>) => {
  return (
    <TableBody>
      {data.map((row, idx) => (
        <StyledTableRow key={idx}>
          {columns.map((column, index) => (
            <TableCell component="th" scope="row" sx={{ height: 79 }}>
              {column?.render && column?.render(row, index)}
            </TableCell>
          ))}
        </StyledTableRow>
      ))}
    </TableBody>
  );
};
