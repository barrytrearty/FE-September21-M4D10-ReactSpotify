import CardRow from "./CardRow";

const Home = ({ searchResults }) => {
  return (
    <div className="main-container">
      {/* <SearchCardRow artistName="Fontaines DC" /> */}
      {/* {searchResults.length > 0 ? <CardRow artistName={searchResults} /> : ""} */}
      <CardRow artistName="Radiohead" />
      <CardRow artistName="Queen" />
      <CardRow artistName="Republic of Loose" />
    </div>
  );
};

export default Home;
