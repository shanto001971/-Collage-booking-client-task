import { useEffect, useState } from "react";
import CollagePageCard from "./CollagePageCard/CollagePageCard";


const CollagePagerRoute = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://collage-task-server-side.vercel.app/collage')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className="grid lg:grid-cols-3 gap-4 m-5">
           
            {
                data.map(singleCollage=><CollagePageCard key={singleCollage._id} singleCollage={singleCollage}/>)
            }
           
        </div>
    );
};

export default CollagePagerRoute;