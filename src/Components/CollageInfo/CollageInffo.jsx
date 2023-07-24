import { useEffect, useState } from "react";
import CollageCard from "../CollageCard/CollageCard";


const CollageInffo = () => {
    const [collageData, setCollageDdata] = useState([])

    useEffect(() => {
        fetch('https://collage-task-server-side.vercel.app/collageData')
            .then(res => res.json())
            .then(data => setCollageDdata(data))
    }, [])

    return (
        <div className="grid lg:grid-cols-3 gap-5 mt-20">
            {
                collageData.map(singleData => <CollageCard key={singleData._id} singleData={singleData} />)
            }
        </div>
    );
};

export default CollageInffo;