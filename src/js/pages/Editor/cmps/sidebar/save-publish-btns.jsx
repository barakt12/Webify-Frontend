import React from 'react'
import SaveIcon from '@mui/icons-material/Save'
import CloudDoneIcon from '@mui/icons-material/CloudDone'
import GroupsIcon from '@mui/icons-material/Groups';
import { useNavigate } from 'react-router';
import { useSelector,useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'
import { setCollabMode } from '../../../../store/wap/wap.action';

export function SavePublishBtns({ onSaveWap,onPublishWap }) {

  const dispatch = useDispatch()
  const {isCollabMode} = useSelector((storeState) => storeState.wapModule) 
  const navigation = useNavigate()

  const onCollab = () => {
    if(isCollabMode) return
    console.log('work together')
    navigation(`/editor/${uuidv4()}`)
    dispatch(setCollabMode())
  }

  return (
    <div className="action-btns save-publish">
      <button onClick={onSaveWap}>
        <SaveIcon />
        <span>Save</span>
      </button>
      <button>
        <CloudDoneIcon onClick={onPublishWap} />
        <span>Publish</span>
      </button>
      <button onClick={onCollab}>
        <GroupsIcon />
        <span>Work Together</span>
      </button>
    </div>
  )
}
