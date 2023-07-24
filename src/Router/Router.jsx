import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Layout from "../Components/Layout/Layout";
import CollageDetlias from "../Components/CollageDetlias/CollageDetlias";
import CollagePagerRoute from "../Components/CollagePagerRoute/CollagePagerRoute";
import DetailsPage from "../Components/DetailsPage/DetailsPage";
import AdmissionPage from "../Components/Admission/AdmissionPage/AdmissionPage";
import AdmissionFromPage from "../Components/Admission/AdmissionFromPage/AdmissionFromPage";
import MyCollagePage from "../Components/MyCollage/MyCollagePage/MyCollagePage";
import LogInPage from "../Components/LogInPage/LogInPage";
import SingUpPage from "../Components/SingUpPage/SingUpPage";
import ProfileRoute from "../Components/ProfileRoute/ProfileRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/collageData/:id',
        element: <CollageDetlias />,
        loader: ({ params }) => fetch(`https://collage-task-server-side.vercel.app/collageData/${params.id}`)

      },
      {
        path: '/collage',
        element: <CollagePagerRoute/>,

      },
      {
        path: '/collagePageDetails/:id',
        element: <DetailsPage/>,
        loader: ({ params }) => fetch(`https://collage-task-server-side.vercel.app/collage/${params.id}`)
      },
      {
        path: '/admission',
        element: <AdmissionPage/>,
        loader: () => fetch('https://collage-task-server-side.vercel.app/collage')
      },
      {
        path: '/admissionFrom/:id',
        element: <AdmissionFromPage/>,
      },
      {
        path: '/myCollage',
        element: <MyCollagePage/>,
        loader: () => fetch('https://collage-task-server-side.vercel.app/myCollage')
      },
      {
        path: '/login',
        element: <LogInPage/>,
      },
      {
        path: '/singUp',
        element: <SingUpPage/>,
      },
      {
        path: '/profile',
        element: <ProfileRoute/>,
      },
    ]
  },
]);