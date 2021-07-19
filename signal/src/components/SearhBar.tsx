import styled from 'styled-components';
import SearchBox from './SearchBox';

const SearchBar = () => {
  return (
    <>
      <SearchBarStyle>
        <input placeholder="가까운 정류장 찾기" />
        <div>Search</div>
      </SearchBarStyle>
      <SearchBox />
    </>
  );
};

export default SearchBar;

const SearchBarStyle = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  border: 1px solid #222;
  margin-bottom: 15px;

  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    padding: 5px 15px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
`;
