import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { stationListState } from '../Recoil';

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
  const stationList = useRecoilValue(stationListState);

  console.log('map station', stationList);

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

    let markerList = stationList?.map((el: any) => {
      return {
        title: el.stationNm,
        latlng: new kakao.maps.LatLng(el.gpsY[0], el.gpsX[0]),
      };
    });

    console.log('list', markerList);

    if (markerList) {
      for (let i = 0; i < markerList.length; i++) {
        let marker = new kakao.maps.Marker({
          map: map,
          position: markerList[i].latlng,
          title: markerList[i].title,
        });
        marker.setMap(map);
      }
    }
  }, [position.lat, position.lng, stationList]);

  return <div id="map" style={{ width: '100%', height: '1000px' }}></div>;
};

export default KakaoMap;
