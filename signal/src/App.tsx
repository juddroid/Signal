import KakaoMap from './components/KakaoMap';
import OrangeCircle from './components/signal/OrangeCircle';
import RedCircle from './components/signal/RedCircle';
import GreenCircle from './components/signal/GreenCircle';
import Geolocation from './components/Geolocation';
import GlobalStyles from './components/styles/GlobalStyles';
import styled from 'styled-components';
import SearchBar from './components/SearhBar';

function App() {
  return (
    <>
      <GlobalStyles />
      <AppStyle>
        <MapStyle>
          <KakaoMap />
        </MapStyle>
        <SignalStyle>
          <SearchBar />
          <RedCircle />
          <OrangeCircle />
          <GreenCircle />
          <Geolocation />
        </SignalStyle>
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

const SignalStyle = styled.div``;
