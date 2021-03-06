import { ConversionRate } from './conversion-rate'
import { SubscribersList } from './subscribers-list'
import PreviewIcon from '@mui/icons-material/Preview'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import EventIcon from '@mui/icons-material/Event'
import BadgeIcon from '@mui/icons-material/Badge'
import { DailyVisitCount } from './daily-visit-count'
import ErrorIcon from '@mui/icons-material/Error'
import { useDispatch } from 'react-redux'
import { publishWap } from '../../../store/wap/wap.action'
import { Link } from 'react-router-dom'

export function DashboardPreview({
  wap,
  subscribers,
  viewCount,
  dailyConversionRate,
  onSelectTemplate,
  onDeleteWap,
}) {
  const dispatch = useDispatch()
  const totalViews = viewCount
    ? Object.values(viewCount)?.reduce((acc, cur) => {
        return acc + cur
      }, 0)
    : '0'

  const creationDate = wap?.createdAt.slice(0, 10)

  const subscribersCount = subscribers
    ? Object.values(subscribers)?.flat()?.length
    : 0
  const data = {
    subscribersCount,
    totalViews,
    creationDate,
    conversionRate: ((subscribersCount / totalViews) * 100).toFixed(2),
  }

  const onPublishWap = (id) => {
    dispatch(publishWap(id))
  }

  return (
    <div className='wap-info-display'>
      <div className={`published-msg ${wap.isPublished ? 'published' : ''}`}>
        <ErrorIcon />
        <h3>
          {wap.isPublished
            ? 'This site is published'
            : "This site isn't published yet"}
        </h3>
      </div>
      <div className='wap-btns-container'>
        <button className='edit' onClick={() => onSelectTemplate(wap._id)}>
          Edit
        </button>
        {wap.isPublished ? (
          <Link
            to={`/publish/${wap._id}`}
            target='_blank'
            className='visit-publish'
          >
            <button>Visit</button>
          </Link>
        ) : (
          <button
            className='visit-publish'
            onClick={() => onPublishWap(wap._id)}
          >
            Publish
          </button>
        )}
      </div>
      <div className='wap-name details-container'>
        <div className='dashboard-icon-container'>
          <BadgeIcon />
        </div>
        <div className='text'>
          <span>{wap.name}</span>
          <span>Website Name</span>
        </div>
      </div>
      <div className='total-subscribers details-container'>
        <div className='dashboard-icon-container'>
          <SupervisedUserCircleIcon style={{}} />
        </div>
        <div className='text'>
          <span>{data.subscribersCount}</span>
          <span>Total subscribers</span>
        </div>
      </div>
      <div className='total-views details-container'>
        <div className='dashboard-icon-container'>
          <PreviewIcon />
        </div>
        <div className='text'>
          <span>{data.totalViews}</span>
          <span>Total site views</span>
        </div>
      </div>
      <div className='creates-at details-container'>
        <div className='dashboard-icon-container'>
          <EventIcon />
        </div>
        <div className='text'>
          <span>{data.creationDate}</span>
          <span>Creation date</span>
        </div>
      </div>
      <SubscribersList subscribers={subscribers} />
      <ConversionRate
        conversionRate={data.conversionRate}
        dailyConversionRate={dailyConversionRate}
      />
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
