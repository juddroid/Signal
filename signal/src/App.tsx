import KakaoMap from './components/KakaoMap';
import OrangeCircle from './components/signal/OrangeCircle';
import RedCircle from './components/signal/RedCircle';
import GreenCircle from './components/signal/GreenCircle';
import Geolocation from './components/Geolocation';

function App() {
  return (
    <div className="App">
      <KakaoMap />
      <RedCircle />
      <OrangeCircle />
      <GreenCircle />
      <Geolocation />
    </div>
  );
}

export default App;
