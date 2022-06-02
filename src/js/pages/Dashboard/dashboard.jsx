import { DashboardPreview } from './cmps/dashboard-preview'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWap, selectWap } from '../../store/wap/wap.action'
import { loadSavedWaps } from '../../store/wap/wap.action'

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
    <section className='main-dashboard-container'>
      <div className='template-page-intro'>
        <h2>Welcome to your dashboard!</h2>
      </div>
      <section className='profile-page'>
        {!savedWaps && <p>Please login to see your websites!</p>}
        {savedWaps && !savedWaps.length && (
          <p>You havent created websites yet</p>
        )}
        <section className='dashboard-container'>
          {savedWaps?.map((wap) => (
            <DashboardPreview
              key={wap._id}
              wap={wap}
              subscribers={wap.subscribers}
              viewCount={wap.viewCount}
              onSelectTemplate={onSelectTemplate}
              onDeleteWap={onDeleteWap}
            />
          ))}
        </section>
      </section>
    </section>
  )
}