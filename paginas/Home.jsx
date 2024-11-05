// Home.jsx
import { Link } from 'react-router-dom';

const Home =() =>{
  return (
    <>
      <h1>Portfolio Developer</h1>
      <p>Bienvenidos a mi webpage</p>
      <nav className='menu'>
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/resume"}>Resume</Link>
      </nav>
    </>
  );
}

export default Home;