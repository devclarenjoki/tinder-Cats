import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section>
      <h1>Hello Home</h1>
      <div>
        <Link to="/line-graph-solution">Solution 1 (Line Graph)</Link>
        <Link style={{marginLeft:10}} to="/tables-solution">Solution 2 (Posts Tables)</Link>
      </div>
    </section>
  );
};

export default Home;