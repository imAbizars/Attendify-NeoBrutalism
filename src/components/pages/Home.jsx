import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

export default function Home() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Browser tidak mendukung GPS");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        setError("Izin lokasi tidak diberikan");
      }
    );
  }, []);

  return (
    <section className="p-4 border border-black min-h-screen w-full">
      <h1 className="text-4xl mb-4">Selamat Pagi Abizar</h1>

      {!location && !error && <p>Meminta izin lokasi...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {location && (
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={20}
          style={{ height: "300px", width: "100%",zIndex:"1" }}
        >
          <TileLayer
            attribution="© OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[location.lat, location.lng]} />
          <Circle
            center={[location.lat, location.lng]}
            radius={50}
          />
        </MapContainer>
      )}

      <div className="border border-black p-2 mt-4">
        <h4>Absen berikutnya dimulai pukul 08:00</h4>
      </div>
    </section>
  );
}
