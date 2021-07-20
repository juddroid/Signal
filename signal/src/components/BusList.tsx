import styled from 'styled-components';
import BusNumber from './BusNumber';
import { v4 as uuidv4 } from 'uuid';
import BusArrivalSec from './BusArrivalSec';
import { useRecoilState } from 'recoil';
import { signalState } from '../Recoil';

const BusList = ({ busInfoList }: { busInfoList: any }) => {
  const [signal, setSignal] = useRecoilState(signalState);

  console.log('busInfoList', busInfoList);
  const handleClickListBox = (e: any) => {
    const target = e.currentTarget.id;
    console.log(target);
    console.log('타겟과 List[타겟]의');
    const sig = {
      green: true,
      orange: false,
      red: true,
    };
    setSignal(sig);
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
