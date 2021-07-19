import KakaoMap from './components/KakaoMap';
import GlobalStyles from './components/styles/GlobalStyles';
import styled from 'styled-components';
import SearchBar from './components/SearhBar';
import StationBox from './components/StationBox';
import Signal from './components/signal';

function App() {
  return (
    <>
      <GlobalStyles />
      <AppStyle>
        <MapStyle>
          <KakaoMap />
        </MapStyle>

        <DisplayStyle>
          <SearchBar />
          <StationBox />
        </DisplayStyle>
        <Signal />
      </AppStyle>
    </>
  );
}

export default App;

const AppStyle = styled.div`
  display: flex;
`;

const MapStyle = styled.div`
  width: 100%;
`;

const DisplayStyle = styled.div`
  margin: 10px;
  border: 1px solid #222;
  border-radius: 16px;
  padding: 30px;
`;
