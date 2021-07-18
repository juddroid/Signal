import styled from 'styled-components';

const BusNumber = ({ busNumber }: { busNumber: any }) => {
  return <BusNumberStyle>{busNumber}</BusNumberStyle>;
};

export default BusNumber;

const BusNumberStyle = styled.div`
  padding: 5px 15px;

  :first-child {
    padding-top: 15px;
  }
`;
