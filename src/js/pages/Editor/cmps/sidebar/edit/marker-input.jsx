import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCmp } from '../../../../../store/wap/wap.action'
import { getGeocodingApi } from '../../../../../services/map.service'

export function MarkerInput({ markers }) {
  const [currMarkers, setCurrMarkers] = useState(markers)
  const [locationName, setlocationName] = useState('')
  const { selectedCmp } = useSelector((storeState) => storeState.wapModule)
  const dispatch = useDispatch()

  const onSubmitMarker = async(ev) => {
    ev.preventDefault()
    let locationInput = ev.target[0].value
    const location = await getGeocodingApi(locationInput)
    const newMarkers = [...currMarkers, {lat: location.lat.toFixed(2),lng: location.lng.toFixed(2),title: locationInput}]
    updateMarkers(newMarkers)
    setlocationName('')
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
          type="text"
          placeholder="Please enter a location.."
          value={locationName}
          onChange={(ev) => setlocationName(ev.target.value)}
          required
        />
        <button>Add marker</button>
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
