
// import { useEffect, useState } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   useMap,
// } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// export type ParcelLocker = {
//   id: string;
//   name: string;
//   address: string;
//   lat: number;
//   lng: number;
//   carrier: string;
// };

// type Props = {
//   carrier: string;
//   selectedLocker: ParcelLocker | null;
//   onSelect: (locker: ParcelLocker) => void;
// };

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

// const defaultIcon = new L.Icon({
//   iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
//   iconRetinaUrl:
//     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
//   shadowUrl:
//     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });

// function MapCenter({ lat, lng }: { lat: number; lng: number }) {
//   const map = useMap();

//   useEffect(() => {
//     map.setView([lat, lng], map.getZoom());
//   }, [map, lat, lng]);

//   return null;
// }

// export default function ParcelLockerMap({
//   carrier,
//   selectedLocker,
//   onSelect,
// }: Props) {
//   const [lockers, setLockers] = useState<ParcelLocker[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const controller = new AbortController();

//     async function loadLockers() {
//       setLoading(true);
//       setError("");
//       setLockers([]);

//       try {
//         const response = await fetch(
//           `${API_URL}/api/lockers?carrier=${encodeURIComponent(carrier)}`,
//           { signal: controller.signal }
//         );

//         if (!response.ok) {
//           throw new Error("Neizdevās ielādēt pakomātus.");
//         }

//         const data = await response.json();
//         setLockers(Array.isArray(data.lockers) ? data.lockers : []);
//       } catch (err) {
//         if (err instanceof Error && err.name !== "AbortError") {
//           setError(err.message);
//         }
//       } finally {
//         if (!controller.signal.aborted) {
//           setLoading(false);
//         }
//       }
//     }

//     if (carrier) loadLockers();

//     return () => controller.abort();
//   }, [carrier]);

//   const center = selectedLocker
//     ? { lat: selectedLocker.lat, lng: selectedLocker.lng }
//     : { lat: 56.9496, lng: 24.1052 };

//   return (
//     <div>
//       <p>Izvēlieties pakomātu kartē:</p>

//       {loading && <p>Ielādē pakomātus...</p>}
//       {error && <p role="alert">{error}</p>}

//       {!loading && !error && lockers.length === 0 && (
//         <p>Šim piegādes pakalpojumu sniedzējam nav pieejamu punktu.</p>
//       )}

//       <MapContainer
//         center={[center.lat, center.lng]}
//         zoom={11}
//         style={{ height: 400, width: "100%", borderRadius: 8 }}
//       >
//         <MapCenter lat={center.lat} lng={center.lng} />

//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {lockers.map((locker) => (
//           <Marker
//             key={locker.id}
//             position={[locker.lat, locker.lng]}
//             icon={defaultIcon}
//             eventHandlers={{
//               click: () => onSelect(locker),
//             }}
//           >
//             <Popup>
//               <strong>{locker.name}</strong>
//               <br />
//               {locker.address}
//               <br />
//               <button type="button" onClick={() => onSelect(locker)}>
//                 Izvēlēties šo pakomātu
//               </button>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>

//       {selectedLocker && (
//         <p>
//           <strong>Izvēlētais punkts:</strong> {selectedLocker.name},{" "}
//           {selectedLocker.address}
//         </p>
//       )}
//     </div>
//   );
// }
