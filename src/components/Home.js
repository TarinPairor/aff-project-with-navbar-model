import lake from "../images/painting-mountain-lake-with-mountain-background_188544-9126.avif";

const Home = () => {
  return (
    <div className="cards" style={{ backgroundImage: `url(${lake})` }}>
      <h1>Hello, welcome to my humble abode.</h1>
      <p>This is trendy pendy stuff. Wowzers!</p>
    </div>
  );
};

export default Home;
