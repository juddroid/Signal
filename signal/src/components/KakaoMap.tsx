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

    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(position.lat, position.lng),
      level: 3,
    };
    var map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '1000px' }}></div>
    </div>
  );
};

export default KakaoMap;
