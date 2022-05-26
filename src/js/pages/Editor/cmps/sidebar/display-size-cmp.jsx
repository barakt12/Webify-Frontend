import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor'
import TabletMacIcon from '@mui/icons-material/TabletMac'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import { setDisplaySize } from '../../../../store/wap/wap.action'
import { useDispatch } from 'react-redux'

export function DisplaySize() {
  const dispatch = useDispatch()

  const onSetDisplaySize = (size) => {
    dispatch(setDisplaySize(size))
  }

  return (
    <div className="display-icons-container">
      <div className="ico" onClick={() => onSetDisplaySize('100%')}>
        <ScreenshotMonitorIcon />
      </div>
      <div className="ico" onClick={() => onSetDisplaySize('720px')}>
        <TabletMacIcon />
      </div>
      <div className="ico" onClick={() => onSetDisplaySize('400px')}>
        <PhoneIphoneIcon />
      </div>
    </div>
  )
}
