import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveToHistory, updateCmp } from '../../../../../store/wap/wap.action'

export function VideoInput({ cmp }) {
  const [url, setUrl] = useState(cmp.info.videoUrl)
  const dispatch = useDispatch()

  useEffect(() => {
    setUrl(cmp.info.videoUrl)
  }, [cmp])

  const onChangeUrl = (ev) => {
    dispatch(saveToHistory())
    setUrl(ev.target.value)
    cmp.info.videoUrl = ev.target.value
    dispatch(updateCmp(cmp))
  }

  return (
    <div className="video-input-container">
      <input type="text" placeholder="Enter video url.." value={url} onChange={onChangeUrl} />
    </div>
  )
}
