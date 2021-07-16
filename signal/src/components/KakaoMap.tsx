import { useState, useEffect } from 'react';

const kakao = (window as any).kakao;

// declare global {
//   interface Window {
//     kakao: any;
//   }
// }

const KakaoMap = () => {
  const [position, setPosition] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    const sucess = (pos: any) => {
      const position = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };
      setPosition(position);
    };

    navigator.geolocation.getCurrentPosition((pos) => sucess(pos));

    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(position.lat, position.lng),
      level: 3,
    };
    let map = new kakao.maps.Map(container, options);

    let markerPosition = new kakao.maps.LatLng(position.lat, position.lng);
    let marker = new kakao.maps.Marker({ position: markerPosition });

    marker.setMap(map);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '1000px' }}></div>
    </div>
  );
};

export default KakaoMap;
