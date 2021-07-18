import styled from 'styled-components';
import BusNumber from './BusNumber';
import { v4 as uuidv4 } from 'uuid';
import BusArrivalSec from './BusArrivalSec';

const BusList = ({ busInfoList }: { busInfoList: any }) => {
  console.log('busInfoList', busInfoList);
  return (
    <BusListStyle>
      {busInfoList &&
        busInfoList.map((busInfo: any) => (
          <BusListBox key={uuidv4()}>
            <BusNumber busNumber={busInfo.rtNm} />
            <BusArrivalSec arrivalSec={busInfo.arrmsg1} />
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

  :first-child {
    padding-top: 15px;
  }
`;
