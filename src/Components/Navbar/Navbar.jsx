import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import { BsSearch } from 'react-icons/Bs';



const Navbar = () => {
    const { user, LogOutUser } = useContext(authContext);
    console.log(user)

    const logOutUser = () => {
        LogOutUser()
            .then(result => { })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'><li><a>Home</a></li></Link>
                        <Link to='/collage'><li><a>Colleges</a></li></Link>
                        <Link to='/admission'><li><a>Admission</a></li></Link>
                        <Link to='/myCollage'><li><a>My College</a></li></Link>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl font-serif"> College booking</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to='/'><li><a>Home</a></li></Link>
                    <Link to='collage'><li><a>Colleges</a></li></Link>
                    <Link to='/admission'><li><a>Admission</a></li></Link>
                    <Link to='/myCollage'><li><a>My College</a></li></Link>
                </ul>
            </div>
            <div className="form-control navbar-end">
                <div className="flex gap-2 items-center">
                    <div className="flex items-center gap-2 relative">
                        <button className="absolute right-5"><BsSearch /></button>
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    {
                        user && <Link to='/profile'><img title={user?.displayName} className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" /></Link>
                    }
                </div>
            </div>

            {
                user ?
                    <button onClick={() => logOutUser()} className="w-36 px-5 py-2.5 relative rounded group font-medium text-white  inline-block">
                        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                        <span className="relative">LogOut</span>
                    </button>
                    :
                    <Link to='/logIn'>
                        <button className="w-36 px-5 py-2.5 relative rounded group font-medium text-white  inline-block">
                            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                            <span className="relative">LogIn</span>
                        </button>
                    </Link>
            }
        </div>
    );
};

export default Navbar;