import Swal from "sweetalert2";
import useAxios from "../../Hooks/Axios/useAxios";
import { useForm } from "react-hook-form";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { useState } from "react";

const MycollageInfoCard = ({ collageIn }) => {
    console.log(collageIn)
    const [rating, setRating] = useState(0)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [axiosSecure] = useAxios();
    // console.log(rating)

    const handelUpdate = (data) => {
        // console.log(data)
        const reviewData = { review: data.review, collageName: collageIn?.collageInfo?.collageName, rating: rating }
        console.log(reviewData)
        axiosSecure.put(`/collage/${collageIn.collageInfo._id}`, {reviewData})
            .then(res => {
                console.log(res.data)
                if (res?.data?.acknowledged) {
                    reset()
                    Swal.fire(
                        'Thanks for your review',
                    )
                }

            })
    }

    return (
        <div>
            <div className="lg:flex shadow-xl lg:m-10">
                <figure><img src={collageIn?.collageInfo?.collageImage} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{collageIn?.collageInfo?.collageName}</h2>
                    <p>Admission date: {collageIn?.collageInfo?.admissionDate}</p>
                    <p>Name : {collageIn.name}</p>
                    <p>Address : {collageIn.address}</p>
                    <p>Email : {collageIn.email}</p>
                    <p>PhoneNumber : {collageIn.phoneNumber}</p>
                    <p>subject : {collageIn.subject}</p>
                    <form onSubmit={handleSubmit(handelUpdate)} className="card-actions justify-between mt-10">

                        <div className="">
                            <input type="text" placeholder="Type here" {...register("review")} className="input input-bordered input-accent w-full max-w-xs" required />
                            
                        </div>
                        <button className="btn btn-primary">Add Review</button>
                    </form>
                    <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} required />
                </div>
            </div>
        </div>
    );
};

export default MycollageInfoCard;