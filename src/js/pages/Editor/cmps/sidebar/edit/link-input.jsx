import { useEffect, useState } from 'react'
import { updateCmp } from '../../../../../store/wap/wap.action'
import { useDispatch } from 'react-redux'

export function LinkInput({ cmp }) {
  const [url, setUrl] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    setUrl(cmp.info.link || '')
  }, [])

  const onHandleChange = (ev) => {
    setUrl(ev.target.value)
    cmp.info.link = ev.target.value
    dispatch(updateCmp(cmp))
  }

  return (
    <input
      type='text'
      value={url}
      placeholder='Enter URL to make it linkable'
      onChange={onHandleChange}
    />
  )
}
