import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <h1>Hello Home</h1>
      <div>
        <Link to="/solution-1">Solution 1 </Link>
        <Link style={{marginLeft:10}} to="/solution-2">Solution 2 </Link>
      </div>
    </section>
  );
};

export default About;