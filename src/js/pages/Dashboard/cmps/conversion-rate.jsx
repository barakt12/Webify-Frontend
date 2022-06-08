import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'

import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)
export function ConversionRate({ conversionRate, dailyConversionRate }) {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  }

  const data = {
    labels: dailyConversionRate ? Object.keys(dailyConversionRate) : [],
    datasets: [
      {
        pointRadius: 0,
        lineTension: 0.3,
        data: dailyConversionRate ? Object.values(dailyConversionRate) : [],
        borderColor: '#92B4EC',
      },
    ],
  }
  return (
    <div className="conversion-rate details-container light-shadow">
      <div className="text">
        <span>{conversionRate + '%'}</span>
        <span>Conversion Rate</span>
      </div>
      <div className="conversion-chart">
        <Line options={options} data={data} />
      </div>
    </div>
  )
}
