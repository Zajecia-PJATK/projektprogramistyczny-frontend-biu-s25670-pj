import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

const Navbar = () => {
    const navList = (
        <ul className="flex space-x-5 text-white font-medium text-md px-5 ">
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/allproduct'}>All Product</Link>
            </li>
            <li>
                <Link to={'/signup'}>Sign Up</Link>
            </li>
            <li>
                <Link to={'/user-dashboard'}>Mateusz</Link>
            </li>
            <li>
                <Link to={'/admin-dashboard'}>Admin</Link> {/* Admin Dashboard */}
            </li>
            {/* logout */}
            {/* <li>
            </li> */}
            <li>
                <Link to={'/cart'}>
                Cart (0)
                </Link>
            </li>
        </ul>
    )
    return (
        <nav className="bg-black sticky top-0 px-5">
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                    <h2 className=" font-bold text-white text-2xl text-center">AirStore</h2>
                    </Link>
                </div>

                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;