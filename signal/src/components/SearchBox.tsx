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
  align-items: center;
  padding: 10px 15px;
  cursor: pointer;
  transition: all ease-in-out 0.4s;
  border-radius: 11px;

  :hover {
    background: #222;
    opacity: 0.9;
    color: #fff;
  }
`;

const SearchBoxStationIDStyle = styled.div`
  width: 50px;
`;

const SearchBoxStationNameStyle = styled.div`
  padding-left: 15px;
`;
