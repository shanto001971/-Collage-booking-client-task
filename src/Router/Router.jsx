import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Layout from "../Components/Layout/Layout";
import CollageDetlias from "../Components/CollageDetlias/CollageDetlias";
import CollagePagerRoute from "../Components/CollagePagerRoute/CollagePagerRoute";
import DetailsPage from "../Components/DetailsPage/DetailsPage";
import AdmissionPage from "../Components/Admission/AdmissionPage/AdmissionPage";
import AdmissionFromPage from "../Components/Admission/AdmissionFromPage/AdmissionFromPage";

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
        loader: ({ params }) => fetch(`http://localhost:5000/collageData/${params.id}`)

      },
      {
        path: '/collage',
        element: <CollagePagerRoute/>,

      },
      {
        path: '/collagePageDetails/:id',
        element: <DetailsPage/>,
        loader: ({ params }) => fetch(`http://localhost:5000/collage/${params.id}`)
      },
      {
        path: '/admission',
        element: <AdmissionPage/>,
        loader: () => fetch('http://localhost:5000/collage')
      },
      {
        path: '/admissionFrom/:id',
        element: <AdmissionFromPage/>,
      },
    ]
  },
]);