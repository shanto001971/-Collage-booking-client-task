import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";

const SingUpPage = () => {
    const [err, setErr] = useState('')
    const { createUser, setUser, updateProfileUser } = useContext(authContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()


    const submit = data => {
        console.log(data);
        createUser(data?.email, data?.password)
            .then(result => {
                setUser(result.user)
                console.log(result.user)
                updateProfileUser(data.name, data.photoUrl)
                    .then(() => {

                    })
                    .catch(() => { })

                    if (result.user) {
                        Swal.fire(
                            'Good job!',
                            'SingIn Successfully',
                            'success'
                        )
                    }
                    navigate('/')
            })
            .catch(err => {
                setErr(err.message)
            })
    };



    return (
        <div className="hero min-h-screen bg-base-200 w-full">
            <div className="hero-content flex-col w-full">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 lg:w-1/2">
                    <form onSubmit={handleSubmit(submit)} className="p-10 w-full ">
                        <div className="form-control">

                            <input type="text" {...register("name")} name='name' placeholder="Name" className="input input-bordered " />
                        </div>
                        <div className="form-control mt-5">

                            <input type="text" {...register("email")} name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" {...register("photoUrl")} placeholder="PhotoUrl" className="input input-bordered mt-5 mb-5" />
                        </div>
                        <div className="form-control">

                            <input type="password"  {...register("password")} placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-5">
                            <button type="submit" className="btn btn-primary">SingUp</button>
                        </div>

                    </form>
                    <p>{err}</p>
                </div>
            </div>
        </div>
    );
};

export default SingUpPage;