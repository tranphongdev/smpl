import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { ColumnsType } from '~/types';

interface DataTableHeadProps {
  columns: ColumnsType[];
}

export const DataTableHead: React.FC<DataTableHeadProps> = ({ columns }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.key}
            sx={{
              color: 'white',
              fontWeight: 500,
              minWidth: column.width,
              maxWidth: column.width,
            }}
          >
            <p className="truncate">{column.title}</p>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
