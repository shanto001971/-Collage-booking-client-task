import { useLoaderData } from "react-router-dom";


const DetailsPage = () => {
    const data = useLoaderData()
    console.log(data)
    const {collageImage,collageName,admissionDate,numberOfTheResearch,collageRating}=data
    return (
        <div className="lg:flex justify-between m-10">
            <div className="border rounded-lg shadow-2xl w-full lg:w-1/2 mx-auto lg:m-10">
                <img className="w-full rounded-2xl" src={collageImage} alt="" />
                <div className="pl-5 p-5">
                    <h1>Collage Name: {collageName}</h1>
                    <p>Admission Date: {admissionDate}</p>
                    <p>Number Of The Research: {numberOfTheResearch}</p>
                    <p>Rating: {collageRating}</p>
                </div>
            </div>
            <div className="lg:w-1/3 mt-5">
                <h1 className="text-center text-3xl mb-5">Events&Sports</h1>
                <div className="lg:flex gap-3">
                    <img className="w-full lg:w-1/2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1neTvOZCmTdOPFaE9NEiMikj0i-xQxM0iw&usqp=CAU" alt="" />
                    <img className="lg:w-1/2" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Boston_College_Rugby_Match.jpg" alt="" />
                </div>
                <img className="mt-5 w-full" src="https://5.imimg.com/data5/GK/LR/EH/SELLER-1469653/college-event-management-service.jpg" alt="" />
            </div>
        </div>
    );
};

export default DetailsPage;