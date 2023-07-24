import { useLoaderData } from "react-router-dom";
// import useAxios from "../../Hooks/Axios/useAxios";
// import { useEffect, useState } from "react";
import MycollageInfoCard from "./MycollageInfoCard";


const MyCollagePage = () => {

    const data = useLoaderData()
    // const [collageData, setCollageData] = useState([])
    // const [filterId,setFilterId]=useState('')
    // // const [axiosSecure] = useAxios();

    // console.log(collageData)
    // useEffect(() => {
    //     fetch('https://collage-task-server-side.vercel.app/myCollage')
    //         .then(res => res.json())
    //         .then(data => setCollageData(data.map(itemId => itemId.submitID)))
    // }, [])


    // // const idFilterData = collageData.map(da=> da === )


    // const myClass = data.filter(collage => collage._id === collageData)
    // // console.log(myClass)



    return (
        <div>
            {
                data.map(collageIn => <MycollageInfoCard key={collageIn._id} collageIn={collageIn} />)
            }
        </div>
    );
};

export default MyCollagePage;