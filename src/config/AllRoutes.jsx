import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";

const Home = lazy(() => import("../pages/Home"));
const DashboardLayout = lazy(() => import("../layout/DashboardLayout"));
const HomeLayout = lazy(() => import ('../layout/HomeLayout'))
const Project = lazy(() => import('../pages/dashboard/Project'))

const router = createBrowserRouter(createRoutesFromElements(

  <Route>
    <Route path="/" element={<HomeLayout />} >
    <Route index element={<Home />} />
      
    </Route>
    <Route path="/project" element={<DashboardLayout />} >
      <Route index element={<Project />} />
      
    </Route>
    </Route>
    ))



const AllRoutes = () => {
 

  return (
    <div className="w-full mx-auto bg-white  min-h-[100vh] font-opensans max-w-[1440px] text-[#0F160F]">
      <Toaster />
      <Suspense fallback={<PageLoader />}>

        <RouterProvider router={router} />

      </Suspense>
    </div>
    );
};

    export default AllRoutes;