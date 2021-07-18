import { useState, useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { stationListState, selectedStationState } from '../Recoil';
import xml2js from 'xml2js';

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
  const [selectedStation, setSelectedStation] =
    useRecoilState(selectedStationState);

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
        content: `<div>${el.stationNm}</div>`,
      };
    });
    console.log('stationList', stationList);
    console.log('markerList', markerList);

    const getArrivalBusInfoList = async (id: number) => {
      const base = `/api/rest/stationinfo/getStationByUid`;
      const serviceKey = `serviceKey=${process.env.REACT_APP_BUS_API_KEY}`;
      const arsId = `&arsId=${id}`;
      const queryParams = `?${serviceKey}${arsId}`;
      const url = base + queryParams;

      const xmlData = await fetch(url).then((res) => res.text());
      const jsonData = await xml2js.parseStringPromise(xmlData);
      console.log(jsonData);
      const busInfoList = await jsonData.ServiceResult.msgBody[0].itemList.map(
        (el: any) => {
          return {
            rtNm: el.rtNm[0],
            arrmsg1: el.arrmsg1[0],
            arrmsg2: el.arrmsg2[0],
            arrmsgSec1: el.arrmsgSec1[0],
            arrmsgSec2: el.arrmsgSec2[0],
          };
        }
      );

      return busInfoList;
    };

    if (markerList) {
      for (let i = 0; i < markerList.length; i++) {
        let marker = new kakao.maps.Marker({
          map: map,
          position: markerList[i].latlng,
          title: markerList[i].title,
        });

        let infoWindow = new kakao.maps.InfoWindow({
          content: markerList[i].content,
        });

        kakao.maps.event.addListener(marker, 'mouseover', () =>
          infoWindow.open(map, marker)
        );
        kakao.maps.event.addListener(marker, 'mouseout', () =>
          infoWindow.close()
        );
        kakao.maps.event.addListener(marker, 'click', async () => {
          const busInfoList = await getArrivalBusInfoList(
            stationList[i].arsId[0]
          );
          console.log(busInfoList);
          setSelectedStation({
            title: markerList[i].title,
            busInfoList: busInfoList,
          });
        });

        marker.setMap(map);
      }
    }
  }, [position.lat, position.lng, stationList]);

  return <div id="map" style={{ width: '100%', height: '1000px' }}></div>;
};

export default KakaoMap;
