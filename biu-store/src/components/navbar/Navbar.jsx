import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";


const Navbar = () => {
    const navList = (
        <ul className="flex space-x-5 text-white font-medium text-md px-5 ">
            <li>
                <Link to={'/'}>Home</Link>
            </li>
        </ul>
    )
    return (
        <nav className="bg-gray-900 sticky top-0 px-5">
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