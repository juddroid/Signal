import styled from 'styled-components';
import BusNumber from './BusNumber';
import { v4 as uuidv4 } from 'uuid';
import BusArrivalSec from './BusArrivalSec';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { signalState, selectedStationState } from '../Recoil';

const BusList = ({ busInfoList }: { busInfoList: any }) => {
  const setSignal = useSetRecoilState(signalState);
  const selectedStation = useRecoilValue(selectedStationState);

  const handleClickListBox = (e: any) => {
    const target = e.currentTarget.id;
    const targetBus = busInfoList.filter((bus: any) => bus.rtNm === target);
    const arrivalTime = targetBus[0].arrmsg1.split('[')[0];

    const getSignal = (time: string) => {
      if (time === '곧 도착' || time === '운행종료') return 'red';
      if (time === '출발대기' || time === '[차고지 출발]') return 'green';
      // 직선거리 약 180m면 도보 2분이 측정되어 있음
      // 100m에 1분 기준으로 하고,
      // 실제 거리는 직선거리의 2배로 해보자.
      // 실제거리 * 2
      // 도보 100m/분
      // 도착시 버스도착예정 시간과의 갭으로 신호 결정

      const DIST_COR = 2;
      const SPEED = {
        walk: 100,
        quick: 80,
        rush: 50,
      };
      const timeRemaining = +time.split('분')[0];
      const dist = +selectedStation?.dist * DIST_COR;
      const userTime = dist / SPEED.walk;

      if (timeRemaining - userTime > 3) return 'green';
      if (timeRemaining - userTime >= 1) return 'orange';
      if (timeRemaining - userTime < 1) return 'red';
    };

    const busSignal = getSignal(arrivalTime);
    console.log(busSignal);

    if (busSignal === 'green') {
      setSignal({
        green: true,
        orange: false,
        red: false,
      });
    } else if (busSignal === 'orange') {
      setSignal({
        green: false,
        orange: true,
        red: false,
      });
    } else if (busSignal === 'red') {
      setSignal({
        green: false,
        orange: false,
        red: true,
      });
    }
  };

  return (
    <BusListStyle>
      {busInfoList &&
        busInfoList.map((busInfo: any) => (
          <BusListBox
            key={uuidv4()}
            id={busInfo.rtNm}
            onClick={handleClickListBox}
          >
            <BusNumber busNumber={busInfo.rtNm} />
            <div>
              <BusArrivalSec arrivalSec={busInfo.arrmsg1} />
              <BusArrivalSec arrivalSec={busInfo.arrmsg2} />
            </div>
          </BusListBox>
        ))}
    </BusListStyle>
  );
};

export default BusList;

const BusListStyle = styled.div``;

const BusListBox = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  cursor: pointer;
  transition: all ease-in-out 0.4s;
  border-radius: 16px;

  :hover {
    background: #222;
    opacity: 0.9;
    color: #fff;
  }
`;
