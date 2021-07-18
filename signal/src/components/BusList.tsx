import styled from 'styled-components';
import BusNumber from './BusNumber';
import { v4 as uuidv4 } from 'uuid';

const BusList = ({ busList }: { busList: any }) => {
  console.log('busList', busList);
  return (
    <BusListStyle>
      {busList &&
        busList.map((number: string) => (
          <BusNumber key={uuidv4()} busNumber={number} />
        ))}
    </BusListStyle>
  );
};

export default BusList;

const BusListStyle = styled.div``;
