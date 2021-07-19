import RedCircle from '../signal/RedCircle';
import OrangeCircle from '../signal/OrangeCircle';
import GreenCircle from '../signal/GreenCircle';
import styled from 'styled-components';

const Signal = () => {
  return (
    <SignalStyle>
      <RedCircle />
      <OrangeCircle />
      <GreenCircle />
    </SignalStyle>
  );
};

export default Signal;

const SignalStyle = styled.div`
  width: 300px;
  border: 1px solid #222;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 30px;
  background: #222;
  border-radius: 16px;
  margin: 10px;
`;
