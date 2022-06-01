import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWap, selectWap } from '../../store/wap/wap.action'
import { loadSavedWaps } from '../../store/wap/wap.action'
import { Link } from 'react-router-dom'

export const Profile = () => {
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
                <p className="wap-name">ELLIE PAGE</p>
                <p>Created At: {wap.createdAt}</p>
              </div>
              <div className="wap-selection-preview">
                <div className="wap-hover-info-container">
                  <p>A simple and bold layout that makes it easy for you to showcase your product and share it with the world in no time.</p>
                  <div className="wap-hover-btns-container">
                    <Link to={`/preview`} className="wap-preview-btn">
                      <button onClick={() => onSelectTemplate(wap._id)}>Preview</button>
                    </Link>
                    <Link className="wap-select-btn" to="/editor">
                      <button onClick={() => onSelectTemplate(wap._id)}>Select</button>
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
