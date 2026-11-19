import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import { LocateControl } from 'leaflet.locatecontrol'
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css'

function LocateButton() {
  const map = useMap()

  useEffect(() => {
    const control = new LocateControl({
      position: 'topright',
      locateOptions: { watch: false },
      strings: {
        title: 'Meinen Standort zeigen',
        popup: 'Du bist ungefähr hier.',
      },
    }).addTo(map)

    return () => {
      control.remove()
    }
  }, [map])

  return null
}

export default LocateButton
