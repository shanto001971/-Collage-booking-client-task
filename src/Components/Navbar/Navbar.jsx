import { Link } from "react-router-dom";


const Navbar = () => {
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
                        <li><a>My College</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl font-serif"> College booking</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to='/'><li><a>Home</a></li></Link>
                    <Link to='collage'><li><a>Colleges</a></li></Link>
                    <Link to='/admission'><li><a>Admission</a></li></Link>
                    <li><a>My College</a></li>
                </ul>
            </div>
            <div className="form-control navbar-end">
                <div className="flex gap-2 items-center">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    <img className="w-12 h-12 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM-k6MZNxGLkEALmr3oj51S1bFH5JBLTFgUPPB_t2ZiHWv4134Eb47ee526Xu5iSXMLFg&usqp=CAU" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;