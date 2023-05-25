import { useEffect, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { tempCartePosts } from "../../helpers/tempCartePosts";
import "./Carte.css";
import { Link } from "react-router-dom";
import { AiOutlineEnter } from "react-icons/ai";

const center = { lat: 50.8503396, lng: 4.3517103 };

const Carte = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyADpk2bOsLjbrvC-M3F-Ojz3AOJJnYUNPI",
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GoogleMap
        center={center}
        zoom={13}
        mapContainerStyle={{ width: "100%", height: "60vh" }}
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: true,
        }}
      >
        {tempCartePosts.map((item, index) => (
          <Marker
            key={index}
            position={{
              lat: item.lat,
              lng: item.lng,
            }}
            onClick={() => setSelected(item)}
          />
        ))}
        {selected && (
          <InfoWindow
            position={{
              lat: selected.lat,
              lng: selected.lng,
            }}
            onCloseClick={() => setSelected(null)}
          >
            <ul>
              <li>
                <p>
                  <span className="textstrong">Adresse du bien: </span>
                  {selected.title}
                </p>
                <p>
                  <span className="textstrong">Propriétaire du bien: </span>
                  {selected.proprietaire}
                </p>
                <p>
                  <span className="textstrong">Fonction: </span>
                  {selected.fonction}
                </p>
                <p>
                  <span className="textstrong">Etat actuel du bien: </span>
                  {selected.etat_actuel}
                </p>
                <p>
                  <span className="textstrong">Collectif occupant: </span>
                  {selected.occupant}
                </p>
                <p>
                  <span className="textstrong">
                    Durée de l'occupation temporaire:{" "}
                  </span>
                  {selected.duree}
                </p>
                <p>
                  <span className="textstrong">
                    Date d'entrée dans le bien:{" "}
                  </span>
                  {selected.date_dentree}
                </p>
                <p>
                  <span className="textstrong">Date de sortie: </span>
                  {selected.date_sortie}
                </p>
                <p>
                  <span className="textstrong">Nombre d'occupants : </span>
                  {selected.nombre}
                </p>
                <p className="info">
                  <Link to="/">{selected.info}</Link>
                  <AiOutlineEnter />
                </p>
              </li>
            </ul>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default Carte;
