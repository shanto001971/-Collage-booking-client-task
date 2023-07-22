import { useForm } from "react-hook-form";


const AdmissionFromPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const submit = (data)=>{
        console.log(data)
    }
    return (
        <form className="w-full m-20" onSubmit={handleSubmit(submit)}>
            <div className="lg:w-1/2 mx-auto grid lg:grid-cols-2">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" placeholder="Type here" {...register("name")} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Subject</span>
                    </label>
                    <input type="text" placeholder="Type here" {...register("subject")} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Type here" {...register("email")} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Phone number</span>
                    </label>
                    <input type="text" placeholder="Type here" {...register("phoneNumber")} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input type="text" placeholder="Type here" {...register("address")} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> date of birth</span>
                    </label>
                    <input type="date" placeholder="Type here" {...register("dateOfBirth")} className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
            <div className="lg:w-1/2 mx-auto">
            <input type="file" className="file-input w-full max-w-xs mt-3" {...register("file")} />
            <br />
            <button type="submit" className="mt-5 w-1/2 lg:w-full  px-5 py-2.5 relative rounded group font-medium text-white  inline-block">
                        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                        <span className="relative">Submit</span>
                    </button>
            </div>
        </form>
    );
};

export default AdmissionFromPage;