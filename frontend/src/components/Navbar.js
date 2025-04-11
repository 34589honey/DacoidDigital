import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Link Dashboard</h1>
      <div className="space-x-4">
        <Link to="/">Dashboard</Link>
        <Link to="/create">Create Link</Link>
        <Link to="/login">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
