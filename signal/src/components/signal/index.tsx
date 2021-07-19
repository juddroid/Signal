import RedCircle from '../signal/RedCircle';
import OrangeCircle from '../signal/OrangeCircle';
import GreenCircle from '../signal/GreenCircle';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { signalState } from '../../Recoil';

const Signal = () => {
  const signal = useRecoilValue(signalState);

  return (
    <SignalStyle>
      <RedCircle state={signal.red} />
      <OrangeCircle state={signal.orange} />
      <GreenCircle state={signal.green} />
    </SignalStyle>
  );
};

export default Signal;

const SignalStyle = styled.div`
  width: 300px;
  height: fit-content;
  border: 1px solid #222;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  background: #222;
  border-radius: 16px;
  margin: 10px;
  margin-left: 0px;
`;
