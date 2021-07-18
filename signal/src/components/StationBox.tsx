import styled from 'styled-components';
import BusList from './BusList';
import { useRecoilValue } from 'recoil';
import { seletedStationState } from '../Recoil';

const StationBox = () => {
  const selectedStation = useRecoilValue(seletedStationState);

  return (
    <StationBoxStyle>
      <StationNameStyle>Station Name</StationNameStyle>
      <BusList />
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
`;
