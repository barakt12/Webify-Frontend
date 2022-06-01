import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { wapService } from '../../../../services/wap-service'
import { useSelector } from 'react-redux'

export function FormCmp({ cmp, onHoverElement, selectedElement, onSelectElement }) {
  const [subscriber, setSubscriber] = useState()
  const location = useLocation()
  const { wap } = useSelector((storeState) => storeState.wapModule)

  useEffect(() => {
    const { formFields } = cmp.info
    const initialState = {}
    formFields.map((field) => (initialState[field.name] = ''))
    setSubscriber(initialState)
  }, [])

  const onHandleChange = (ev) => {
    const value = ev.target.value
    const field = ev.target.name
    setSubscriber((prevState) => ({ ...prevState, [field]: value }))
  }

  const onSubmitForm = async (ev) => {
    ev.preventDefault()
    // if (location.pathname === '/preview' || location.pathname === '/editor') return
    await wapService.addSubscriberDetails(wap._id, subscriber)
    console.log('done')
  }

  return (
    <form
      style={cmp.style}
      className={`${selectedElement?.id === cmp.id ? 'selected' : ''} ${cmp.name}`}
      onMouseOut={(ev) => ev.target.classList.remove('hover')}
      onMouseOver={(ev) => onHoverElement(ev)}
      onClick={(ev) => onSelectElement(ev, cmp)}
      onSubmit={onSubmitForm}
    >
      {cmp.info.formFields.map((field, idx) => {
        if (field.type === 'textarea')
          return (
            <label key={idx}>
              {field.label}
              <textarea name={field.name} onChange={onHandleChange} rows={field.rows} placeholder={field.placeholder}></textarea>
            </label>
          )

        return (
          <label key={idx}>
            {field.label}
            <input type={field.input} onChange={onHandleChange} name={field.name} placeholder={field.placeholder}></input>
          </label>
        )
      })}
      <button>send</button>
    </form>
  )
}
