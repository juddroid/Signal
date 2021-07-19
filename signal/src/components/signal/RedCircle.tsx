import Circle from '../common/Circle';

const RedCircle = ({ state }: { state: boolean }) => {
  return <Circle color={'red'} state={state}></Circle>;
};

export default RedCircle;
