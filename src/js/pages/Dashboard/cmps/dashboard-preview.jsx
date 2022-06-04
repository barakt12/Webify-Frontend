import React from 'react'
import PreviewIcon from '@mui/icons-material/Preview'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import EventIcon from '@mui/icons-material/Event'
import { Link } from 'react-router-dom'
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
import BadgeIcon from '@mui/icons-material/Badge'
export function DashboardPreview({
  wap,
  subscribers,
  length,
  viewCount,
  onSelectTemplate,
  onDeleteWap,
}) {
  console.log(subscribers)
  return (
    <div key={wap._id} className={`wap-details-container ${wap._id}`}>
      <div className='wap-info-display'>
        <div className='wap-info-header'>
          <div className='wap-name details-container'>
            <div className='dashboard-icon-container'>
              <BadgeIcon />
            </div>
            <div className='text'>
              <span>Ellie Page</span>
              <span>Website Name</span>
            </div>
          </div>
          <div className='total-subscribers details-container'>
            <div className='dashboard-icon-container'>
              <SupervisedUserCircleIcon style={{}} />
            </div>
            <div className='text'>
              <span>{subscribers?.length ? subscribers?.length : '0'}</span>
              <span>Total subscribers</span>
            </div>
          </div>
          <div className='total-views details-container'>
            <div className='dashboard-icon-container'>
              <PreviewIcon />
            </div>
            <div className='text'>
              <span>{viewCount ? viewCount : '0'}</span>
              <span>Total site views</span>
            </div>
          </div>
          <div className='creates-at details-container'>
            <div className='dashboard-icon-container'>
              <EventIcon />
            </div>
            <div className='text'>
              <span>{wap?.createdAt.slice(0, 10)}</span>
              <span>Creation date</span>
            </div>
          </div>
        </div>
        <Paper
          elevation={2}
          variant='outlined'
          sx={{ width: '50%', borderRadius: '16px' }}
        >
          <Toolbar
            sx={{
              pl: { sm: 2 },
              pr: { xs: 1, sm: 1 },
            }}
          >
            <Typography
              sx={{ flex: '1 1 100%' }}
              variant='h6'
              id='tableTitle'
              component='div'
            >
              Subscribers List
            </Typography>
          </Toolbar>
          <TableContainer>
            <Table
              sx={{ minWidth: 650, width: '50%' }}
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
        </Paper>
        {/* <div style={{ height: 400, width: '100%', marginTop: '15px' }}>
          {subscribers ? (
            <DataGrid
              sx={{ height: '100%', borderRadius: '16px' }}
              rows={subscribers}
              columns={Object.keys(subscribers[0]).map((key) => ({
                field: key,
                headerName:
                  key[0].toUpperCase() +
                  key
                    .slice(1)
                    .split(/(?=[A-Z])/)
                    .join(' '),
                width: 130,
              }))}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          ) : (
            'You have no subscribers yet'
          )}
        </div> */}

        <p
          className='is-published'
          style={{
            color: wap.isPublished ? 'green' : 'tomato',
          }}
        >
          {wap.isPublished
            ? 'This site is published!'
            : "This site hasn't been published yet"}
        </p>
      </div>
      <div className='wap-selection-preview'>
        <div className='wap-hover-info-container'>
          <p>
            A simple and bold layout that makes it easy for you to showcase your
            product and share it with the world in no time.
          </p>
          <div className='wap-hover-btns-container'>
            {wap.isPublished && (
              <Link to={`/publish/${wap._id}`} className='wap-preview-btn'>
                <button>Visit site</button>
              </Link>
            )}
            <Link className='wap-select-btn' to='/editor'>
              <button onClick={() => onSelectTemplate(wap._id)}>Edit</button>
            </Link>
            <button
              className='wap-select-btn'
              onClick={() => onDeleteWap(wap._id)}
            >
              Delete
            </button>
          </div>
        </div>
        {/* <img className='wap-display-img' src={wap.thumbnail} alt='' /> */}
      </div>
      {/* <div className="template-info-container">
      <p className="info-template-name">{wap.info.name}</p>
      <p className="info-template-category">{wap.info.category}</p>
      </div> */}
    </div>
  )
}
