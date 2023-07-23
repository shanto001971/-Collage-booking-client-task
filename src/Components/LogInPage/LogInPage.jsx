import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

import { useContext, useState } from "react";

import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { authContext } from "../../AuthProvider/AuthProvider";

const LogInPage = () => {

    const [hide, setHide] = useState(false);
    const { singInUser, setUser } = useContext(authContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const froms = location.state?.from?.pathname || "/";
    const handelLogin = (event) => {

        singInUser(event.email, event.password)
            .then(result => {
                setUser(result.user);

                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'successfully LogIn',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(froms, { replace: true });
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="hero w-full bg-base-200">
            <div className="hero-content flex-col w-full">
                
                <form onSubmit={handleSubmit(handelLogin)} className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email" name="email" {...register("email")} placeholder="email" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex justify-center items-center ">
                                <input type={hide ? "text" : "password"} name="password" {...register("password")} placeholder="password" className="input input-bordered w-full" />
                                <span className="absolute right-14" onClick={() => setHide(!hide)}>{hide ? <FaEye /> : <FaEyeSlash />}</span>
                            </div>

                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <p>New hare to  <Link to="/singUp" className='link mt-2'>SingUp</Link></p>
                    </div>
                    

                </form>


            </div>
        </div>
    );
};

export default LogInPage;