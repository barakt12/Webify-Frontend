import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateCmp } from '../../../../../store/wap/wap.action'

export function ImageUrl({ cmp }) {
  const [url, setUrl] = useState(cmp.info.imgUrl)
  const dispatch = useDispatch()

  useEffect(() => {
    setUrl(cmp.info.imgUrl)
  }, [cmp])

  const onChangeUrl = (ev) => {
    setUrl(ev.target.value)
    cmp.info.imgUrl = ev.target.value

    dispatch(updateCmp(cmp))
  }

  return <input type="text" placeholder="Enter image url.." value={url} onChange={onChangeUrl} />
}
