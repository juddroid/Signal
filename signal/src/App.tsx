import KakaoMap from './components/KakaoMap';
import OrangeCircle from './components/signal/OrangeCircle';
import RedCircle from './components/signal/RedCircle';
import GreenCircle from './components/signal/GreenCircle';

function App() {
  return (
    <div className="App">
      <KakaoMap />
      <RedCircle />
      <OrangeCircle />
      <GreenCircle />
    </div>
  );
}

export default App;
