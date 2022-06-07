import { useTheme } from '@emotion/react'
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
  Typography,
} from '@mui/material'
import { useState } from 'react'

export function SubscribersList({ subscribers }) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Paper
      elevation={0} // variant='outlined'
      sx={{
        width: '75%',
        borderRadius: '16px',
        marginLeft: '2px',
        marginBottom: '2px',
        paddingInline: '10px',
      }}
      className={'light-shadow subscribers-list'}
    >
      <Toolbar
        sx={{
          pl: {
            sm: 2,
          },
          pr: {
            xs: 1,
            sm: 1,
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
          }}
          variant='h6'
          id='tableTitle'
          component='div'
        >
          Subscription List
        </Typography>
      </Toolbar>
      {!subscribers ? (
        <p style={{ textAlign: 'left', padding: '0 1rem' }}>
          You have no subscriptions yet
        </p>
      ) : (
        <TableContainer
          sx={{
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Table
            sx={{
              width: 'auto',
              tableLayout: 'auto',
              minWidth: 450,
            }}
            aria-label='Subscribers List'
          >
            <TableHead>
              <TableRow>
                {subscribers ? (
                  Object.keys(Object.values(subscribers)[0][0]).map(
                    (key, idx) => (
                      <TableCell key={idx} style={{ fontWeight: 700 }}>
                        {key[0].toUpperCase() +
                          key
                            .slice(1)
                            .split(/(?=[A-Z])/)
                            .join(' ')}
                      </TableCell>
                    )
                  )
                ) : (
                  <></>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {subscribers ? (
                Object.values(subscribers)
                  .flat()
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((subscriber, idx) => (
                    <TableRow key={idx}>
                      {Object.values(subscriber).map((value, idx) => (
                        <TableCell key={idx}>{value}</TableCell>
                      ))}
                    </TableRow>
                  ))
              ) : (
                <></>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component='div'
            count={Object.values(subscribers).flat().length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      )}
    </Paper>
  )
}

// function TablePaginationActions(props) {
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (event) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (event) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (event) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   }

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
//   );
// }
