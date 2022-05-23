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
            url: '/Realestate',
            icon: icons.IconHome,
            breadcrumbs: false
        },
        {
            id: 'category-Cars',
            title: 'Cars',
            type: 'item',
            url: '/Cars',
            icon: icons.IconCar,
            breadcrumbs: false
        },
        {
            id: 'category-Vehicles',
            title: 'Vehicles',
            type: 'item',
            url: '/Vehicles',
            icon: icons.IconTruck,
            breadcrumbs: false
        },
        {
            id: 'category-Phones',
            title: 'Phones',
            type: 'item',
            url: '/Phones',
            icon: icons.IconDeviceMobile,
            breadcrumbs: false
        },
        {
            id: 'category-Computers-Accessories',
            title: 'Computers & Accessories',
            type: 'item',
            url: '/Computers&Accessories',
            icon: icons.IconDeviceDesktop,
            breadcrumbs: false
        },
        {
            id: 'category-Clothings',
            title: 'Clothings',
            type: 'item',
            url: '/Clothings',
            icon: icons.IconShirt,
            breadcrumbs: false
        },
        {
            id: 'category-Materials-Equipment',
            title: 'Materials & Equipment',
            type: 'item',
            url: '/Materials&Equipment',
            icon: icons.IconScissors,
            breadcrumbs: false
        },
        {
            id: 'category-Cosmetics-Beauty',
            title: 'Cosmetics & Beauty',
            type: 'item',
            url: '/Cosmetics&Beauty',
            icon: icons.IconHanger,
            breadcrumbs: false
        },
        {
            id: 'category-Travel',
            title: 'Travel',
            type: 'item',
            url: '/Travel',
            icon: icons.IconPlane,
            breadcrumbs: false
        }
    ]
};

export default category;
