import styled from 'styled-components';

const BusNumber = ({ busNumber }: { busNumber: any }) => {
  return <BusNumberStyle>{busNumber}</BusNumberStyle>;
};

export default BusNumber;

const BusNumberStyle = styled.div`
  width: 70px;
`;
