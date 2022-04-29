// assets
import {
    IconHome,
    IconCar,
    IconTruck,
    IconDeviceMobile,
    IconDeviceDesktop,
    IconPlane,
    IconHanger,
    IconScissors,
    IconShirt
} from '@tabler/icons';

// constant
const icons = {
    IconHome,
    IconCar,
    IconTruck,
    IconDeviceMobile,
    IconDeviceDesktop,
    IconPlane,
    IconHanger,
    IconScissors,
    IconShirt
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const category = {
    id: 'category',
    title: 'category',
    type: 'group',
    children: [
        {
            id: 'category-Real-estate',
            title: 'Real estate',
            type: 'item',
            url: '/category/Real-estate',
            icon: icons.IconHome,
            breadcrumbs: false
        },
        {
            id: 'category-Cars',
            title: 'Cars',
            type: 'item',
            url: '/category/Cars',
            icon: icons.IconCar,
            breadcrumbs: false
        },
        {
            id: 'category-Vehicles',
            title: 'Vehicles',
            type: 'item',
            url: '/category/Vehicles',
            icon: icons.IconTruck,
            breadcrumbs: false
        },
        {
            id: 'category-Phones',
            title: 'Phones',
            type: 'item',
            url: '/category/Phones',
            icon: icons.IconDeviceMobile,
            breadcrumbs: false
        },
        {
            id: 'category-Computers-Accessories',
            title: 'Computers & Accessories',
            type: 'item',
            url: '/category/ComputersAccessories',
            icon: icons.IconDeviceDesktop,
            breadcrumbs: false
        },
        {
            id: 'category-Clothings',
            title: 'Clothings',
            type: 'item',
            url: '/category/Clothings',
            icon: icons.IconShirt,
            breadcrumbs: false
        },
        {
            id: 'category-Materials-Equipment',
            title: 'Materials & Equipment',
            type: 'item',
            url: '/category/MaterialsEquipment',
            icon: icons.IconScissors,
            breadcrumbs: false
        },
        {
            id: 'category-Cosmetics-Beauty',
            title: 'Cosmetics & Beauty',
            type: 'item',
            url: '/category/CosmeticsBeauty',
            icon: icons.IconHanger,
            breadcrumbs: false
        },
        {
            id: 'category-Travel',
            title: 'Travel',
            type: 'item',
            url: '/category/Travel',
            icon: icons.IconPlane,
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'Icons',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Tabler Icons',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default category;
