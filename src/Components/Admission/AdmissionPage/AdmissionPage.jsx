import { Link, useLoaderData } from "react-router-dom";


const AdmissionPage = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Collage Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((singleCollage,index) => <tr key={singleCollage._id}>
                            <th>{index +1}</th>
                            <Link to={`/admissionFrom/${singleCollage?._id}`}><td>{singleCollage?.collageName}</td></Link>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AdmissionPage;