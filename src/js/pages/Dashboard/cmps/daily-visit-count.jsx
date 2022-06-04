import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Paper, Typography } from '@mui/material'

export const DailyVisitCount = ({ viewCount }) => {
  const options = {
    responsive: true,
    scales: {
      y: {
        grid: {
          drawTicks: true,
        },
      },
      x: {
        grid: {
          // display: 'none',
          color: 'white',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
    },
  }

  const labels = Object.keys(viewCount)

  const data = {
    labels,

    datasets: [
      {
        lineTension: 0.3,
        data: Object.values(viewCount),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  return (
    <Paper
      style={{
        margin: '2px',
        borderRadius: '16px',
      }}
      elevation={0}
      className='light-shadow'
    >
      <div style={{ width: '99%', padding: '20px' }}>
        <Typography variant='h5'>Daily Visits</Typography>
        <Line options={options} data={data} />
      </div>
    </Paper>
  )
}
