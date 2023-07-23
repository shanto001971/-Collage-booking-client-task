

const MycollageInfoCard = ({collageInfo}) => {
    // console.log(collageInfo)
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={collageInfo?.collageImage} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{collageInfo.collageName}</h2>
                    <p>Admission date: {collageInfo?.admissionDate}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MycollageInfoCard;