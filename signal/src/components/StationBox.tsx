import styled from 'styled-components';
import BusList from './BusList';
import { useRecoilValue } from 'recoil';
import { selectedStationState } from '../Recoil';

const StationBox = () => {
  const selectedStation = useRecoilValue(selectedStationState);

  console.log(selectedStation);
  return (
    <StationBoxStyle>
      <StationNameStyle>
        {selectedStation && selectedStation.title}
      </StationNameStyle>

      {selectedStation && <BusList busInfoList={selectedStation.busInfoList} />}
    </StationBoxStyle>
  );
};

export default StationBox;

const StationBoxStyle = styled.div``;

const StationNameStyle = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid #222;
  padding: 5px 15px;
  margin-top: 15px;
  margin-bottom: 10px;
`;
