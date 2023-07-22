import { Link } from "react-router-dom";


const CollagePageCard = ({ singleCollage }) => {
    const { collageName, numberOfTheResearch, collageRating, admissionDate, collageImage } = singleCollage
    return (
        <div>
            <div className="border rounded-lg shadow-2xl">
                <img className="w-full rounded-2xl h-60" src={collageImage} alt="" />
                <div className="pl-5 p-5">
                    <h1>Collage Name: {collageName}</h1>
                    <p>Admission Date: {admissionDate}</p>
                    <p>Number Of The Research: {numberOfTheResearch}</p>
                    <p>Rating: {collageRating}</p>
                </div>
                <Link to={`/collagePageDetails/${singleCollage._id}`}>
                    <button className="w-full px-5 py-2.5 relative rounded group font-medium text-white  inline-block">
                        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                        <span className="relative">Details</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CollagePageCard;