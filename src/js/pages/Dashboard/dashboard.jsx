import { DashboardPreview } from './cmps/dashboard-preview'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWap, selectWap } from '../../store/wap/wap.action'
import { loadSavedWaps } from '../../store/wap/wap.action'
import { toast } from 'react-toastify'
import DashboardSideMenu from './cmps/dashboard-side-menu'
import ErrorIcon from '@mui/icons-material/Error'

export const Dashboard = () => {
  const dispatch = useDispatch()
  const savedWaps = useSelector((storeState) => storeState.wapModule.savedWaps)
  const [currWap, setCurrWap] = useState(null)

  useEffect(() => {
    dispatch(loadSavedWaps())
  }, [])

  useEffect(() => {
    if (!savedWaps) return
    setCurrWap(savedWaps[0])
  }, [savedWaps])

  const onSelectWapToDisplay = (wap) => {
    setCurrWap(wap)
  }

  const onSelectTemplate = (id) => {
    dispatch(selectWap(id))
  }

  const onDeleteWap = (id) => {
    dispatch(deleteWap(id))
    toast.success('Deleted Successfully')
  }
  return (
    <section className='main-dashboard-container'>
      <DashboardSideMenu onSelectWapToDisplay={onSelectWapToDisplay} />
      <section className='profile-page'>
        <div className='template-page-intro'>
          <h2>Hi, Welcome back</h2>
          {
            <div>
              <h3>This site isn't published yet</h3>
              <ErrorIcon />
            </div>
          }
        </div>
        {!savedWaps && <p>Please login to see your websites!</p>}
        {savedWaps && !savedWaps.length && (
          <p>You havent created websites yet</p>
        )}
        {currWap && (
          <section className='dashboard-container'>
            <DashboardPreview
              key={currWap._id}
              wap={currWap}
              dailyConversionRate={currWap.conversionRate}
              subscribers={currWap.subscribers}
              viewCount={currWap.viewCount}
              onSelectTemplate={onSelectTemplate}
              onDeleteWap={onDeleteWap}
            />
          </section>
        )}
      </section>
    </section>
  )
}
