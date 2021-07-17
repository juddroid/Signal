import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { stationState } from '../Recoil';
import xml2js from 'xml2js';

const Geolocation = () => {
  const [station, setStation] = useRecoilState(stationState);
  // const base = `/api/rest/arrive/getArrInfoByRouteAll`;
  // const serviceKey = `serviceKey=${process.env.REACT_APP_BUS_API_KEY}`;
  // const stId = `&stId=119000295`;
  // const busRouteId = `&busRouteId=100100029`;
  // const ord = `&ord=48`;
  // const queryParams = `?${serviceKey}${stId}${busRouteId}${ord}`;
  // const url = base + queryParams;

  // const data = useFetch(url, []);
  // console.log(data);
  // const jsonData = parser.parseString(data);

  const getPosition = () => {
    const getNearbyStations = async (pos: any) => {
      const position = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };

      const base = `/api/rest/stationinfo/getStationByPos`;
      const serviceKey = `serviceKey=${process.env.REACT_APP_BUS_API_KEY}`;
      const tmX = `&tmX=${position.lng}`;
      const tmY = `&tmY=${position.lat}`;
      const radius = `&radius=100`;
      const queryParams = `?${serviceKey}${tmX}${tmY}${radius}`;
      const url = base + queryParams;

      const xmlData = await fetch(url).then((res) => res.text());
      const jsonData = await xml2js.parseStringPromise(xmlData);
      setStation(jsonData);
    };

    navigator.geolocation.getCurrentPosition((pos) => getNearbyStations(pos));
  };

  useEffect(() => {
    getPosition();
  }, []);

  console.log(station);

  return (
    <>
      {station && (
        <div>
          가장 가까운 정류장은
          {station.ServiceResult.msgBody[0].itemList[0].stationNm[0]}
          입니다.
        </div>
      )}
    </>
  );
};

export default Geolocation;
