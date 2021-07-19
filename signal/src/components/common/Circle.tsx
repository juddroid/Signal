import styled from 'styled-components';

const Circle = ({ color, state }: { color: string; state: boolean }) => {
  if (!state) color = '#fff';
  return <CircleStyle {...{ color, state }}></CircleStyle>;
};

export default Circle;

const CircleStyle = styled.div`
  width: 250px;
  height: 250px;
  border: 1px solid ${({ color }) => color};
  border-radius: 50%;
  background: ${({ color }) => color};
  margin: 10px;
`;
