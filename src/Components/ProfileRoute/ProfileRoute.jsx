import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../../AuthProvider/AuthProvider';
import useAxios from '../Hooks/Axios/useAxios';

const ProfileRoute = () => {
    const { user } = useContext(authContext)
    const [profile, setProfile] = useState([])
    // const [axiosSecure] = useAxios()
    // const [name] = profile[0]

    // console.log(name)
    console.log(profile)

    useEffect(() => {
        fetch('https://collage-task-server-side.vercel.app/myCollage')
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [])
    // const [{ name }] = profile[0]
    // console.log(name)

    return (
        <div className='w-full'>
            <div className="lg:w-1/2 mx-auto border rounded">
                <img title={user?.displayName} className="w-24 h-24 rounded-full m-auto my-5" src={user?.photoURL} alt="" />
                <div className="h-60 ">
                    {
                        profile.slice(0, 1).map(profileData => (<div key={profileData._id}>
                            <h1 className='text-center text-2xl'>{profileData?.name}</h1>
                            <p className='ml-5'> Eamil: {profileData?.email}</p>
                            <p>Address: {profileData?.address}</p>
                        </div>))
                    }

                    <h1 className='text-4xl'>To Do </h1>


                </div>
            </div>
        </div>
    );
};

export default ProfileRoute;