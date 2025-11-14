import { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";

export default function UbudMap() {
  const mapRef = useRef(null);
  const mapObj = useRef(null);

  useEffect(() => {
    if (!mapObj.current) {
      const ubudCoords = fromLonLat([115.2625, -8.5069]);

      // Marker
      const marker = new Feature({
        geometry: new Point(ubudCoords)
      });

      marker.setStyle(
        new Style({
          image: new Icon({
            src: "https://cdn-icons-png.flaticon.com/512/535/535239.png",
            scale: 0.08,
          })
        })
      );

      // Vector layer for marker
      const vectorLayer = new VectorLayer({
        source: new VectorSource({
          features: [marker]
        })
      });

      // Create map
      mapObj.current = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          vectorLayer,
        ],
        view: new View({
          center: ubudCoords,
          zoom: 14,
        }),
      });
    }
  }, []);
  return (
    <div className="w-full p-4">
      <h2 className="font-[Inter] text-black font-medium text-2xl">
        Where you'll be
      </h2>
      <p className="font-[Mulish] text-base text-black font-medium">
        Meeting point address
      </p>
      <div className="pl-4 mb-4">
      <li className="font-[Mulish]  text-[#6B7280] text-sm">
        Meet your guide inside the west entrance of Altab Ali Park (Whitechapel
        Road). It's opposite the entrance to Aldgate East Tube Station and the
        Whitechapel Gallery. Look for a guide wearing SMT attire and holding a
        red SMT flag
      </li>
      </div>

       {/* Map */}
      <div className="rounded-xl overflow-hidden shadow-lg md:h-[400px] h-[300px]">
        <div ref={mapRef} className="w-full h-full" />
      </div>
    </div>
  );
}
