import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from '@mui/material'
import React from 'react'
export function SubscribersList({ subscribers }) {
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
        'You have no subscribers yet'
      ) : (
        <TableContainer>
          <Table
            sx={{
              minWidth: 650,
            }}
            aria-label='Subscribers List'
          >
            <TableHead>
              <TableRow>
                {Object.keys(Object.values(subscribers)[0][0]).map(
                  (key, idx) => (
                    <TableCell key={idx} style={{ fontWeight: 700 }}>
                      {key[0].toUpperCase() +
                        key
                          .slice(1)
                          .split(/(?=[A-Z])/)
                          .join(' ')}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(subscribers)
                .flat()
                .map((subscriber, idx) => (
                  <TableRow key={idx}>
                    {Object.values(subscriber).map((value, idx) => (
                      <TableCell key={idx}>{value}</TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  )
}
