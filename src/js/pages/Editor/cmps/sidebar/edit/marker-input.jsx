import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCmp } from '../../../../../store/wap/wap.action'

export function MarkerInput({ markers }) {
  const [currMarkers, setCurrMarkers] = useState(markers)
  const [latInput, setlatInput] = useState('')
  const [lngInput, setlngInput] = useState('')
  const [titleInput, setTitleInput] = useState('')
  const { selectedCmp } = useSelector((storeState) => storeState.wapModule)
  const dispatch = useDispatch()

  const onSubmitMarker = (ev) => {
    ev.preventDefault()
    let lat = +ev.target[0].value
    let lng = +ev.target[1].value
    let title = ev.target[2].value
    const newMarkers = [...currMarkers, {lat,lng,title}]
    updateMarkers(newMarkers)
    setlatInput('')
    setlngInput('')
    setTitleInput('')
  }

  const onDeleteMarker = (idx) => {
    currMarkers.splice(idx, 1)
    updateMarkers(currMarkers)
  }

  const updateMarkers = markers => {
    setCurrMarkers(markers)
    selectedCmp.info.markers = markers
    dispatch(updateCmp(selectedCmp))
  }

  return (
    <section className="marker-container">
      <form className="marker-form-container" onSubmit={onSubmitMarker}>
        <input
          type="number"
          placeholder="Enter lat marker location.."
          value={latInput}
          onChange={(ev) => setlatInput(ev.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter lng marker location.."
          value={lngInput}
          onChange={(ev) => setlngInput(ev.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter marker title.."
          value={titleInput}
          onChange={(ev) => setTitleInput(ev.target.value)}
          required
        />
        <button>Change marker</button>
      </form>
      {markers.length ? (
        markers.map((marker, index) => (
          <div className="marker-info" key={marker.lat}>
            <span>Latitue: {marker.lat}</span>
            <span>Longitute: {marker.lng}</span>
            <span>Title: {marker.title}</span>
            <button onClick={() => onDeleteMarker(index)}>X</button>
          </div>
        ))
      ) : (
        <></>
      )}
    </section>
  )
}
