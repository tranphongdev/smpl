import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

import { ColumnsType } from '~/types';
import { DataTableBody } from './DataTableBody';
import { DataTableHead } from './DataTableHead';

interface DataTableProps<T> {
  data: T[];
  columns: ColumnsType[];
}

export const DataTable = <T,>({ data, columns }: DataTableProps<T>) => {
  return (
    <TableContainer>
      <Table>
        <DataTableHead columns={columns} />
        <DataTableBody data={data} columns={columns} />
      </Table>
    </TableContainer>
  );
};
