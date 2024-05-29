import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  paymentMethod: string,
  amount: number,
) {
  return { id, date, name, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2024',
    'Nguyễn Văn A',
    'VISA ⠀•••• 3719',
    312.000,
  ),
  createData(
    1,
    '16 Mar, 2024',
    'Nguyễn Văn B',
    'VISA ⠀•••• 2574',
    866.000,
  ),
  createData(
    3,
    '16 Mar, 2024',
    'Nguyễn Văn C',
    'AMEX ⠀•••• 2000',
    654.000,
  ),
  createData(
    4,
    '15 Mar, 2024',
    'Nguyễn Văn D',
    'VISA ⠀•••• 5919',
    212.000,
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Lịch hẹn gần đây</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Ngày</TableCell>
            <TableCell>Tên</TableCell>
            <TableCell>Hình thức trả</TableCell>
            <TableCell align="right">Thành tiền</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`${row.amount.toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 3 })}đ`}</TableCell>            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}