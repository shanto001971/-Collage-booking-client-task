import { useLoaderData } from "react-router-dom";


const CollageDetlias = () => {
    const data = useLoaderData();
    console.log(data)
    const {collageImage,collageName,admissionProcess,eventDetails,researchWork,sportsCategories,}=data
    return (
        <div className="lg:flex bg-base-100 shadow-xl m-24">
            <figure><img className="" src={collageImage} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl">College names : {collageName}</h2>
                <p><span className="text-2xl">Admission process :</span> {admissionProcess}</p>
                <p><span className="text-2xl">Events details :</span> {eventDetails}</p>
                <p><span className="text-2xl">Research works :</span> {researchWork}</p>
                <p> <span className="text-2xl">Sports categories :</span>
                    {
                        sportsCategories.map((sports,index)=><li key={index}>{sports}</li>)
                    }
                    </p>
            </div>
        </div>
    );
};

export default CollageDetlias;