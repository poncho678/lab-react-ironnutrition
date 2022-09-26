import { Divider, Input } from 'antd';

// Iteration 5
function Search({ userSearchInput, setUserSearchInput }) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={userSearchInput}
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setUserSearchInput(e.target.value);
        }}
      />
    </>
  );
}

export default Search;
