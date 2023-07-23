import { useLoaderData } from "react-router-dom";
// import useAxios from "../../Hooks/Axios/useAxios";
import { useEffect, useState } from "react";
import MycollageInfoCard from "./MycollageInfoCard";


const MyCollagePage = () => {
   
    const data = useLoaderData()
    const [collageData, setCollageData] = useState()  

    // const [axiosSecure] = useAxios();

    console.log(collageData)
    useEffect(() => {
        fetch('http://localhost:5000/myCollage')
            .then(res => res.json())
            .then(data => setCollageData(data.map(itemId=>itemId.submitID)))
    }, [])

    const myClass = data.filter(collage=>collage._id === collageData[0])
    console.log(myClass)



    return (
        <div>
            {
                myClass.map(collageInfo=><MycollageInfoCard key={collageInfo._id} collageInfo={collageInfo}/>)
            }
        </div>
    );
};

export default MyCollagePage;