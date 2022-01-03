import { Link } from "react-router-dom";
const Services = () => {
  return (
    <section>
      <h1>Hello Home</h1>
      <div>
        <Link to="/pet-checkup">Pet Checkup</Link>
        <Link style={{marginLeft:10}} to="/pet-food">Pet food</Link>
      </div>
    </section>
  );
};

export default Services;