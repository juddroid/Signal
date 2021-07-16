import styled from 'styled-components';

const Circle = ({ color }: { color: string }) => {
  return <CircleStyle {...{ color }}></CircleStyle>;
};

export default Circle;

const CircleStyle = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid ${({ color }) => color};
  border-radius: 50%;
  background: ${({ color }) => color};
`;
