import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { wapService } from '../../../../services/wap-service'
import { useParams } from 'react-router'

export function FormCmp({ cmp, onHoverCmp, selectedCmp, onSelectCmp, displayClass }) {
  const [subscriber, setSubscriber] = useState()
  const location = useLocation()
  const params = useParams()
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
    if (location.pathname.includes('/preview') || location.pathname === '/editor') return
    await wapService.addSubscriberDetails(params.wapId, subscriber)
    console.log('done')
  }

  return (
    <form
      style={cmp.style}
      className={`${selectedCmp?.id === cmp.id ? 'selected' : ''} ${displayClass} ${cmp.name}`}
      onMouseOut={(ev) => ev.target.classList.remove('hover')}
      onMouseOver={(ev) => onHoverCmp(ev)}
      onClick={(ev) => onSelectCmp(ev, cmp)}
      onSubmit={onSubmitForm}
    >
      {cmp.info.formFields.map((field, idx) => {
        if (field.type === 'textarea')
          return (
            <label key={idx}>
              {field.label || !location.pathname.includes('/preview') || !location.pathname.includes('/publish') ? field.label : 'Edit me in the side bar'}
              <textarea name={field.name} onChange={onHandleChange} rows={field.rows} placeholder={field.placeholder}></textarea>
            </label>
          )

        return (
          <label key={idx}>
            {field.label || location.pathname.includes('/preview') || !location.pathname.includes('/publish') ? field.label : 'Edit me in the side bar'}
            <input type={field.input} onChange={onHandleChange} name={field.name} placeholder={field.placeholder}></input>
          </label>
        )
      })}
      <button>send</button>
    </form>
  )
}
