import { FormEditPreview } from './form-edit-preview'
import { useDispatch } from 'react-redux'
import { saveToHistory, updateCmp } from '../../../../../store/wap/wap.action'
export function FormEdit({ cmp }) {
  const dispatch = useDispatch()

  const updateForm = (fieldLabel, idx) => {
    dispatch(saveToHistory())

    cmp.info.formFields[idx].label = fieldLabel
    cmp.info.formFields[idx].name = fieldLabel.split(' ').join('')
    cmp.info.formFields[idx].placeholder = `Enter ${fieldLabel}`
    dispatch(updateCmp(cmp))
  }

  const deleteField = (idx) => {
    dispatch(saveToHistory())

    cmp.info.formFields.splice(idx, 1)
    dispatch(updateCmp(cmp))
  }

  const addField = () => {
    dispatch(saveToHistory())

    cmp.info.formFields.push({ label: '', name: '', placeholder: '' })
    dispatch(updateCmp(cmp))
  }

  return (
    <div className="form-edit-list">
      <p className="instructions">Enter the names of the fields</p>
      {cmp.info.formFields.map((field, idx) => (
        <FormEditPreview key={idx} deleteField={deleteField} updateForm={updateForm} fieldInfo={field} idx={idx} />
      ))}
      <button onClick={addField}>Add Field</button>
    </div>
  )
}
