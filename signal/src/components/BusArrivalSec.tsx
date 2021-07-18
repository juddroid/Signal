import styled from 'styled-components';

const BusArrivalSec = ({ arrivalSec }: { arrivalSec: any }) => {
  return <BusArrivalSecStyle>{arrivalSec}</BusArrivalSecStyle>;
};

export default BusArrivalSec;

const BusArrivalSecStyle = styled.div`
  padding: 5px 15px;

  :first-child {
    padding-top: 15px;
  }
`;
