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
      className={'light-shadow'}
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
            flex: '1 1 100%',
          }}
          variant='h6'
          id='tableTitle'
          component='div'
        >
          Subscribers List
        </Typography>
      </Toolbar>
      {!subscribers?.length ? (
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
                {Object.keys(subscribers[0]).map((key) => (
                  <TableCell>
                    {key[0].toUpperCase() +
                      key
                        .slice(1)
                        .split(/(?=[A-Z])/)
                        .join(' ')}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {subscribers.map((subscriber) => {
                const values = Object.values(subscriber)
                return (
                  <TableRow>
                    {values.map((value) => (
                      <TableCell>{value}</TableCell>
                    ))}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  )
}
