import styled from 'styled-components';

const BusList = () => {
  return (
    <BusListStyle>
      <BusNameStyle>Bus Name</BusNameStyle>
    </BusListStyle>
  );
};

export default BusList;

const BusListStyle = styled.div``;

const BusNameStyle = styled.div`
  padding: 5px 15px;

  :first-child {
    padding-top: 15px;
  }
`;
