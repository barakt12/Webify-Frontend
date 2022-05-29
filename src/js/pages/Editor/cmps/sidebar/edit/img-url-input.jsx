import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { wapService } from '../../../../../services/wap-service'
import { setWap } from '../../../../../store/wap/wap.action'

export function ImageUrl({ cmp }) {
  const [url, setUrl] = useState(cmp.info.imgUrl)
  const { wap } = useSelector((storeState) => storeState.wapModule)
  const dispatch = useDispatch()

  useEffect(() => {
    setUrl(cmp.info.imgUrl)
  }, [cmp])

  const onChangeUrl = (ev) => {
    setUrl(ev.target.value)
    cmp.info.imgUrl = ev.target.value
    wapService.updateCmp(wap, cmp)
    dispatch(setWap(wap))
  }

  return (
    <input
      type='text'
      placeholder='Enter image url..'
      value={url}
      onChange={onChangeUrl}
    />
  )
}
