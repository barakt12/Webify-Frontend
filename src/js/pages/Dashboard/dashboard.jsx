import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWap, selectWap } from '../../store/wap/wap.action'
import { loadSavedWaps } from '../../store/wap/wap.action'
import { SubscribersList } from './cmps/subscribers-list'
import PreviewIcon from '@mui/icons-material/Preview'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import EventIcon from '@mui/icons-material/Event'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  const dispatch = useDispatch()
  const savedWaps = useSelector((storeState) => storeState.wapModule.savedWaps)

  useEffect(() => {
    dispatch(loadSavedWaps())
  }, [])

  const onSelectTemplate = (id) => {
    dispatch(selectWap(id))
  }

  const onDeleteWap = (id) => {
    dispatch(deleteWap(id))
  }

  return (
    <section className="main-dashboard-container">
      <div className="template-page-intro">
        <h2>Wellcome to your dashboard!</h2>
      </div>
      <section className="profile-page">
        {!savedWaps && <p>Please login to see your websites!</p>}
        {savedWaps && !savedWaps.length && <p>You havent created websites yet</p>}
        <section className="dashboard-container">
          {savedWaps?.map((wap) => (
            <div key={wap._id} className={`wap-details-container ${wap._id}`}>
              <div className="wap-info-display">
                <div className="wap-info-header">
                  <p className="wap-name">ELLIE PAGE</p>
                  <div className="total-subscribers details-container">
                    <SupervisedUserCircleIcon style={{ fontSize: '3rem', fill: '#9d9d9d' }} />
                    <div className="text">
                      <span>{wap?.subscribers?.length ? wap?.subscribers?.length : '0'}</span>
                      <span>Total subscribers</span>
                    </div>
                  </div>
                  <div className="total-views details-container">
                    <PreviewIcon style={{ fontSize: '3rem', fill: '#f3a990' }} />
                    <div className="text">
                      <span>{wap?.viewCount ? wap?.viewCount : '0'}</span>
                      <span>Total site views</span>
                    </div>
                  </div>
                  <div className="creates-at details-container">
                    <EventIcon style={{ fontSize: '3rem', fill: '#87bef5' }} />
                    <div className="text">
                      <span>{wap.createdAt.slice(0, 10)}</span>
                      <span>Creation date</span>
                    </div>
                  </div>
                </div>
                {wap?.subscribers?.length ? <SubscribersList subscribers={wap.subscribers} /> : 'You have no subscribers yet!'}
                <p className="is-published" style={{ color: wap.isPublished ? 'green' : 'tomato' }}>
                  {wap.isPublished ? 'This site is published!' : 'This site havent been published yet'}
                </p>
              </div>
              <div className="wap-selection-preview">
                <div className="wap-hover-info-container">
                  <p>A simple and bold layout that makes it easy for you to showcase your product and share it with the world in no time.</p>
                  <div className="wap-hover-btns-container">
                    {wap.isPublished && (
                      <Link to={`/publish/${wap._id}`} className="wap-preview-btn">
                        <button>Visit site</button>
                      </Link>
                    )}
                    <Link className="wap-select-btn" to="/editor">
                      <button onClick={() => onSelectTemplate(wap._id)}>Edit</button>
                    </Link>
                    <button className="wap-select-btn" onClick={() => onDeleteWap(wap._id)}>
                      Delete
                    </button>
                  </div>
                </div>
                <img className="wap-display-img" src={wap.thumbnail} alt="" />
              </div>
              {/* <div className="template-info-container">
              <p className="info-template-name">{wap.info.name}</p>
              <p className="info-template-category">{wap.info.category}</p>
            </div> */}
            </div>
          ))}
        </section>
      </section>
    </section>
  )
}
