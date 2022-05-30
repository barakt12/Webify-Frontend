import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setWap, deleteWap, selectWap } from '../../store/wap/wap.action'
import { loadSavedWaps } from '../../store/user/user.action'
import { Link } from 'react-router-dom'

export const Profile = () => {
  const dispatch = useDispatch()
  const savedWaps = useSelector((storeState) => storeState.userModule.user?.waps)

  useEffect(() => {
    dispatch(loadSavedWaps())
  }, [])

  const onSelectTemplate = (id) => {
    dispatch(selectWap(id))
  }

  const onPreviewTemplate = (id) => {
    const selectedWap = savedWaps.find((wap) => wap._id === id)
    dispatch(setWap(selectedWap))
  }

  const onDeleteWap = (id) => {
    dispatch(deleteWap(id))
  }

  return (
    <>
      <div className="template-page-intro">
        <h2>Select a Template</h2>
      </div>
      {!savedWaps && <p>Please login to see your websites!</p>}
      {savedWaps && !savedWaps.length && <p>You havent created websites yet</p>}
      <section className="main-template-container">
        {savedWaps?.map((wap) => (
          <div key={wap._id} className={wap._id}>
            <div className="template-hover-info-container">
              <p>A simple and bold layout that makes it easy for you to showcase your product and share it with the world in no time.</p>
              <div className="template-hover-btns-container">
                <Link to={`/preview`} className="template-preview-btn">
                  <button onClick={() => onPreviewTemplate(wap._id)}>Preview</button>
                </Link>
                <Link className="template-select-btn" to="/editor">
                  <button onClick={() => onSelectTemplate(wap._id)}>Select</button>
                </Link>
                <button className="template-select-btn" onClick={() => onDeleteWap(wap._id)}>
                  Delete
                </button>
              </div>
            </div>
            <img className="profile-wap-display" src={wap.thunmbnail} alt="" />
            <hr />
            {/* <div className="template-info-container">
              <p className="info-template-name">{wap.info.name}</p>
              <p className="info-template-category">{wap.info.category}</p>
            </div> */}
          </div>
        ))}
      </section>
    </>
  )
}
