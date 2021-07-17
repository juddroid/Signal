import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { stationListState, arrivalBusInfoListState } from '../Recoil';
import xml2js from 'xml2js';

const Geolocation = () => {
  const [stationList, setStation] = useRecoilState(stationListState);
  const [arrivalBusInfoList, setArrivalBusInfoList] = useRecoilState(
    arrivalBusInfoListState
  );
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
      const radius = `&radius=200`;
      const queryParams = `?${serviceKey}${tmX}${tmY}${radius}`;
      const url = base + queryParams;

      const xmlData = await fetch(url).then((res) => res.text());
      const jsonData = await xml2js.parseStringPromise(xmlData);
      const stationList = await jsonData.ServiceResult.msgBody[0].itemList;
      setStation(stationList);
    };

    navigator.geolocation.getCurrentPosition((pos) => getNearbyStations(pos));
  };

  const getArrivalBusInfoList = async (id: number) => {
    const base = `/api/rest/stationinfo/getStationByUid`;
    const serviceKey = `serviceKey=${process.env.REACT_APP_BUS_API_KEY}`;
    const arsId = `&arsId=${id}`;
    const queryParams = `?${serviceKey}${arsId}`;
    const url = base + queryParams;

    const xmlData = await fetch(url).then((res) => res.text());
    const jsonData = await xml2js.parseStringPromise(xmlData);
    const busList = await jsonData.ServiceResult.msgBody[0].itemList.map(
      (el: any) => el.rtNm[0]
    );
    setArrivalBusInfoList(busList);
  };

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    stationList && getArrivalBusInfoList(stationList[0].arsId[0]);
  }, [stationList]);

  console.log('stationList', stationList);
  console.log('bus', arrivalBusInfoList);

  return (
    <>
      {stationList && (
        <>
          <div>
            가장 가까운 정류장은
            {stationList[0].stationNm[0]}
            입니다.
          </div>
          <div>
            정류장 arsId는
            {stationList[0].arsId[0]}
            입니다.
          </div>
        </>
      )}
    </>
  );
};

export default Geolocation;
