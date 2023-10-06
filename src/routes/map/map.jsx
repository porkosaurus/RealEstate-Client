import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding'
import './map.scss'
import { useParams } from 'react-router-dom';

const Map = () => {
  const { searchQuery } = useParams();
  const [searchQueryState, setSearchQueryState] = useState(searchQuery || '');
  const [properties, setProperties] = useState([])
  mapboxgl.accessToken = "pk.eyJ1IjoiY29ubm9ybmVocnVqdW1hbiIsImEiOiJjbG05cTg0eTUwamNmM2lzNTN4Z3A3anpwIn0.VMNovs5HmB85axGdOch3tA"
  const mapRef = useRef(null);
  const geocoder = mbxGeocoding({accessToken: mapboxgl.accessToken});
  
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (!dataFetched) {
      fetch("https://sleepy-plateau-40750-571c566f4d78.herokuapp.com/properties")
        .then((res) => res.json())
        .then((data) => {
          setProperties(data);
          setDataFetched(true);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [dataFetched]);
  


  const handleSearch = async () => {
    const geoData = await geocoder.forwardGeocode({
      query: searchQueryState,
      limit: 1
  }).send()
    const location = geoData.body.features[0].geometry.coordinates
    if (mapRef.current) {
      mapRef.current.easeTo({
        center: location,
        zoom: 10
      });
    }
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    handleSearch();
  };

    useEffect(() => {
      if (searchQuery) {
        handleSearch();
      }

      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-103.5917, 40.6699],
        zoom: 3,
      });

      mapRef.current = map;
  
      map.on('load', () => {
        map.addSource('earthquakes', {
          type: 'geojson',
          data:  properties,
          cluster: true,
          clusterMaxZoom: 14,
          clusterRadius: 50,
        });
  
        map.addLayer({
          id: 'clusters',
          type: 'circle',
          source: 'earthquakes',
          filter: ['has', 'point_count'],
          paint: {
            'circle-color': [
              'step',
              ['get', 'point_count'],
              '#51bbd6',
              100,
              '#f1f075',
              750,
              '#f28cb1',
            ],
            'circle-radius': [
              'step',
              ['get', 'point_count'],
              20,
              100,
              30,
              750,
              40,
            ],
          },
        });
  
        map.addLayer({
          id: 'cluster-count',
          type: 'symbol',
          source: 'earthquakes',
          filter: ['has', 'point_count'],
          layout: {
            'text-field': ['get', 'point_count_abbreviated'],
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12,
          },
        });
  
        map.addLayer({
          id: 'unclustered-point',
          type: 'circle',
          source: 'earthquakes',
          filter: ['!', ['has', 'point_count']],
          paint: {
            'circle-color': '#11b4da',
            'circle-radius': 4,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff',
          },
        });
  
        map.on('click', 'clusters', (e) => {
          const features = map.queryRenderedFeatures(e.point, {
            layers: ['clusters'],
          });
          const clusterId = features[0].properties.cluster_id;
          map.getSource('earthquakes').getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) return;
            map.easeTo({
              center: features[0].geometry.coordinates,
              zoom: zoom,
            });
          });
        });
  
        map.on('click', 'unclustered-point', (e) => {
          const coordinates = e.features[0].geometry.coordinates.slice();
          console.log(e.features[0].properties)
          const property_name = e.features[0].properties.property_name;
          const property_address = e.features[0].properties.property_address;
          const property_bedrooms = e.features[0].properties.bedrooms;
          const property_bathrooms = e.features[0].properties.bathrooms;
          const image_url = e.features[0].properties.image_url;
    
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
    
         const popup = new mapboxgl.Popup({
            closeButton: false, 
            closeOnClick: true, 
          })
            .setLngLat(coordinates)
            .setHTML(`<div class="map-popup">
                        <h1 class="map-price absolute">$1400/month</h1>
                        <img class="map-image" src=${image_url}/>
                        <h1 class="map-property-name">${property_name}</h1>
                        <h2 class="map-property-address"><i class="fa-solid fa-location-dot"></i>${property_address}</h2>
                        <div class="bedrooms-and-bathrooms">
                        <h4 class="bedrooms"><i class="fa-solid fa-bed"></i>${property_bedrooms} Bedrooms</h4>
                        <h4 class="bathrooms"><i class="fa-solid fa-shower"></i>${property_bathrooms} Bathrooms</h4>
                        </div>
                        <button class="contact-buttons">Contact Agent</button>

                      </div>`)
            .addTo(map);


    

        });
  
        map.on('mouseenter', 'clusters', () => {
          map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', 'clusters', () => {
          map.getCanvas().style.cursor = '';
        });
      });

      return () => {
        // Cleanup code (e.g., remove map, event listeners)
        map.remove();
      };
    }, [properties]);

  return (
    <div>
      <form action="" className='map-form' onSubmit={handleSubmitSearch}>
      <input
      className='map-input'
        type="text"
        placeholder="Search for location to find houses near you..."
        value={searchQueryState}
        onChange={(e) => setSearchQueryState(e.target.value)}
      />
      <button id='map-search-button' onClick={handleSearch}>Search</button>
      </form>

      <div id="map" style={{position: 'absolute', top: 0, bottom: 0 }} />
    </div>
  );
};

export default Map;