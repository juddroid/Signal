import Circle from '../common/Circle';

const OrangeCircle = ({ state }: { state: boolean }) => {
  return <Circle color={'orange'} state={state}></Circle>;
};

export default OrangeCircle;
