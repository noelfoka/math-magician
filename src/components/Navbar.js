import { Outlet, Link } from 'react-router-dom';

const Navbar = () => (
  <>

    <nav className="navbar">
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <Link to="/math-magicians">Home</Link>
        </li>
        <li>
          <Link to="/math-magicians/Calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/math-magicians/Quote">Quote</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
);

export default Navbar;
