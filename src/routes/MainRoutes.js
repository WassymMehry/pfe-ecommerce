import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// category routing
const CategoryRealestate = Loadable(lazy(() => import('views/category/Real_estate')));
const CategoryCars = Loadable(lazy(() => import('views/category/Cars')));
const CategoryVehicles = Loadable(lazy(() => import('views/category/Vehicles')));
const CategoryPhones = Loadable(lazy(() => import('views/category/Phones')));
const CategoryComputersAccessories = Loadable(lazy(() => import('views/category/Computers_Accessories')));
const CategoryClothings = Loadable(lazy(() => import('views/category/Clothings')));
const CategoryMaterialsEquipment = Loadable(lazy(() => import('views/category/Materials_Equipment')));
const CategoryCosmeticsBeauty = Loadable(lazy(() => import('views/category/Cosmetics_Beauty')));
const CategoryTravel = Loadable(lazy(() => import('views/category/Travel')));
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/category/Real-estate',
            element: <CategoryRealestate />
        },
        {
            path: '/category/Vehicles',
            element: <CategoryVehicles />
        },
        {
            path: '/category/Cars',
            element: <CategoryCars />
        },
        {
            path: '/category/Phones',
            element: <CategoryPhones />
        },
        {
            path: '/category/ComputersAccessories',
            element: <CategoryComputersAccessories />
        },
        {
            path: '/category/Clothings',
            element: <CategoryClothings />
        },
        {
            path: '/category/MaterialsEquipment',
            element: <CategoryMaterialsEquipment />
        },
        {
            path: '/category/CosmeticsBeauty',
            element: <CategoryCosmeticsBeauty />
        },
        {
            path: '/category/Travel',
            element: <CategoryTravel />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
