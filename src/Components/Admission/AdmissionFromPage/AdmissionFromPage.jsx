import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/Axios/useAxios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AdmissionFromPage = () => {
    const [axiosSecure] = useAxios()
    const [collageInfo, setCollageInfo] = useState([])
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
   
    const { id } = useParams()
    // console.log(collageInfo)


    useEffect(() => {
        // axiosSecure.get('/collage')
        
        fetch('https://collage-task-server-side.vercel.app/collage')
        .then(res=>res.json())
        .then(data => {
            setCollageInfo(data.find(collageId => collageId._id === id))
        })

    }, [id])


    const submit = (data) => {

       

        // console.log(data.phoneNumber)
        const formImage = new FormData();
        formImage.append('image', data.image[0])


        fetch(image_hosting_url, {
            method: 'POST',
            body: formImage
        })
            .then(res => res.json())
            .then(Response => {
                if (Response.success) {
                    console.log(Response)
                    const imageURl = Response.data.display_url
                    const myCollage = {
                        image: imageURl,
                        address: data.address,
                        dateOfBirth: data.dateOfBirth,
                        email: data.email,
                        name: data.name,
                        phoneNumber: data.phoneNumber,
                        subject: data.subject,
                        collageInfo: collageInfo
                    }
                    axiosSecure.post('/myCollage', myCollage)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire(
                                    'Good job!',
                                    'Successfully Applied',
                                )
                            }
                        })
                }

            })




    }
    return (
        <div className="">

            <form className="w-full m-20" onSubmit={handleSubmit(submit)}>
                <div className="lg:w-1/2 mx-auto grid lg:grid-cols-2">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register("name")} className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register("subject")} className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register("email")} className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"> Phone number</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register("phoneNumber")} className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register("address")} className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"> date of birth</span>
                        </label>
                        <input type="date" placeholder="Type here" {...register("dateOfBirth")} className="input input-bordered w-full max-w-xs" required />
                    </div>
                </div>
                <div className="lg:w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Your Image</span>
                    </label>
                    <input type="file" className="file-input w-full max-w-xs mt-3" {...register("image")} />
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
        </div>
    );
};

export default AdmissionFromPage;