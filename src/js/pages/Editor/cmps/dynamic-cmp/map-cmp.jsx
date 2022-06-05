import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'
import { useState } from 'react'

export const MapCmp = ({ cmp, onHoverCmp, selectedCmp, onSelectCmp, displayClass }) => {
  const AnyReactComponent = ({ marker }) => <div className="mapMarker">{marker}</div>

  const [defaultPos, setDefaultPos] = useState({
    lat: 32.109333,
    lng: 34.855499,
  })

  //cmp.info hold markers
  return (
    <section
      style={cmp.style}
      className={`${selectedCmp?.id === cmp.id ? 'main-map-container selected' : 'main-map-container'} ${displayClass} ${cmp.name}`}
      onMouseOut={(ev) => ev.currentTarget.classList.remove('hover')}
      onMouseOver={(ev) => onHoverCmp(ev)}
      onClick={(ev) => onSelectCmp(ev, cmp)}
    >
      <div className="map-container" style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyArNzNzxQ3Vxrf3OSpZq2xhh9WoxopjQQ0' }}
          center={{
            lat: 32.109333,
            lng: 34.855499,
          }}
          defaultZoom={10}
        >
          {cmp.info.markers.map((marker) => (
            <AnyReactComponent key={marker.lat} title={marker.title} lat={marker.lat} lng={marker.lng} marker="📍" />
          ))}
        </GoogleMapReact>
      </div>
    </section>
  )
}
