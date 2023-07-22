import { Link } from "react-router-dom";


const CollageCard = ({ singleData }) => {
    console.log(singleData)
    const { collageImage, collageName, admissionDate, events, researchHistory } = singleData
    return (
        <div className="card w-full bg-base-100 shadow-xl ">
            <figure><img className="h-60 w-full" src={collageImage} alt="CollageImage" /></figure>
            <div className="card-body">
                <h2 className="card-title ">{collageName}</h2>
                <p>Admission dates : {admissionDate}</p>
                {
                    events.map((eventData, index) => <li key={index}>{eventData}</li>)
                }
                <p>Research history : {researchHistory}</p>
                <p>Sports : </p>
                <div className="card-actions justify-end">
                    <Link className="w-full" to={`/collageData/${singleData._id}`}><button className="btn btn-primary w-full">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CollageCard;