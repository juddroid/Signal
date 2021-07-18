import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { stationListState } from '../Recoil';
import { v4 as uuidv4 } from 'uuid';

const SearchBox = () => {
  const stationList = useRecoilValue(stationListState);

  return (
    <SearchBoxStyle>
      {stationList &&
        stationList.map((el: any) => {
          return (
            <SearchBoxListStyle key={uuidv4()}>
              <SearchBoxStationIDStyle>{el.arsId[0]}</SearchBoxStationIDStyle>
              <SearchBoxStationNameStyle>
                {el.stationNm[0]}
              </SearchBoxStationNameStyle>
            </SearchBoxListStyle>
          );
        })}
    </SearchBoxStyle>
  );
};

export default SearchBox;

const SearchBoxStyle = styled.div``;

const SearchBoxListStyle = styled.div`
  display: flex;
  padding: 10px 15px;
  cursor: pointer;

  :first-child {
    padding-top: 15px;
  }
`;

const SearchBoxStationIDStyle = styled.div`
  width: 50px;
`;

const SearchBoxStationNameStyle = styled.div`
  padding-left: 15px;
`;
