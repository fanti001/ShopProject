import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import { useMemo } from 'react';


const Map = () => {
   const libraries = useMemo(() => ['places'], []);
   const mapCenter = useMemo(
      () => ({ lat: 52.23657549452567, lng: 15.546806964862302 }),
      []
   );
   const mapOptions = useMemo(
      () => ({
         disableDefaultUI: false,
         clickableIcons: true,
         scrollwheel: true,
      }),
      []
   );
   const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
      libraries: libraries,
   });

   if (!isLoaded) {
      return <p>Loading...</p>;
   }



   return (
      <div className="map">
         <div className="map-desc">
            <h4>Jak dolecieć do nas na miotle lub dywanie</h4>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
         </div>
         <div className="map-googlemaps">
            <GoogleMap
               options={mapOptions}
               zoom={14}
               center={mapCenter}
               mapTypeId={google.maps.MapTypeId.ROADMAP}
               mapContainerStyle={{ width: '750px', height: '440px' }}
            >
               <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
            </GoogleMap>
         </div>
      </div>
   );
}

export default Map;