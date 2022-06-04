import React from 'react'
import SaveIcon from '@mui/icons-material/Save'
import CloudDoneIcon from '@mui/icons-material/CloudDone'
import GroupsIcon from '@mui/icons-material/Groups'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { setCollabMode } from '../../../../store/wap/wap.action'
import { toast } from 'react-toastify'

export function SavePublishBtns({ onSaveWap, onPublishWap }) {
  const dispatch = useDispatch()
  const { isCollabMode } = useSelector((storeState) => storeState.wapModule)
  const navigation = useNavigate()

  const onCollab = async () => {
    if (isCollabMode) return
    console.log('im redirecting')
    navigation(`/editor/${uuidv4()}`)

    try {
      await dispatch(setCollabMode())
      await navigator.clipboard.writeText(window.location.href)
      toast.success('Invitation copied to clipboard!')
    } catch (err) {
      toast.error("Couldn't start collaboration mode")
    }
  }

  return (
    <div className="action-btns save-publish">
      <button onClick={onSaveWap}>
        <SaveIcon />
        <span>Save</span>
      </button>
      <button onClick={onPublishWap}>
        <CloudDoneIcon />
        <span>Publish</span>
      </button>
      <button onClick={onCollab}>
        <GroupsIcon />
        <span>Work Together</span>
      </button>
    </div>
  )
}
