import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    const navList = (
        <ul className="flex space-x-5 text-white font-medium text-md px-5 ">
           {/* Home */}
           <li>
                <Link to={'/'}>Home</Link>
            </li>
            {/* All Product */}
            <li>
                <Link to={'/allproduct'}>All Product</Link>
            </li>
            {/* Signup */}
            {!user ? <li>
                <Link to={'/signup'}>Sign Up</Link>
            </li> : ""}
            {/* Signup */}
            {!user ? <li>
                <Link to={'/login'}>Login</Link>
            </li> : ""}
            {/* User */}
            {user?.role === "user" && <li>
                <Link to={'/user-dashboard'}>{user?.name}</Link>
            </li>}
            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>{user?.name}</Link>
            </li>}
            {/* logout */}
            {user && <li className=" cursor-pointer" onClick={logout}>
                Logout
            </li>}
            {/* Cart */}
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