import CardRow from "./CardRow";

const Home = () => {
  return (
    <div className="main-container">
      {/* <SearchCardRow artistName="Fontaines DC" /> */}
      <CardRow artistName="Radiohead" />
      <CardRow artistName="Queen" />
      <CardRow artistName="Republic of Loose" />
    </div>
  );
};

export default Home;
