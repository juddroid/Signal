import Circle from '../common/Circle';

const GreenCircle = ({ state }: { state: boolean }) => {
  return <Circle color={'green'} state={state}></Circle>;
};

export default GreenCircle;
