import { DashboardPreview } from './cmps/dashboard-preview'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWap, selectWap } from '../../store/wap/wap.action'
import { loadSavedWaps,updateSavedWap } from '../../store/wap/wap.action'
import { toast } from 'react-toastify'
import DashboardSideMenu from './cmps/dashboard-side-menu'
import { useNavigate } from 'react-router'
import { socketService } from '../../services/socket.service'

export const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {savedWaps} = useSelector((storeState) => storeState.wapModule)
  const {user} = useSelector((storeState) => storeState.userModule)
  const [currWap, setCurrWap] = useState(null)

  useEffect(() => {
    dispatch(loadSavedWaps())
  }, [])

  useEffect(() => {
    if (!savedWaps) return
    console.log('saved waps on dashboard',savedWaps)
    setCurrWap(savedWaps[0])
    socketService.setup()
    socketService.emit('dashboard connection', savedWaps[0]._id)
    socketService.on('dashboard update', (updatedWap) => {
      const wapIdx = savedWaps.findIndex(wap => wap._id === updatedWap._id)
      const updatedWaps = JSON.parse(JSON.stringify(savedWaps))
      updatedWaps[wapIdx] = {...savedWaps[wapIdx], ...updatedWap}
      dispatch(updateSavedWap(updatedWaps))
    })
    return () => {
      socketService.off('dashboard update')
      socketService.terminate()
    }
  }, [savedWaps])

  const onSelectWapToDisplay = (wap) => {
    setCurrWap(wap)
  }

  const onSelectTemplate = (id) => {
    dispatch(selectWap(id))
    navigate('/editor')
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
