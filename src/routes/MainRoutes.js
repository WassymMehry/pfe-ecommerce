import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/Home')));

// category routing
const CategoryRealestate = Loadable(lazy(() => import('views/category/Real estate/Real_estate')));
const CategoryCars = Loadable(lazy(() => import('views/category/Cars/Cars')));
const CategoryVehicles = Loadable(lazy(() => import('views/category/Vehicles/Vehicules')));
const CategoryPhones = Loadable(lazy(() => import('views/category/Phones/Phones')));
const CategoryComputersAccessories = Loadable(lazy(() => import('views/category/Computers & Accessories/Computers_Accessories')));
const CategoryClothings = Loadable(lazy(() => import('views/category/Clothings/Clothings')));
const CategoryMaterialsEquipment = Loadable(lazy(() => import('views/category/Materials & Equipment/Materials_Equipment')));
const CategoryCosmeticsBeauty = Loadable(lazy(() => import('views/category/Cosmetics & Beauty/Cosmetics_Beauty')));
const CategoryTravel = Loadable(lazy(() => import('views/category/Travel/Travel')));
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
//Annonce routing
const Cars = Loadable(lazy(() => import('views/category/Cars/Annonce')));
const Clothings = Loadable(lazy(() => import('views/category/Clothings/Annonce')));
const ComputersAccessories = Loadable(lazy(() => import('views/category/Computers & Accessories/Annonce')));
const Realestate = Loadable(lazy(() => import('views/category/Real estate/Annonce')));
const Vehicles = Loadable(lazy(() => import('views/category/Vehicles/Annonce')));
const CosmeticsBeauty = Loadable(lazy(() => import('views/category/Cosmetics & Beauty/Annonce')));
const MaterialsEquipment = Loadable(lazy(() => import('views/category/Materials & Equipment/Annonce')));
const Travel = Loadable(lazy(() => import('views/category/Travel/Annonce')));
const Phones = Loadable(lazy(() => import('views/category/Phones/Annonce')));

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
            path: '/home',
            element: <DashboardDefault />
        },
        {
            path: '/Realestate',
            element: <CategoryRealestate />
        },
        {
            path: '/Vehicles',
            element: <CategoryVehicles />
        },
        {
            path: '/Cars',
            element: <CategoryCars />
        },
        {
            path: '/Phones',
            element: <CategoryPhones />
        },
        {
            path: '/Computers&Accessories',
            element: <CategoryComputersAccessories />
        },
        {
            path: '/Clothings',
            element: <CategoryClothings />
        },
        {
            path: '/Materials&Equipment',
            element: <CategoryMaterialsEquipment />
        },
        {
            path: '/Cosmetics&Beauty',
            element: <CategoryCosmeticsBeauty />
        },
        {
            path: '/Travel',
            element: <CategoryTravel />
        },

        {
            path: '/Cars/:id',
            element: <Cars />
        },
        {
            path: '/Clothings/:id',
            element: <Clothings />
        },
        {
            path: '/Computers&Accessories/:id',
            element: <ComputersAccessories />
        },
        {
            path: '/Cosmetics&Beauty/:id',
            element: <CosmeticsBeauty />
        },
        {
            path: '/Materials&Equipment/:id',
            element: <MaterialsEquipment />
        },
        {
            path: '/Phones/:id',
            element: <Phones />
        },
        {
            path: '/Realestate/:id',
            element: <Realestate />
        },
        {
            path: '/Travel/:id',
            element: <Travel />
        },
        {
            path: '/Vehicles/:id',
            element: <Vehicles />
        }
    ]
};

export default MainRoutes;
