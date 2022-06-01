import React from 'react'
import SaveIcon from '@mui/icons-material/Save'

import CloudDoneIcon from '@mui/icons-material/CloudDone'

export function SavePublishBtns({ onSaveWap, onPublishWap }) {
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
    </div>
  )
}
