import { ConversionRate } from './conversion-rate'
import { SubscribersList } from './subscribers-list'
import React from 'react'
import PreviewIcon from '@mui/icons-material/Preview'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import EventIcon from '@mui/icons-material/Event'
import BadgeIcon from '@mui/icons-material/Badge'
import { DailyVisitCount } from './daily-visit-count'
export function DashboardPreview({ wap, subscribers, viewCount, dailyConversionRate, onSelectTemplate, onDeleteWap }) {
  const totalViews = viewCount
    ? Object.values(viewCount)?.reduce((acc, cur) => {
        return acc + cur
      }, 0)
    : '0'

  const creationDate = wap?.createdAt.slice(0, 10)

  const subscribersCount = subscribers ? Object.values(subscribers)?.flat()?.length : 0
  const data = {
    subscribersCount,
    totalViews,
    creationDate,
    conversionRate: ((subscribersCount / totalViews) * 100).toFixed(2),
  }

  return (
    <div className="wap-info-display">
      <div className="wap-name details-container">
        <div className="dashboard-icon-container">
          <BadgeIcon />
        </div>
        <div className="text">
          <span>Ellie Page</span>
          <span>Website Name</span>
        </div>
      </div>
      <div className="total-subscribers details-container">
        <div className="dashboard-icon-container">
          <SupervisedUserCircleIcon style={{}} />
        </div>
        <div className="text">
          <span>{data.subscribersCount}</span>
          <span>Total subscribers</span>
        </div>
      </div>
      <div className="total-views details-container">
        <div className="dashboard-icon-container">
          <PreviewIcon />
        </div>
        <div className="text">
          <span>{data.totalViews}</span>
          <span>Total site views</span>
        </div>
      </div>
      <div className="creates-at details-container">
        <div className="dashboard-icon-container">
          <EventIcon />
        </div>
        <div className="text">
          <span>{data.creationDate}</span>
          <span>Creation date</span>
        </div>
      </div>
      <SubscribersList subscribers={subscribers} />
      <ConversionRate conversionRate={data.conversionRate} dailyConversionRate={dailyConversionRate} />
      <DailyVisitCount viewCount={viewCount} />
      {/* <p
          className='is-published'
          style={{
            color: wap.isPublished ? 'green' : 'tomato',
          }}
        >
          {wap.isPublished
            ? 'This site is published!'
            : "This site hasn't been published yet"}
        </p> */}
      {/* <div className='wap-selection-preview'>
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
        <img className='wap-display-img' src={wap.thumbnail} alt='' />
      </div> */}

      {/* <div className="template-info-container">
      <p className="info-template-name">{wap.info.name}</p>
      <p className="info-template-category">{wap.info.category}</p>
      </div> */}
    </div>
  )
}
