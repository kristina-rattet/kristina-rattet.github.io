import useUserContext from "../hooks/useUserContext";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Transactions = () => {
  const { loggedInUser } = useUserContext();

  const transactionList = loggedInUser?.transactionHistory?.map(
    (transaction, i) => {
      return (
        <TableRow
          key={i}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {transaction.date}
          </TableCell>
          <TableCell align="right">{transaction.type}</TableCell>
          <TableCell align="right">{transaction.amount}</TableCell>
        </TableRow>
      );
    }
  );

  return (
    <>
      {!loggedInUser ? (
        <p>You must be logged in to your account to access this page</p>
      ) : (
        <TableContainer component={Paper} className="custom-table">
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            {transactionList.length === 0 ? (
              <>
                <TableBody>
                  <TableRow>
                    <TableCell>No transactions to show at this time</TableCell>
                  </TableRow>
                </TableBody>
              </>
            ) : (
              <TableBody>{transactionList}</TableBody>
            )}
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default Transactions;
