import { useState } from 'react'

export function WapNameInput({ submitWapName }) {
  const [wapName, setWapName] = useState('')

  const handleInput = (ev) => {
    setWapName(ev.target.value)
  }

  const handleNameSubmit = () => {
    submitWapName(wapName)
  }

  return (
    <div className="modal">
      <div className="wap-name-input">
        <h2>Please enter a name for your site</h2>
        <form onSubmit={handleNameSubmit}>
          <input onChange={handleInput} type="text" value={wapName} placeholder="Enter name here..." />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
