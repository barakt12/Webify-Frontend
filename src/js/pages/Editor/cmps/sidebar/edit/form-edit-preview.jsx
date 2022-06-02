import { useEffect, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear'
export function FormEditPreview({ fieldInfo, idx, updateForm, deleteField }) {
  const [field, setField] = useState(fieldInfo)
  useEffect(() => {
    setField(fieldInfo)
  }, [fieldInfo])

  const handleChange = (ev) => {
    setField(ev.target.value)
    updateForm(ev.target.value, idx)
  }

  const onDeleteField = () => {
    deleteField(idx)
  }

  return (
    <div className="preview-container">
      <input type="text" onChange={handleChange} placeholder="Enter field name" value={field?.label} />
      <ClearIcon onClick={onDeleteField} style={{ color: 'tomato', fontSize: '1.7rem' }} />
    </div>
  )
}
