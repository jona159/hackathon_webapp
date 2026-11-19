import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet'
import LocateButton from './LocateButton'

const venn: [number, number] = [52.184758, 7.4545265]
const rathaus: [number, number] = [52.1736021, 7.5291888]
const stroetmannsFabrik: [number, number] = [52.1718311, 7.528199]
const hofDeitmar: [number, number] = [52.1715899, 7.5314948]
const stadtpark: [number, number] = [52.1577202, 7.5411823]

const trip = [venn, rathaus, stroetmannsFabrik, hofDeitmar, stadtpark]

function App() {
  return (
    <main style={{ padding: '0 16px 24px' }}>
      <h1>Entdecke Emsdetten</h1>
      <p>Klicke auf die Marker oder auf das Standortsymbol rechts oben in der Karte.</p>

      <MapContainer
        center={[52.172, 7.5]}
        zoom={13}
        style={{ height: '70vh', width: '100%', marginTop: '16px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocateButton />

        <Polyline positions={trip} pathOptions={{ color: '#c62828', weight: 4 }} />

        <Marker position={rathaus}>
          <Popup>
            <strong>2. Rathaus Emsdetten</strong>
            <br />
            Hier sitzt die Stadtverwaltung, direkt am Marktplatz.
          </Popup>
        </Marker>

        <Marker position={stroetmannsFabrik}>
          <Popup>
            <strong>3. Stroetmanns Fabrik</strong>
            <br />
            Die ehemalige Fabrik ist heute ein Ort für Kultur und Veranstaltungen.
          </Popup>
        </Marker>

        <Marker position={hofDeitmar}>
          <Popup>
            <strong>4. Hof Deitmar</strong>
            <br />
            In dieser Parkanlage gibt es Museen, einen Spielplatz und eine Konzertmuschel.
          </Popup>
        </Marker>

        <Marker position={stadtpark}>
          <Popup>
            <strong>5. Stadtpark Emsdetten</strong>
            <br />
            Ein Park mit Tieren, Ententeich, Spielplätzen und Barfußpfad.
          </Popup>
        </Marker>

        <Marker position={venn}>
          <Popup>
            <strong>1. Emsdettener Venn</strong>
            <br />
            Das Naturschutzgebiet schützt ein Hochmoor und lässt sich auf Lehrpfaden entdecken.
          </Popup>
        </Marker>
      </MapContainer>
    </main>
  )
}

export default App
